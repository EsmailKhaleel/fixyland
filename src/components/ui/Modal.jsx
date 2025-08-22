import { motion } from "framer-motion";
import { createPortal } from "react-dom";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-xs"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="rounded-md shadow-md min-w-[300px] max-w-[600px]"
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default Modal;
