import { motion } from "framer-motion"

function AnimatedImage({ src, alt, wrapperClass, className, bgColor = "bg-gray-100" }) {
    return (
        <div className={`${wrapperClass}`}>
            <img src={src} alt={alt} className={`${className}`} />
            <motion.span
                className={`absolute inset-0 ${bgColor}`}
                initial={{ scaleX: 1, originX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                viewport={{ once: true, amount: 0.2 }}
            />
        </div>
    )
}

export default AnimatedImage