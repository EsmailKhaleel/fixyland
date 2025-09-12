import NavbarTopBar from "./NavbarTopBar";
import NavBarMenu from './NavBarMenu';
import NavbarActions from './NavbarActions';
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import Drawer from "./Drawer";
import SocialDrawer from "./SocialDrawer";
import SearchDrawer from "./SearchDrawer";

function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSocialDrawerOpen, setIsSocialDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

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
          className={`${showSticky ? "fixed top-0" : "absolute"} z-60 w-full`}
        >
          <div className={`relative z-50 ${showSticky ? "bg-white" : "bg-transparent"} flex justify-between items-center gap-4`}>
            <Logo isSticky={showSticky} />
            <NavBarMenu isSticky={showSticky} />
            <NavbarActions
              isSticky={showSticky}
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              setIsSocialDrawerOpen={setIsSocialDrawerOpen}
              setIsSearchDrawerOpen={setIsSearchDrawerOpen}
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