import { motion } from "framer-motion";
import WavesImage from "../../assets/waves-shape.png"
import { IoSearch } from "react-icons/io5";
import { FaArrowUpLong, FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SearchDrawer({ setIsSearchDrawerOpen }) {
    const navigate = useNavigate();
    return (
        <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsSearchDrawerOpen(false)}
            className="z-[1000] fixed top-0 right-0 w-full h-full bg-[#000]/90 origin-top"
        >
            {/* Place the image in the bottom of the ovelay */}
            <img src={WavesImage} alt="Waves" className="absolute top-full w-full" />
            {/* Close button */}
            <motion.div
                variants={closeIconVariants}
                className="absolute top-4 right-4 cursor-pointer">
                <FaX
                    onClick={() => setIsSearchDrawerOpen(false)}
                    className="w-8 h-8 text-white absolute top-4 right-4 cursor-pointer"
                />
            </motion.div>
            <motion.div
                variants={arrowIconVariants}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 p-9 bg-primary rounded-full cursor-pointer border-b-4 border-white">
                <FaArrowUpLong className="w-4 h-4 md:w-6 md:h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
                variants={inputVariants}
                onClick={(e) => e.stopPropagation()}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px]"
            >
                <input
                    type={"text"}
                    placeholder={"Search Here"}
                    className="w-full px-4 py-3 md:px-8 md:py-6 text-gray-700 bg-white rounded-md focus:outline-none placeholder:text-gray-600 text-base md:text-xl"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setIsSearchDrawerOpen(false);
                            navigate(`/contact-us`);
                        }

                    }}
                />
                <IoSearch className="w-8 h-8 text-gray-700 text-2xl absolute top-1/2 right-4 -translate-y-1/2" />
            </motion.div>
        </motion.div>
    )
}

export default SearchDrawer


const overlayVariants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren"
        },
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren"
        },
    },
};

const inputVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren"
        },
    },
    exit: {
        scaleX: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren"
        },
    },
};
const arrowIconVariants = {
    hidden: { opacity: 0, y: 150, scale: 1.5 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren"
        },
    },
    exit: {
        opacity: 0,
        scale: 1.5,
        y: 150,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren"
        },
    },
}

const closeIconVariants = {
    hidden: { y: -100 },
    visible: {
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren"
        },
    },
    exit: {
        y: -100,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren"
        },
    },
}
