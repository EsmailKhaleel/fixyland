import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FadeIn from "./ui/FadeIn";
function SocialMediaButtons({
    color = 'bg-white/5',
    colorHover = 'bg-primary',
    iconColor = 'text-white',
    iconColorHover = 'text-white'
}) {
    return (
        <div className="flex items-center gap-4">
            {[FaFacebook, FaXTwitter, FaInstagram, FaBehance].map((Icon, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                    <div
                        key={index}
                        className={`${color} active:${colorHover} focus:${colorHover} hover:${colorHover} rounded-sm p-3 cursor-pointer transition-colors duration-1000 ease-in-out`}
                    >

                        <Icon
                            className={`${iconColor} active:${iconColorHover} focus:${iconColorHover} hover:${iconColorHover} w-5 h-5 cursor-pointer ounded-sm transition-colors duration-1000 ease-in-out`}
                        />
                    </div>
                </FadeIn>
            ))}
        </div>
    )
}

export default SocialMediaButtons