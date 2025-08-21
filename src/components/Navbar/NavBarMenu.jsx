import DropdownMenu from "../ui/DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";

function NavBarMenu({ isSticky = false }) {
    return (
        <nav className={`hidden xl:flex gap-6 ${isSticky ? 'text-black h-[60px]' : 'text-white h-[100px]' } font-semibold`}>
            <ul className="h-full flex gap-6">
                <li className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-1000">
                    Home <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                    <DropdownMenu items={[
                        { label: 'Home Page 1' },
                        { label: 'Home Page 2' },
                        { label: 'Home Page 3' },
                        {
                            label: 'Header Styles', children: [
                                { label: 'Header Style 1' },
                                { label: 'Header Style 2' },
                                { label: 'Header Style 3' }
                            ]
                        }
                    ]} />
                </li>
                <li className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-1000">
                    Pages <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                    <DropdownMenu items={[
                        { label: 'Booking Form' },
                        { label: 'About Hotel' },
                        { label: 'Restaurant' },
                        { label: 'Gallery' },
                        { label: 'Pricing Plan' },
                        { label: '404 Page' },
                        { label: 'Coming Soon' },
                        { label: 'FAQ' },
                        {
                            label: 'Hotel Staff', children: [
                                { label: 'Staff List' },
                                { label: 'Staff Details' }
                            ]
                        },
                        {
                            label: 'Privacy Policy', children: [
                                { label: 'Privacy Policy 1' },
                                { label: 'Privacy Policy 2' }
                            ]
                        }
                    ]} />
                </li>
                <li className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-1000">
                    Rooms & Suites <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                    <DropdownMenu items={[
                        { label: 'Room List' },
                        { label: 'Room Details' },
                        { label: 'Room Booking' },
                    ]} />
                </li>
                <li className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-1000">
                    Services <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                    <DropdownMenu items={[
                        { label: 'Services Page 1' },
                        { label: 'Services Page 2' },
                        { label: 'Service Details' }
                    ]} />
                </li>
                <li className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-1000">
                    Blog <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                    <DropdownMenu items={[
                        { label: 'Blog List' },
                        { label: 'Blog Details' },
                        { label: 'Blog Grid' },
                        { label: 'Blog Masonry' }
                    ]} />
                </li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-1000">
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default NavBarMenu