import Background from "../../assets/footer-background-1.png"
import WhiteLogo from "../../assets/logo-white.svg"
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import FadeIn from "../ui/FadeIn";
import AnimatedText from "../ui/AnimatedText";
import SocialMediaButtons from "../SocialMediaButtons";
import footerLinks from "../../data/footerLinks";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-16 md:pt-32 px-2 sm:px-10 md:px-14 pb-8"
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
                        <SocialMediaButtons />
                    </FadeIn>

                    {/* Explore as */}
                    <FadeIn direction="left" delay={0.4} className="">
                        <AnimatedText
                            text="EXPLORE"
                            textColor="white"
                            className="text-2xl font-bold mb-6"
                            delay={0.4}
                        />
                        <ul className="space-y-3">
                            {footerLinks.map(({ name, link }, index) => (
                                <li key={index}>
                                    <Link to={link} className="text-sm text-gray-600 hover:text-white focus:text-white active:text-white transition hover-underline">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn direction="left" delay={0.6} className=" text-sm">
                        <AnimatedText
                            text="CONTACT"
                            textColor="white"
                            className="text-2xl font-bold mb-6"
                            delay={0.6}
                        />
                        <ul className="space-y-4 text-gray-600">
                            <li>7631 Sabina Park, 115 Devon Isle, Louisiana, USA</li>
                            <li>
                                <a href="#" className="text-xl text-white transition hover-underline">
                                    (+1) 987 654 3210
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-xl text-white transition hover-underline">
                                    info@domain.com
                                </a>
                            </li>
                        </ul>
                    </FadeIn>

                    {/* Newsletter */}
                    <FadeIn direction="left" delay={0.8} className="bg-white/4 rounded-xl py-12 px-10 ">
                        <AnimatedText
                            text="NEWSLETTER"
                            textColor="white"
                            className="text-2xl font-bold mb-6"
                            delay={0.8}
                        />
                        <form className="space-y-6 text-sm sm:text-md">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Ex. info@domain.com"
                                    className="w-full py-2 bg-transparent border-b focus:outline-none active:outline-none border-white text-gray-600"
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

                {/* Social as and Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © Copyright 2025 Fixyland. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <Link to="/terms-and-conditions" className="text-gray-600 hover:text-white focus:text-white active:text-white transition hover-underline">
                            Terms and Conditions
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link to="/privacy-policy" className="text-gray-600 hover:text-white focus:text-white active:text-white transition hover-underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer