import NotFoundImage from "../../assets/error.png"
import AnimatedText from "../../components/ui/AnimatedText"
import FadeIn from "../../components/ui/FadeIn"
import MainButton from "../../components/ui/MainButton"
function NotFoundSection() {
    return (
        <section className="relative bg-primary-light w-full py-22 px-2 sm:px-12 md:px-16 flex flex-col justify-center gap-8 items-center">
            <img src={NotFoundImage} alt="" className="sm:w-[90%] md:w-[70%] sm:h-[90%] md:h-[70%] lg:w-[40%] lg:h-[40%] object-contain" />
            <AnimatedText 
            text="Ohh! Page Not Found" 
            textColor="black" 
            className="text-3xl sm:text-[40px] font-extrabold tracking-wide justify-center" 
            />
            <FadeIn direction="up" delay={0.4} className={"max-w-2xl text-center"}>
                <p className="text-base md:text-lg text-gray-600 font-normal">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
                <MainButton
                label="Back To Home"
                color="primary"
                textColor="white"
                colorHover="black"
                textColorHover="white"
                />
            </FadeIn>
        </section>
    )
}

export default NotFoundSection