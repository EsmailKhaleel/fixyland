import Background from "../assets/video-background-1.jpg";
import PlayVideoButton from "../components/ui/PlayVideoButton";
import { useRef } from "react";

function VideoSection({ hasOverlay = true }) {
    const sectionRef = useRef(null);
    return (
        <div
            ref={sectionRef}
            className="relative w-full h-[400px] sm:h-[600px] overflow-hidden bg-fixed"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
            {hasOverlay && <div className="absolute inset-0 bg-black/60"></div>}
            <PlayVideoButton sectionRef={sectionRef} />
        </div>
    );
}

export default VideoSection;
