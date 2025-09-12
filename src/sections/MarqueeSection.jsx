// MarqueeSection.jsx
import TextMarquee from "../components/TextMarquee";

const firstMarqueeText = ["Relax", "Enjoy", "Luxury Hotel", "Hotel & Resort"];
const secondMarqueeText = ["Enjoy Booking", "Luxury Hotel", "Hotel & Resort"];

export default function MarqueeSection() {
    return (
        <section className="relative h-[200px] sm:h-[280px] lg:h-[340px] bg-primary/10 overflow-hidden">
            {/* First Marquee */}
            <div className="absolute inset-0 flex items-center justify-center">
                <TextMarquee
                    items={secondMarqueeText}
                    bg="gray-900"
                    direction="right"
                    rotate="-rotate-8 md:-rotate-3"
                />
            </div>

            {/* Second Marquee */}
            <div className="absolute inset-0 flex items-center justify-center">
                <TextMarquee
                    items={firstMarqueeText}
                    bg="primary"
                    direction="left"
                    rotate="rotate-8 md:rotate-3"
                />
            </div>
        </section>
    );
}
