import { motion, useReducedMotion } from "framer-motion";

export default function BurgerButton({ isDrawerOpen, toggleDrawer }) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: "easeInOut" };

  const topVariants = {
    closed: { x1: 4, y1: 7, x2: 20, y2: 7 },
    open: { x1: 6, y1: 18, x2: 18, y2: 6 },
  };
  
  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  
  const bottomVariants = {
    closed: { x1: 4, y1: 17, x2: 20, y2: 17 },
    open: { x1: 6, y1: 6, x2: 18, y2: 18 },
  };

  return (
    <button
      onClick={toggleDrawer}
      aria-label="Toggle menu"
      aria-expanded={isDrawerOpen}
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer text-gray-900"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* top */}
        <motion.line
          variants={topVariants}
          initial={isDrawerOpen ? "open" : "closed"}
          animate={isDrawerOpen ? "open" : "closed"}
          transition={transition}
          // visual props
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* middle (fades) */}
        <motion.line
          x1={4}
          y1={12}
          x2={20}
          y2={12}
          variants={middleVariants}
          initial={isDrawerOpen ? "open" : "closed"}
          animate={isDrawerOpen ? "open" : "closed"}
          transition={transition}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* bottom */}
        <motion.line
          variants={bottomVariants}
          initial={isDrawerOpen ? "open" : "closed"}
          animate={isDrawerOpen ? "open" : "closed"}
          transition={transition}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
}
