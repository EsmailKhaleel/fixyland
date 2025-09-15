import Logo from "./Logo"
import NavbarActions from "./NavbarActions"
import NavBarMenu from "./NavBarMenu"

function NavbarContent({ showSticky, ...props }) {
    return (
        <div className={`relative z-[999] ${showSticky ? "bg-white/90" : "bg-transparent"} max-h-[70px] sm:max-h-[80px] flex justify-between items-center gap-4`}>
            <Logo
                isSticky={showSticky}
                isHome2={props.isHome2}
            />
            <NavBarMenu isSticky={showSticky} />
            <NavbarActions
                isSticky={showSticky}
                {...props}
            />
        </div>
    )
}

export default NavbarContent