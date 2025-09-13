import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DrawerMenuItem = ({ item, depth = 0, setIsDrawerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const hasChildren = item.children && item.children.length > 0;

  const handleNavigation = (link) => {
    navigate(link);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <li className={`border-t border-gray-400 py-4 ${depth === 0 ? 'px-4' : depth === 1 ? 'px-6' : 'px-8'}`}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (hasChildren) {
              setIsOpen(prev => !prev);
            } else if ("link" in item) {
              handleNavigation(item.link);
            }
          }}
          className={`flex items-center justify-between cursor-pointer focus:text-primary active:text-primary hover:text-primary transition-colors`}
        >
          <span 
            className="font-normal"
            onClick={(e) => {
              e.stopPropagation();
              if ("link" in item) {
                handleNavigation(item.link);
              }
            }}
          >
            {item.label}
          </span>
          {hasChildren && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(prev => !prev);
              }}
              className='flex items-center gap-3'>
              <div className='w-[1px] h-6 bg-gray-400'></div>
              <IoIosArrowDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          )}
        </div>
      </li>
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {item.children.map((child, index) => (
              <DrawerMenuItem key={index} item={child} depth={depth + 1} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
export default DrawerMenuItem