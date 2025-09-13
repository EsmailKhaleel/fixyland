import { FaDownload, FaFilePdf, FaFileWord } from "react-icons/fa6"
import DashedLine from "./ui/DashedLine"
import { motion } from "framer-motion"
import { circleVariants, itemVariants } from "./CategoriesList"

const downloadIconVariants = {
    initial: { color: "#ffffff", opacity: 1 },
    hover: { color: "#1f8f6a", opacity: 1, transition: { duration: 0.4 } },
};

const bgCircleVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0, transition: { duration: 0.4 } },
};

const mainIconVariants = {
    initial: { color: "#1f8f6a", opacity: 1 },
    hover: { color: "#ffffff", opacity: 1, transition: { duration: 0.4 } },
};

function DownloadCard() {

    return (
        <div className="w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Download Files</h2>
                    <DashedLine />
                </div>
                <div className="flex flex-col gap-4">
                    {[{
                        label: "Download PDF File",
                        icon: FaFilePdf
                    },
                    {
                        label: "Download DOC File",
                        icon: FaFileWord
                    }].map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="hover"
                            className="relative flex items-center justify-between py-3 px-4 rounded cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div variants={mainIconVariants}>
                                    <category.icon className="w-6 h-6" />
                                </motion.div>
                                <motion.span className="font-medium">{category.label}</motion.span>
                            </div>

                            <div className="absolute top-1/2 -translate-y-1/2 right-1 w-10 h-10">
                                {/* Expanding white circle */}
                                <motion.div
                                    variants={circleVariants}
                                    className="relative w-10 h-10 rounded-full bg-white"
                                />

                                {/* Black background that fades out */}
                                <motion.div
                                    variants={bgCircleVariants}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-10 h-10 rounded-full"
                                />

                                {/* Download icon with animated color */}
                                <motion.div
                                    variants={downloadIconVariants}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    <FaDownload className="w-4 h-4" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DownloadCard
