import NavbarTopBar from "./NavbarTopBar";
import NavBarMenu from './NavBarMenu';
import NavbarActions from './NavbarActions';
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import Drawer from "./Drawer";
import SocialDrawer from "./SocialDrawer";
import SearchDrawer from "./SearchDrawer";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSocialDrawerOpen, setIsSocialDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

  const location = useLocation();
  const isHome2 = location.pathname === "/home-2";

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarTopBar 
        isHome2={isHome2}
      />
      <AnimatePresence>
        <motion.header
          key={showSticky}
          initial={showSticky ? { y: -100 } : false}
          animate={{ y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={`${showSticky ? "fixed top-0" : "relative"} z-60 w-full`}
        >
          <div className={`relative z-[999] ${showSticky ? "bg-white/90" : "bg-transparent"} max-h-[70px] sm:max-h-[80px] flex justify-between items-center gap-4`}>
            <Logo isSticky={showSticky} isHome2={isHome2}/>
            <NavBarMenu isSticky={showSticky} />
            <NavbarActions
              isSticky={showSticky}
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              setIsSocialDrawerOpen={setIsSocialDrawerOpen}
              setIsSearchDrawerOpen={setIsSearchDrawerOpen}
              isHome2={isHome2}
            />
          </div>
        </motion.header>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isDrawerOpen &&
          <Drawer setIsDrawerOpen={setIsDrawerOpen} />
        }
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isSocialDrawerOpen &&
          <SocialDrawer setIsDrawerOpen={setIsSocialDrawerOpen} />
        }
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isSearchDrawerOpen &&
          <SearchDrawer setIsSearchDrawerOpen={setIsSearchDrawerOpen} />
        }
      </AnimatePresence>

    </>
  );
}

export default Navbar