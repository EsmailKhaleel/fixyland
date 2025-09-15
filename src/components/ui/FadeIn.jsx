import { motion } from "framer-motion";

const FadeIn = ({ children, className, delay = 0, duration = 0.5, direction = "up", viewport = { once: true, amount: 0.2 } }) => (
  <motion.div
    initial={{
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0
    }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration, delay }}
    viewport={viewport}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
