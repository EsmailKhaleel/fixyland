import Background from "../../assets/pattern-1.png";
import BatchText from "../../components/ui/BatchText"
import AnimatedText from "../../components/ui/AnimatedText"
import VideoSection from "../VideoSection"

function ExperienceVideoSection() {
    return (
        <div
            id="rooms"
            style={{ backgroundImage: `url(${Background})` }}
            className="relative h-auto bg-primary w-full py-24 px-2 sm:px-12 md:px-16 flex flex-col items-center gap-8"
        >
            <BatchText text="Amazing Experience" />
            <AnimatedText text="Relax and Enjoy Your Stay With Our Luxury Hotel" textColor="white" className="text-2xl sm:text-4xl text-center font-extrabold justify-center" />
            <div className='w-full bg-primary/10 rounded-lg overflow-hidden'>
            <VideoSection hasOverlay={false} />
            </div>
        </div>
    )
}

export default ExperienceVideoSection