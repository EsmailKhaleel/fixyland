import NavbarTopBar from "./NavbarTopBar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import SocialDrawer from "./SocialDrawer";
import SearchDrawer from "./SearchDrawer";
import { useLocation } from "react-router-dom";
import NavbarContent from "./NavbarContent";

function Navbar() {
    const [showSticky, setShowSticky] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSocialDrawerOpen, setIsSocialDrawerOpen] = useState(false);
    const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

    const location = useLocation();
    const isHome2 = location.pathname === "/home-2";

    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <NavbarTopBar
                isHome2={isHome2}
            />
            <header className={`relative z-60 w-full`}>
                <NavbarContent
                    showSticky={false}
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                    setIsSocialDrawerOpen={setIsSocialDrawerOpen}
                    setIsSearchDrawerOpen={setIsSearchDrawerOpen}
                    isHome2={isHome2}
                />
            </header>
            <AnimatePresence mode="wait">
                {showSticky &&
                    <motion.header
                        key={showSticky}
                        initial={showSticky ? { y: -100 } : false}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="fixed top-0 z-60 w-full"
                    >
                        <NavbarContent
                            showSticky={true}
                            isDrawerOpen={isDrawerOpen}
                            setIsDrawerOpen={setIsDrawerOpen}
                            setIsSocialDrawerOpen={setIsSocialDrawerOpen}
                            setIsSearchDrawerOpen={setIsSearchDrawerOpen}
                            isHome2={isHome2}
                        />
                    </motion.header>
                }
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