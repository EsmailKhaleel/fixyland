import { FaPlus, FaMinus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

function StaffCard({ employee }) {
    const [isIconsVisible, setIsIconsVisible] = useState(false);
    const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        element.classList.add('not-hover');
        setTimeout(() => {
            element.classList.remove('not-hover');
        }, 600);
    };
    return (
        <div className="mt-8 relative flex flex-col items-start gap-4 bg-white rounded-xl z-0 max-w-[400px]">
            <div
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleMouseLeave}
                className="relative overflow-hidden group rounded-t-xl"
            >
                <img src={employee.image} alt="Staff" className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-3 group-focus:scale-110 group-focus:-rotate-3 group-active:scale-110 group-active:-rotate-3 transition-all duration-500 ease-in-out" />
                <span className={`absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-focus:animate-ripple group-active:animate-ripple group-[.not-hover]:animate-rippleReverse origin-center transition-all ease-out`}></span>
                <button
                    onClick={() => setIsIconsVisible(!isIconsVisible)}
                    className="absolute bottom-4 right-4 bg-primary rounded-md p-1 sm:p-2 cursor-pointer transition-all duration-300"
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: isIconsVisible ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <AnimatePresence mode="wait">
                            {isIconsVisible ? (
                                <FaMinus className="w-5 h-5 text-white" />
                            ) : (
                                <FaPlus className="w-5 h-5 text-white" />
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20, visibility: "hidden" }}
                        animate={{
                            opacity: isIconsVisible ? 1 : 0,
                            y: isIconsVisible ? 0 : 20,
                            visibility: isIconsVisible ? "visible" : "hidden"
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute bottom-[calc(100%+8px)] right-0 flex flex-col gap-2"
                    >
                        {[FaFacebook, FaXTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isIconsVisible ? 1 : 0,
                                    y: 0
                                }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary active:text-white rounded-md p-1 sm:p-2 cursor-pointer transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.div>
                        ))}
                    </motion.div>
                </button>
            </div>
            <h2 className="relative text-xl sm:text-2xl ml-4 mt-4 font-bold text-black before:content-[''] before:w-0 before:h-[1px] before:bg-black before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 hover:before:w-full focus:before:w-full active:before:w-full">
                {employee.name}</h2>
            <div className="ml-4 mb-4 flex items-center gap-2">
                <div className="w-6 sm:w-10 h-[1px] bg-primary"></div>
                <p className="text-md sm:text-lg text-gray-600">{employee.position}</p>
            </div>

        </div>
    )
}

export default StaffCard