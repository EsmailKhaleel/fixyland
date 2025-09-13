import { CgClose } from "react-icons/cg";
import Logo from "../../assets/Logo.svg";
import { motion } from 'framer-motion';

const overlayVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.3,
      when: "beforeChildren"
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren"
    },
  },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.3
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const closeBtnVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "linear", delay: 0.3 } },
  exit: { y: -100, opacity: 0, transition: { duration: 0.3, ease: "linear" } },
};

function DrawerBase({ setIsDrawerOpen, children }) {
  return (
    <motion.div
      key="overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setIsDrawerOpen(false)}
      className="z-[1000] fixed top-0 right-0 w-full h-full bg-black/98 origin-right"
    >
      <motion.div
        key="drawer"
        variants={drawerVariants}
        onClick={(e) => e.stopPropagation()}
        className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[35%] xl:w-[30%] ml-auto flex flex-col h-full bg-[#E8F3F0] overflow-x-hidden"
      >
        <motion.button
          key="closeBtn"
          variants={closeBtnVariants}
          onClick={() => setIsDrawerOpen(false)}
          className="bg-[#daf5ee] cursor-pointer z-10 p-2 rounded-full absolute top-2 right-4 text-2xl text-gray-800 hover:text-primary transition-colors"
        >
          <CgClose className="text-primary text-4xl"
            style={{
              transform: "perspective(50px) rotateY(-15deg)",
              transformStyle: "preserve-3d",
            }} />
        </motion.button>

        <nav className="w-full mt-6 mb-12">
          <ul className="flex flex-col text-gray-800">
            <li className='pb-6 -ml-9 self-start pl-4'>
              <img src={Logo} alt="Fixyland Logo" className="h-[60px]" />
            </li>
            {children}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
}

export default DrawerBase;
