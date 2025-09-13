import HeroImage from '../assets/banner-1.jpg';
import MainButton from "../components/ui/MainButton";
import AnimatedText from '../components/ui/AnimatedText';

function HeroSection() {
    const text = "Luxury Hotel";
    return (
        <section className="absolute inset-0 h-[850px] flex items-center justify-center">
            <div className="absolute inset-0 -z-10">
                {/* black overlay */}
                <img
                    src={HeroImage}
                    alt="Hero"
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.4)" }}
                />
            </div>
            <div className="relative text-center text-white max-w-4xl z-55 flex flex-col gap-8">
                <h1 className="text-4xl sm:text-5xl md:text-[70px] font-bold flex flex-col items-center">
                    Book With The Best
                    <AnimatedText text={text} textColor='secondary' className="text-secondary" />
                </h1>
                <p className="text-lg max-w-[350px] md:max-w-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc Duis egestas ac ante sed tincidunt.
                </p>
                <div className="flex gap-4 justify-center flex-col sm:flex-row items-center">
                    <MainButton
                        label="Explore Rooms"
                    />
                    <MainButton
                        label="Our Services"
                        color="white"
                        colorHover="secondary"
                        textColor="black"
                        textColorHover="black"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection