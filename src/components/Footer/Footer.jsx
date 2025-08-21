import Background from "../../assets/footer-background-1.png"
import WhiteLogo from "../../assets/logo-white.svg"
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import FadeIn from "../ui/FadeIn";

function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-32 px-14 pb-8"
            style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_2fr_3fr_5fr] gap-8 pb-16 ">
                    {/* Logo and About Section */}
                    <FadeIn direction="left" delay={0.2} className="space-y-6 ">
                        <img src={WhiteLogo} alt="Fixyland Logo" className="h-[80px]" />
                        <p className="text-gray-600 text-sm">
                            Nam libero tempore cum soluta nobis eseligendi optio cumque nihile impedit quo minus maxime placeat facere
                        </p>
                        <div className="flex items-center gap-4">
                            {[FaFacebook, FaXTwitter, FaInstagram, FaBehance].map((Icon, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 hover:bg-primary rounded-sm p-3 cursor-pointer transition-colors duration-300 ease-in-out"
                                >

                                    <Icon
                                        className="w-5 h-5 cursor-pointer text-white ounded-sm transition-colors duration-300 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Explore Links */}
                    <FadeIn direction="left" delay={0.4} className="">
                        <h3 className="text-2xl font-bold mb-6">EXPLORE</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-sm text-gray-600 hover:text-white transition hover-underline">About Hotel</Link></li>
                            <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-white transition hover-underline">Pricing</Link></li>
                            <li><Link to="/staff" className="text-sm text-gray-600 hover:text-white transition hover-underline">Hotel Staff</Link></li>
                            <li><Link to="/news" className="text-sm text-gray-600 hover:text-white transition hover-underline">Latest News</Link></li>
                            <li><Link to="/contact" className="text-sm text-gray-600 hover:text-white transition hover-underline">Contact Us</Link></li>
                        </ul>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn direction="left" delay={0.6} className=" text-sm">
                        <h3 className="text-2xl font-bold mb-6">CONTACT</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li>7631 Sabina Park, 115 Devon Isle, Louisiana, USA</li>
                            <li>
                                <a href="tel:+19876543210" className="text-xl text-white transition hover-underline">
                                    (+1) 987 654 3210
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@domain.com" className="text-xl text-white transition hover-underline">
                                    info@domain.com
                                </a>
                            </li>
                        </ul>
                    </FadeIn>

                    {/* Newsletter */}
                    <FadeIn direction="left" delay={0.8} className="bg-white/4 rounded-xl py-12 px-10 ">
                        <h3 className="text-2xl font-bold mb-6">NEWSLETTER</h3>
                        <form className="space-y-6">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Ex. info@domain.com"
                                    className="w-full py-2 bg-transparent border-b focus:outline-none border-white text-gray-600"
                                />
                                <IoIosSend className="w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 text-white" />
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <FaCheckCircle className="w-3 h-3" />
                                <label htmlFor="terms">I agree to all terms and policies</label>
                            </div>
                        </form>
                    </FadeIn>
                </div>

                {/* Social Links and Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © Copyright 2025 Fixyland. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <Link to="/terms" className="text-gray-600 hover:text-white transition hover-underline">Terms and Conditions</Link>
                        <span className="text-gray-600">|</span>
                        <Link to="/privacy" className="text-gray-600 hover:text-white transition hover-underline">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer