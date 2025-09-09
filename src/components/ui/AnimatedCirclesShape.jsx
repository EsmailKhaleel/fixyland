import { motion } from "framer-motion"

function AnimatedCirclesShape() {
  return (
    <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 flex items-center w-56 h-56 "
      >
        <div
          className="w-full h-full opacity-20 self-start"
          style={{
            background: `radial-gradient(circle at center, #1f8f6a 2px, transparent 2px)`,
            backgroundSize: '11px 11px',
            maskImage: 'radial-gradient(circle at center, white 70%, transparent 70%)',
          }}
        >
        </div>
      </motion.div>
  )
}

export default AnimatedCirclesShape