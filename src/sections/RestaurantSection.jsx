import FadeIn from "../components/ui/FadeIn";
import AnimatedText from "../components/ui/AnimatedText";
import { FaRegCircleCheck } from "react-icons/fa6";
import MainButton from "../components/ui/MainButton";
import QyalityImg1 from "../assets/quality-food-1.jpg";
import QyalityImg2 from "../assets/quality-food-2.jpg";
import AnimatedImage from "../components/ui/AnimatedImage";
import User1 from "../assets/user-1.png";
import User2 from "../assets/user-2.png";
import User3 from "../assets/user-3.png";
import User4 from "../assets/user-4.png";
import User5 from "../assets/user-5.png";
import User6 from "../assets/user-6.png";
import { motion } from "framer-motion";
import BatchText from "../components/ui/BatchText";

function RestaurantSection() {
    return (
        <div className="bg-gray-100 relative w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 py-28 px-16">
            <div className="flex flex-col items-start gap-8">
                <BatchText text="Food & Drink" />
                <h2 className="text-4xl font-extrabold text-gray-900">
                    <AnimatedText
                        text="Quality Food And Drink Your |Trip Are Enjoyable"
                        textColor="text-gray-900"
                    />
                </h2>
                <FadeIn direction="left" className="text-gray-600 text-md" delay={0.2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.
                </FadeIn>

                <div className="grid grid-cols-1 gap-4 text-sm gap-y-10">
                    <FadeIn delay={0.4} direction="left" className="flex items-center gap-2">
                        <div className="flex items-center justify-center self-start text-lg">
                            <FaRegCircleCheck className="w-6 h-6 text-primary bg-primary/10 rounded-full overflow-hidden" />
                        </div>
                        <div className="flex flex-col gap-2 text-gray-600">
                            <h2 className="text-xl font-bold text-gray-900">Free Breakfast, Tea & Coffee</h2>
                            <p className="text-gray-600 text-md">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.6} direction="left" className="flex items-center gap-2">
                        <div className="flex items-center justify-center self-start text-lg">
                            <FaRegCircleCheck className="w-6 h-6 text-primary bg-primary/10 rounded-full overflow-hidden" />
                        </div>
                        <div className="flex flex-col gap-2 text-gray-600">
                            <h2 className="text-xl font-bold text-gray-900">Quality Foods & Drink</h2>
                            <p className="text-gray-600 text-md">It uses a dictionary of over Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum text.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.8} direction="left" className="flex items-center gap-2">
                        <div className="flex items-center justify-center self-start text-lg">
                            <FaRegCircleCheck className="w-6 h-6 text-primary bg-primary/10 rounded-full overflow-hidden" />
                        </div>
                        <div className="flex flex-col gap-2 text-gray-600">
                            <h2 className="text-xl font-bold text-gray-900">Restorent & Bar</h2>
                            <p className="text-gray-600 text-md">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </FadeIn>


                </div>
                <FadeIn className="self-start">
                    <MainButton
                        label="Learn More About Us"
                        color="primary"
                        colorHover="black"
                        textColor="white"
                        textColorHover="white"
                    />
                </FadeIn>
            </div>

            {/* Right Section */}
            <div className="relative grid grid-cols-2 p-4 gap-4">
                <AnimatedImage
                    src={QyalityImg1}
                    alt="Quality"
                    wrapperClass="relative w-full h-[90%] overflow-hidden rounded-xl self-end"
                    className="w-full h-full object-cover"
                />
                <AnimatedImage
                    src={QyalityImg2}
                    alt="Quality"
                    wrapperClass="relative w-full h-[90%] overflow-hidden rounded-xl"
                    className="w-full h-full object-cover"
                />
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-10 left-[50%] translate-x-[-50%] p-6 bg-white rounded-lg flex flex-col gap-4 justify-center items-center z-10">
                    <h4 className="text-lg text-primary">Popular Clients</h4>
                    <div className="flex items-center">
                        <img src={User1} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white" />
                        <img src={User2} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white -ml-5" />
                        <img src={User3} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white -ml-5" />
                        <img src={User4} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white -ml-5" />
                        <img src={User5} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white -ml-5" />
                        <img src={User6} alt="user" className="w-12 h-12 object-cover rounded-full border-2 border-white -ml-5" />
                    </div>

                </motion.div>
            </div>

        </div>
    )
}

export default RestaurantSection