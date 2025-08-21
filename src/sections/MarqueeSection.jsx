import TextMarquee from "../components/TextMarquee";

export default function MarqueeSection() {
    const firstMarqueeText = [
        "Relax",
        "Enjoy",
        "Luxury Hotel",
        "Hotel & Resort",
    ];
    const secondMarqueeText = ["Enjoy Booking", "Luxury Hotel", "Hotel & Resort"];

    return (
        <section className="relative h-[250px] flex flex-col bg-primary/10 overflow-hidden pt-20">
            <TextMarquee
                items={secondMarqueeText}
                bg="gray-900"
                direction="right"
                rotate="-3deg"
            />
            <TextMarquee
                items={firstMarqueeText}
                bg="primary"
                direction="left"
                rotate="3deg"
            />
        </section>
    );
}
