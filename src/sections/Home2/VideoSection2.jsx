import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import PrimarySection from "../../components/PrimarySection"
import VideoSection from "../VideoSection"
import CountUpBase from "../../components/CountUpBase"

function VideoSection2() {
    return (
        <PrimarySection>
            <div
                id="rooms"
                className="relative h-auto w-full flex flex-col items-center gap-8"
            >
                <BatchText text="Amazing Experience" />
                <AnimatedText
                    text="Relax and Enjoy Your Stay With Our Luxury Hotel"
                    textColor="white"
                    className="heading-text text-center font-extrabold justify-center max-w-3xl"
                />
                <div className='w-full bg-primary/10 rounded-lg overflow-hidden'>
                    <VideoSection hasOverlay={false} />
                </div>
                <div className="w-full mt-12">
                <CountUpBase />
                </div>
            </div>
        </PrimarySection>
    )
}

export default VideoSection2