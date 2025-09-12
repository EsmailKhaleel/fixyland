import { FaPlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { useEffect, useState, useRef } from "react";

function PlayVideoButton({ sectionRef }) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleClose = () => {
        setIsOpen(false);
        timeoutRef.current = setTimeout(() => {
            sectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 300);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    return (
        <>
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white opacity-70"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 3,
                        delay: i * 0.6,
                        ease: "easeOut",
                    }}
                    style={{ transform: "translate(-50%, -50%)" }}
                />
            ))}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.4 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FaPlay className="text-2xl text-black ml-1" />
                </div>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-[90%] sm:w-[80%] sm:min-w-[600px] aspect-video bg-black p-4 rounded-md  border border-gray-800 shadow-lg"
                        >
                            <button
                                className="absolute -top-8 right-0 text-white text-3xl cursor-pointer font-light z-10"
                                onClick={handleClose}
                            >
                                <FaTimes />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/qemqQHaeCYo?autoplay=1&mute=1"
                                title="YouTube video"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                style={{ border: "none" }}
                            />
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </>
    )
}

export default PlayVideoButton