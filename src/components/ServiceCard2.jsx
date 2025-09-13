import { motion } from "framer-motion"

function ServiceCard2({ service }) {
    const iconVariants = {
        initial: { rotate: 0, scale: 1 },
        hover: {
            rotate: [0, 90, 0],
            scale: [1, 0, 1],
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    }
    return (
        <motion.div
            initial="initial"
            whileHover="hover" // triggers children variants
            whileTap="hover"
            className="group relative w-full bg-white rounded-lg flex flex-col items-center text-center overflow-hidden"
            >
            <div className="relative w-full h-[300px] overflow-hidden">
                {/* Image */}
                <img
                    src={service.image}
                    alt={service.label}
                    className="w-full h-[300px] object-cover"
                />

                {/* White triangle overlay */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                        w-0 h-0 
                        border-l-[300px] border-r-[300px] border-b-[50px] 
                        border-l-transparent border-r-transparent border-b-white">
                </div>
            </div>

            <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-800 mt-4">{service.label}</h3>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempoer et dolore magna aliqua.
                </p>
            </div>

            {/* Center Badge on triangle tip */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-8 rounded-full">
                <motion.div
                    className="w-full h-full"
                    variants={iconVariants}
                >
                    <service.icon className="w-14 h-14 text-white" />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ServiceCard2
