import FadeIn from "./ui/FadeIn"
import MainButton from "./ui/MainButton"
import CallNowImage from "../assets/call_now_image.jpg"
import CallNowShapeBG from "../assets/shape-1.svg"

function CallNowCard() {
    return (
        <div className="h-fit relative bg-primary w-full rounded-lg overflow-hidden">
            <img
                src={CallNowShapeBG}
                alt="Shape background"
                className="absolute bottom-0 w-full z-0"
            />
            <div className="p-4 sm:p-6 md:p-10 relative h-full flex flex-col items-center gap-8 text-center text-white">
                <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                    <img
                        src={CallNowImage}
                        alt="Call now background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 h-[250px] w-[250px] transform rotate-45 -translate-x-1/2 -translate-y-1/2 bg-secondary/80"></div>
                    <div className="absolute top-0 left-0 h-[280px] w-[280px] transform rotate-45 -translate-x-1/2 -translate-y-1/2 bg-secondary/40"></div>
                </div>
                <h3 className="text-3xl font-bold tracking-wider">
                    (+1) 987 654 3210
                </h3>
                <div className="flex flex-col gap-2 items-center">
                    <span className="text-base">Mon-Fri: 7:00 am - 9:00 pm</span>
                    <span className="text-base">24/7 Service Available</span>
                </div>
                <FadeIn direction="right" delay={0.6}>
                    <MainButton
                        label="Call Us Now"
                        color="secondary"
                        textColor="black"
                        colorHover="black"
                        textColorHover="white"
                    />
                </FadeIn>
            </div>
        </div>
    )
}

export default CallNowCard