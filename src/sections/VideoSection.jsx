import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../assets/video-background-1.jpg";
import { FaPlay, FaTimes } from "react-icons/fa";

function VideoSection() {
    const [isOpen, setIsOpen] = useState(false);
    const sectionRef = useRef(null);
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
        <div ref={sectionRef} className="relative w-full h-[400px] sm:h-[600px] overflow-hidden">
            <img
                src={Background}
                alt="background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border bg-gray-200 opacity-70"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{
                        duration: 2,
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
                    <motion.div
                        id="video-modal"
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-[90%] max-w-3xl aspect-video bg-black"
                        >
                            <button
                                className="absolute -top-8 right-0 text-white text-2xl z-10"
                                onClick={handleClose}
                            >
                                <FaTimes />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/qemqQHaeCYo?autoplay=1&mute=0"
                                title="YouTube video"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                style={{ border: "none" }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default VideoSection;
