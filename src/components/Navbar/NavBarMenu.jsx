import DropdownMenu from "../ui/DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";
import menuItems from "../../data/menuItems";

function NavBarMenu({ isSticky = false }) {
    return (
        <nav className={`hidden xl:flex gap-6 ${isSticky ? 'text-black h-[60px]' : 'text-white h-[100px]' } font-semibold`}>
            <ul className="h-full flex gap-6">
                {menuItems.map((item) => (
                    <li key={item.label} className={`group relative flex items-center gap-1 cursor-pointer hover:text-primary focus:text-primary transition-colors duration-1000 ${!item.children ? '' : ''}`}>
                        {item.label} {item.children && <IoIosArrowDown className="group-hover:rotate-180 group-focus:rotate-180 transition-transform duration-300" />}
                        {item.children && <DropdownMenu items={item.children} />}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBarMenu