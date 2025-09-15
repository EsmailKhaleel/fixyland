import FooterBg from "../../assets/footer-background-2.jpg";
import CardPattern from "../../assets/pattern-1.png";
import WhiteLogo from "../../assets/logo-white.svg";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import footerLinks from "../../data/footerLinks";

export default function Footer2() {
    return (
        <footer
            className="w-full text-white relative pt-16 md:pt-32 pb-10 bg-cover bg-center bg-no-repeat sm:bg-fixed"
            style={{ backgroundImage: `url(${FooterBg})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/80 pointer-events-none" />

            <div className="relative z-10 px-4">
                <div className="grid grid-cols-2 gap-8 xl:gap-0 lg:grid-cols-2 xl:grid-cols-3">
                    {/* Left: vertical nav */}
                    <nav className="order-2 lg:order-1 col-span-1 flex items-center justify-center">
                        <ul className="flex flex-col gap-6 text-center">
                            {footerLinks.map(({ name, link}, index) => (
                                <li key={index}>
                                    <Link to={link} className="text-sm text-gray-300 uppercase tracking-wider hover:text-white transition hover-underline">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Center card */}
                    <div
                        className="order-1 lg:order-2 col-span-2 lg:col-span-1 w-full bg-black rounded-2xl py-12 flex flex-col items-center justify-center gap-6"
                        style={{ backgroundImage: `url(${CardPattern})` }}
                    >
                        {/* logo */}
                        <div className="flex justify-center">
                            <img src={WhiteLogo} alt="Fixyland Logo" className="h-20" />
                        </div>

                        {/* contact info */}
                        <div className="text-center flex flex-col items-center gap-2 text-sm">
                            {["7631 Sabina Park, 115 Devon Isle, ", "Louisiana, USA"].map((item, index) => (
                                <p key={index} className="text-gray-400 text-base font-medium">{item}</p>
                            ))}

                            {["(+1) 987 654 3210", "info@domain.com"].map((item, index) => (
                                <p key={index}
                                    className="text-gray-400 text-base font-medium hover-underline">
                                    {item}
                                </p>
                            ))}

                            <p className="text-gray-400 text-base font-medium">
                                Open : 09:00 am - 01:00 pm
                            </p>
                        </div>

                        {/* newsletter */}
                        <div className="mt-20 text-center self-start w-full px-10">
                            <h3 className="text-white text-2xl font-bold mb-2">
                                GET NEWS & OFFERS
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Subscribe us &amp; Get <span className="font-semibold">25% Off.</span>
                            </p>

                            <form className="flex justify-center">
                                <div className="relative flex w-full">
                                    <input
                                        aria-label="email"
                                        type="email"
                                        placeholder="Ex. info@domain.com"
                                        className="flex-1 px-6 py-5 bg-black/30 placeholder:text-gray-400 text-gray-100 rounded-sm border border-white/10 focus:outline-none"
                                    />
                                    <button
                                        className="absolute right-1 top-1/2 -translate-y-1/2 py-4 px-4 flex items-center justify-center rounded-sm bg-primary flex-shrink-0"
                                        aria-label="subscribe"
                                    >
                                        <IoIosSend className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </form>

                            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-300">
                                <FaCheckCircle className="w-4 h-4" />
                                <label className="select-none">I agree to all terms and policies</label>
                            </div>
                        </div>
                    </div>

                    {/* Right: vertical social list */}
                    <div className="order-2 lg:order-3 sm:col-span-1 lg:col-span-2  xl:col-span-1 flex items-center justify-center">
                        <ul className="flex flex-col gap-6 text-center">
                            {["Facebook", "Twitter", "LinkedIn", "Instagram", "Behance"].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-gray-300 uppercase tracking-wider hover:text-white transition hover-underline">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* bottom small row with terms & copyright info */}
                <div className="px-4 mt-12 pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm text-center">© Copyright 2025 Fixyland. All Rights Reserved.</p>

                    <div className="flex gap-4 text-sm">
                        <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition hover-underline">
                            Terms and Conditions
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition hover-underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
