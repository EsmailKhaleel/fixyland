import { IoSearchOutline } from "react-icons/io5";
import MenuIcon from "../ui/MenuIcon";
import MainButton from "../ui/MainButton";
import BurgerButton from "../ui/BurgerButton";
import { FaPhone } from "react-icons/fa6";

function NavbarActions({ isSticky = false, isDrawerOpen, setIsDrawerOpen, setIsSocialDrawerOpen, setIsSearchDrawerOpen, isHome2 }) {
    return (
        <div className="flex gap-4 items-center mr-4">
            <div 
            onClick={() => setIsSearchDrawerOpen(prev => !prev)}
            className={`items-center justify-center flex p-3 sm:p-4 rounded-full ${isSticky ? 'bg-gray/10 focus:bg-gray/20 active:bg-gray/20 hover:bg-gray/20' : 'bg-white/10 focus:bg-white/20 active:bg-white/20 hover:bg-white/20'} transition-all duration-300`}>
                <IoSearchOutline className={`${isSticky ? 'text-black' : 'text-white'} cursor-pointer text-3xl`} />
            </div>
            <div
                onClick={() => setIsSocialDrawerOpen(prev => !prev)}
                className={`hidden xl:flex group ${isSticky ? 'bg-gray/10 focus:bg-gray/20 active:bg-gray/20 hover:bg-gray/20' : 'bg-white/10 focus:bg-white/20 active:bg-white/20 hover:bg-white/20'} items-center justify-center flex p-4.5 rounded-full transition-all duration-300 cursor-pointer`}>
                <MenuIcon isSticky={isSticky} />
            </div>
           {!isHome2 ? <div className="hidden md:block">
                <MainButton
                    label="Book Your Stay"
                    colorHover={isSticky ? "black" : "white"}
                    textColorHover={isSticky ? "white" : "black"}
                />
            </div> :(
                <div className="hidden md:flex items-center gap-4">
                    <div className="h-12 w-[1px] bg-gray-700/20"></div>
                    <div className="flex items-center gap-4">
                        <FaPhone className={`w-8 h-8 ${isSticky? 'text-black' : 'text-white'}`} />
                        <div className={`flex flex-col gap-0 ${isSticky? 'text-black' : 'text-white'}`}>
                            <h4 className="text-sm">Call Anytime</h4>
                            <p className="font-semibold text-xl">(+1) 987 654 321</p>
                        </div>
                    </div>
                </div>
            )}
            <div
                onClick={() => setIsDrawerOpen(prev => !prev)}
                className={`xl:hidden cursor-pointer items-center justify-center flex p-1 sm:p-2 rounded-sm bg-secondary transition-all duration-300`}>
                <BurgerButton isDrawerOpen={isDrawerOpen} />
            </div>
        </div>
    )
}

export default NavbarActions