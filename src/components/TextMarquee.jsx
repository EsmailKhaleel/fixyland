import Marquee from "react-fast-marquee";
import StarIcon from "../assets/star.svg";
import { motion } from "framer-motion";

function TextMarquee({ items, bg, direction = "left", rotate = "-3deg" }) {
    return (
        <div
            className={`absolute top-0 -left-[40px] right-[40px] w-[2000px] overflow-hidden`}
            style={{ 
                transform: `rotate(${rotate})`,
                 top: rotate === "-3deg" ? `20%` : `22%`, 
                 transformOrigin: "top" 
                }}
        >
            <Marquee
                gradient={false}
                speed={30}
                pauseOnHover={false}
                direction={direction}
                className={`bg-${bg} py-7`}
            >
                {[...items, ...items, ...items].map((text, index) => (
                    <div
                        key={index}
                        className="flex items-center text-3xl md:text-4xl lg:text-5xl font-extrabold"
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className={`mx-10 ${bg === "primary" ? "bg-black/10" : "bg-black/40"} flex items-center justify-center rounded-full p-2`}>
                            <img src={StarIcon} alt="Star Icon" className="w-6 h-6" />
                        </motion.div>
                        <span data-text={text} className={`marquee-text tracking-widest text-${bg}`}>
                            {text}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

export default TextMarquee