import { CgClose } from "react-icons/cg";
import Logo from "../../assets/Logo.svg";
import { motion } from 'framer-motion';
import menuItems from '../../data/menuItems';
import DrawerMenuItem from "./DrawerMenuItem";

function Drawer({ setIsDrawerOpen }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsDrawerOpen(false)}
      className="z-[1000] fixed top-0 right-0 w-full h-full bg-black/98 origin-right"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", damping: 20, stiffness: 100, duration: 0.3, delay: 0.3 }}
        className="w-[30%] ml-auto flex flex-col h-full bg-[#E8F3F0] overflow-x-hidden"
      >
        <div className=" flex flex-col min-h-full">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute top-2 right-2 text-2xl text-gray-800 hover:text-primary transition-colors skew-1 transform"
          >
            <CgClose className="text-primary text-4xl" />
          </button>

          <nav className="w-full mt-6">
            <ul className="flex flex-col text-gray-800">
              <li className='pb-6 -ml-9 self-start'>
                <img src={Logo} alt="Fixyland Logo" className="h-[60px]" />
              </li>
              {menuItems.map((item, index) => (
                <DrawerMenuItem key={index} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Drawer