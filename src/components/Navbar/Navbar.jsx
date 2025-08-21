import NavbarTopBar from "./NavbarTopBar";
import NavBarMenu from './NavBarMenu';
import NavbarActions from './NavbarActions';
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";

function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarTopBar />
      <AnimatePresence>
        <motion.header
          key={showSticky}
          initial={showSticky ? { y: -100 } : false}
          animate={{ y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={`${showSticky ? "fixed top-0" : "absolute"} z-50 w-full`}
        >
          <div className={`relative z-50 ${showSticky ? "bg-white" : "bg-transparent"} flex justify-between items-center gap-4`}>
            <Logo isSticky={showSticky} />
            <NavBarMenu isSticky={showSticky} />
            <NavbarActions isSticky={showSticky} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          </div>
        </motion.header>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isDrawerOpen &&
          <Drawer setIsDrawerOpen={setIsDrawerOpen} />
        }
      </AnimatePresence>
    </>
  );
}

export default Navbar