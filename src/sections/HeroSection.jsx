import HeroImage from '../assets/banner-1.jpg';
import MainButton from "../components/ui/MainButton";
import AnimatedText from '../components/ui/AnimatedText';

function HeroSection() {
    const text = "Luxury Hotel";
    return (
        <section className="absolute inset-0 h-[850px] flex items-center justify-center">
            <div className="absolute inset-0 -z-10">
                {/* black overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <img
                    src={HeroImage}
                    alt="Hero"
                    className="w-full h-full object-fill"
                    style={{ filter: "brightness(0.5)" }}
                />
            </div>
            <div className="relative text-center text-white max-w-4xl mt-20 z-10">
                <h1 className="text-5xl md:text-[82px] font-bold mb-4 flex flex-col items-center">
                    Book With Best <br />
                    <AnimatedText text={text} textColor='secondary' className="text-secondary" />
                </h1>
                <p className="text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc<br /> Duis egestas ac ante sed tincidunt.
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