import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function NavbarTopBar() {
    return (
        <div className="bg-primary text-white p-3 flex justify-center lg:justify-between items-center select-none cursor-text">
            <ul className="hidden lg:flex gap-6 font-[500] square-bullets list-disc list-inside marker:text-secondary marker:text-xl">
                <li>7631 Sabina Park, 115 Devon Isle, USA</li>
                <li>info@domain.com</li>
                <li>(+1) 987 654 3210</li>
            </ul>

            <div className="flex gap-8 text-xl">
                {[FaFacebook, FaXTwitter, FaInstagram, FaBehance].map((Icon, index) =>
                (<Icon
                    key={index}
                    className="hover:text-secondary focus:text-secondary active:text-secondary transition-colors duration-500 ease-in cursor-pointer z-50"
                />))}
            </div>
        </div>
    )
}

export default NavbarTopBar