import { motion } from "framer-motion";

const FadeIn = ({ children, className, delay = 0, duration = 0.5, direction = "up" }) => (
  <motion.div
    initial={{
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0
    }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
