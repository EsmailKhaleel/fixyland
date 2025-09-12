import Marquee from "react-fast-marquee";
import StarIcon from "../assets/star.svg";
import { motion } from "framer-motion";

function TextMarquee({ items, bg, direction = "left", rotate = "-3deg" }) {
  return (
    <div
      className={`w-[200%] transform ${rotate} origin-center`}
    >
      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover={false}
        direction={direction}
        className={`bg-${bg} py-4 md:py-8 lg:py-10`}
      >
        {[...items, ...items].map((text, index) => (
          <div
            key={index}
            className="flex items-center text-4xl lg:text-5xl font-extrabold"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`mx-6 md:mx-10 ${
                bg === "primary" ? "bg-black/10" : "bg-black/40"
              } flex items-center justify-center rounded-full p-2`}
            >
              <img src={StarIcon} alt="Star Icon" className="w-6 h-6" />
            </motion.div>
            <span className={`marquee-text tracking-widest text-${bg}`}>
              {text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default TextMarquee;
