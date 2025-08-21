import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const letter = {
    hidden: { opacity: 0, x: 50, scale: 1.1 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 12 } },
};

function AnimatedText({ text, textColor = "black", className = "" }) {
    // Split the text into an array of words
    const words = text.split(" ");
    
    return (
        <motion.div
            className={`text-${textColor} ${className} flex flex-wrap`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={letter}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char === "|" ? <br /> : char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    )
}

export default AnimatedText;