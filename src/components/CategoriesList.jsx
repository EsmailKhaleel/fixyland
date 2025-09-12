import { FaArrowRight } from "react-icons/fa6";
import DashedLine from "../components/ui/DashedLine";
import { motion } from "framer-motion";

export const itemVariants = {
    initial: {
        backgroundColor: "#E8F3F0",
        color: "#4B5563",
    },
    hover: {
        backgroundColor: "#1f8f6a",
        color: "#ffffff",
        transition: { duration: 0.4 },
    },
};

export const circleVariants = {
    initial: { scale: 0 },
    hover: { scale: 1, transition: { duration: 0.2 } },
};

export const arrowVariants = {
    initial: { rotate: -45, color: "#4B5563" },
    hover: { rotate: 0, color: "#1f8f6a", transition: { duration: 0.2 } },
};

function CategoriesList() {

    return (
        <div className="w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Categories List</h2>
                    <DashedLine />
                </div>
                <div className="flex flex-col gap-4">
                    {["Hotel", "Travel", "Restaurant", "Room", "Food"].map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="initial"
                            whileHover="hover"
                            className="relative group flex items-center justify-between py-3 px-4 rounded cursor-pointer"
                        >
                            <motion.span className="font-medium">{category}</motion.span>
                            <div className="absolute top-1/2  -translate-y-1/2 right-1 w-10 h-10">
                                <motion.div
                                    variants={circleVariants}
                                    className="relative w-10 h-10 rounded-full bg-white"
                                />
                                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" variants={arrowVariants}>
                                    <FaArrowRight className="w-4 h-4" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoriesList;
