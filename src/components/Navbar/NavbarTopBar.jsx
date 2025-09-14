import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MainButton from "../ui/MainButton";

function NavbarTopBar({ isHome2 }) {
    return (
        <div className={`${!isHome2 ? 'bg-primary py-3' : 'bg-black py-3 md:py-0'} text-white px-3 flex justify-center lg:justify-between items-center select-none cursor-text`}>
            <ul className="hidden lg:flex gap-6 font-[500] square-bullets list-disc list-inside marker:text-secondary marker:text-lg">
                <li>7631 Sabina Park, 115 Devon Isle, USA</li>
                <li>info@domain.com</li>
                <li>(+1) 987 654 3210</li>
            </ul>
            <div className="flex gap-10 items-center">
                <div className="flex gap-8 text-xl">
                    {[FaFacebook, FaXTwitter, FaInstagram, FaBehance].map((Icon, index) =>
                    (<Icon
                        key={index}
                        className="hover:text-secondary focus:text-secondary active:text-secondary transition-colors duration-500 ease-in cursor-pointer z-50"
                    />))}
                </div>
                {isHome2 && (
                    <div className="hidden md:block">
                        <MainButton
                            label="Book Your Stay"
                            color="primary"
                            colorHover="white"
                            textColor="white"
                            textColorHover="black"
                            borderRadius=" "
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavbarTopBar