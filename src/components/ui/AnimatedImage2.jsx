import { motion } from "framer-motion"

function AnimatedImage2({ src, alt, wrapperClass, className, bgColor = "bg-gray-100" }) {
    return (
        <div className={`relative ${wrapperClass}`}>
            <img src={src} alt={alt} className={`${className}`} />
            <motion.span
                className={`absolute top-0 left-0 bottom-0 right-3/6 ${bgColor}`}
                initial={{ scaleX: 1, originX: -1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ once: true, amount: 0.3 }}
            />
            <motion.span
                className={`absolute top-0 left-3/6 bottom-0 right-0 ${bgColor}`}
                initial={{ scaleX: 1, originX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ once: true, amount: 0.3 }}
            />
        </div>
    )
}

export default AnimatedImage2