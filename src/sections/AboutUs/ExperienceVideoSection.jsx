import BatchText from "../../components/ui/BatchText"
import AnimatedText from "../../components/ui/AnimatedText"
import VideoSection from "../VideoSection"
import PrimarySection from "../../components/PrimarySection";

function ExperienceVideoSection() {
    return (
        <PrimarySection>
            <div
                id="rooms"
                className="relative h-auto w-full flex flex-col items-center gap-8"
            >
                <BatchText text="Amazing Experience" />
                <AnimatedText text="Relax and Enjoy Your Stay With Our Luxury Hotel" textColor="white" className="heading-text text-center font-extrabold justify-center" />
                <div className='w-full bg-primary/10 rounded-lg overflow-hidden'>
                    <VideoSection hasOverlay={false} />
                </div>
            </div>
        </PrimarySection>
    )
}

export default ExperienceVideoSection