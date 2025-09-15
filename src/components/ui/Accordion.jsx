import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Accordion({ isOpen, setIsOpen, question, answer }) {
    const contentRef = useRef(null);
    return (
        <div className="group flex flex-col rounded-sm bg-primary-light">
            {/* Header */}
            <div
                onClick={() => setIsOpen(isOpen === question ? "" : question)}
                className="flex items-center justify-between gap-2 cursor-pointer p-4 sm:p-6"
            >
                <h4 className="font-semibold text-base text-gray-900">{question}</h4>

                {/* Icon with hover circle */}
                <motion.div
                    animate={{ rotate: isOpen === question ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center justify-center"
                >
                    <span
                        className={`absolute w-10 h-10 flex items-center justify-center 
                        rounded-full transition-all duration-300 
                        ${isOpen === question ? "scale-100" : "scale-0"} 
                        bg-primary z-0`}
                    >
                    </span>

                    {isOpen === question ? (
                        <FaMinus className={`w-4 h-4 text-black ${isOpen === question ? "text-white" : ""} z-10`} />
                    ) : (
                        <FaPlus className={`w-4 h-4 text-black ${isOpen === question ? "text-white" : ""} z-10`} />
                    )}
                </motion.div>
            </div>

            {/* Body */}
            <AnimatePresence>
                {isOpen === question && (
                    <motion.div
                        key="content"
                        ref={contentRef}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: contentRef.current?.scrollHeight || "auto",
                            opacity: 1,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed p-4 sm:p-6">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Accordion;
