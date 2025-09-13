import { FaRegCircleCheck } from "react-icons/fa6"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import FadeIn from "../../components/ui/FadeIn"
import MainButton from "../../components/ui/MainButton"
import features from "../../data/features"
import SwimImage from '../../assets/swim.svg'
import TreadmillImage from '../../assets/treadmill.svg'
import AnimatedImage from "../../components/ui/AnimatedImage"
import { motion } from "framer-motion"
import About1 from "../../assets/about-2-1.jpg"
import About2 from "../../assets/about-2-2.jpg"
import Spoon from "../../assets/spoon.svg"
import CheckItem from "../../components/ui/CheckItem"
function Activities() {
    return (
        <section className="relative w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-20 section-padding bg-primary-light">
            <div className="flex flex-col items-start gap-4 sm:gap-6 pt-8 sm:pt-12">
                <BatchText text="Luxury Hotel" />
                <h2 className="heading-text font-extrabold text-gray-900">
                    <AnimatedText
                        text="We Provide Outdoor Activities To All Visitors"
                        textColor="text-gray-900 "
                    />
                </h2>
                <FadeIn direction="left" className="text-gray-600 text-md" delay={0.2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.
                </FadeIn>
                <div className="flex w-full gap-4 sm:gap-8 my-4 sm:my-8 flex-col sm:flex-row">
                    <FadeIn direction="up" delay={0.3}>
                        <div className="flex gap-2">
                            <img src={SwimImage} alt="Swimming" className="w-14 h-14 object-contain" />
                            <h3 className="text-gray-900 font-bold text-xl self-center">The Best Swimming Pool</h3>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.6}>
                        <div className="flex gap-2">
                            <img src={TreadmillImage} alt="Treadmill" className="w-14 h-14 object-contain" />
                            <h3 className="text-gray-900 font-bold text-xl self-center">The Best Stationary Bike</h3>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col gap-4" >
                    {features.map(({ id, description, delay }, index) => (
                        <FadeIn
                            key={id}
                            delay={delay}
                            direction="left"
                        >
                            <CheckItem key={id} text={description.slice(0, 50).concat(".")} icon={FaRegCircleCheck} />
                        </FadeIn>
                    ))}
                </div>
                <FadeIn className="self-start mt-8">
                    <MainButton
                        label="Discover More"
                        color="primary"
                        colorHover="black"
                        textColor="white"
                        textColorHover="white"
                    />
                </FadeIn>
            </div>
            <div className="relative p-0 sm:p-4 gap-4 min-h-[400px] max-h-[700px]">
                <AnimatedImage
                    src={About1}
                    alt="About Us Image"
                    wrapperClass={`relative w-full h-full sm:h-[90%] overflow-hidden rounded-xl ml-auto max-w-[90%]`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-10 sm:bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
                    <AnimatedImage
                        src={About2}
                        alt="About Us Image"
                        wrapperClass={`overflow-hidden w-full h-full rounded-xl`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-5 sm:bottom-20 left-[50%] translate-x-[-50%] max-w-[250px] px-2 py-4 sm:px-4 sm:py-8 bg-gray-950 rounded-lg flex flex-col gap-2 md:gap-4 justify-center items-center z-2">
                    <img
                        src={Spoon}
                        alt="Spoon Icon"
                        className={`relative w-10 h-10 sm:w-16 sm:h-16 object-cover invert`}
                    />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">RestaurantS</span>
                    <p className="text-sm text-white text-center">Donec in quis the asd pellentesque velit. Donec id velit arcu posuere blandit.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Activities