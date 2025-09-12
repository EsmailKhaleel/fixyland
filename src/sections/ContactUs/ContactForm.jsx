import FadeIn from "../../components/ui/FadeIn"
import Input from "../../components/ui/Input"
import MainButton from "../../components/ui/MainButton"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
function ContactForm() {
    return (
        <div className="flex flex-col gap-8">
            <div className="self-start">
            <BatchText text="Contact Us"/>
            </div>
            <AnimatedText
                text="Let's Get in Touch"
                className="heading-text font-extrabold tracking-wide"
            />

            <FadeIn direction="up" delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        type="text"
                        placeholder="Ex: your name"
                        label="First Name"
                        bgColor="bg-primary-light"
                    />
                    <Input
                        type="text"
                        placeholder="Ex: your name"
                        label="Last Name"
                        bgColor="bg-primary-light"
                    />
                    <Input
                        type="email"
                        placeholder="Ex: info@domain.com"
                        label="Email"
                        bgColor="bg-primary-light"
                    />
                    <Input
                        type="text"
                        placeholder="Ex: USA"
                        label="Address"
                        bgColor="bg-primary-light"
                    />
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <textarea
                        id="message"
                        placeholder="Ex: type message"
                        className="bg-primary-light resize-none rounded-sm px-3 py-3 md:px-4 md:py-4 text-black w-full h-40 focus:outline-none focus:ring-1 focus:ring-primary active:outline-none active:ring-1 active:ring-primary hover:outline-none hover:ring-1 hover:ring-primary transition-all duration-500"
                    />
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        className="w-4 h-4 accent-primary"
                    />
                    <label htmlFor="saveInfo" className="text-gray-600">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.7}>
                <div className="w-fit">
                    <MainButton
                        label="Send A Message"
                        color="primary"
                        colorHover="black"
                        textColor="white"
                        textColorHover="white"
                    />
                </div>
            </FadeIn>
        </div>
    )
}

export default ContactForm