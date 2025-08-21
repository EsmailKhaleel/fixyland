import AnimatedText from "../components/ui/AnimatedText"
import BatchText from "../components/ui/BatchText"
import Img1 from "../assets/image-1.png"
import Img2 from "../assets/image-2.png"
import FadeIn from "../components/ui/FadeIn"
import MainButton from "../components/ui/MainButton"
function OffersSection() {
    return (
        <div className="bg-primary/10 w-full flex flex-col items-center justify-center gap-10 py-28 px-16">
            <BatchText text={"Special Offers"} />
            <AnimatedText text="Special Discount for Hotel & |Resort Booking" textColor="black" className="text-4xl text-center font-extrabold" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <FadeIn direction="left" delay={0.4}
                    className="group/offer relative rounded-xl overflow-hidden flex flex-col items-start justify-center gap-6 pt-32 pb-16 px-16 cursor-pointer"
                >
                    <img src={Img1} alt="luxury hotel" className="absolute inset-0 w-full h-full object-cover rounded-xl -z-10 group-hover/offer:scale-110 group-hover/offer:-rotate-3 transition-all duration-600 ease-in-out" />
                    <div className="absolute inset-0 bg-black/60 rounded-xl -z-10"></div>
                    <div className="border border-white text-white group-hover/offer:bg-white group-hover/offer:text-primary transition-all duration-500 ease-in-out px-3 py-1 rounded-sm text-md font-medium">
                        30% <span className="text-xl font-bold">OFF</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Get 30% Off on Hotel Booking </h2>
                    <MainButton
                        label="Book Now"
                        color="white"
                        colorHover="secondary"
                        textColor="black"
                        textColorHover="black"
                    />
                </FadeIn>
                <FadeIn direction="right" delay={0.4}
                    className="group/offer relative rounded-xl overflow-hidden flex flex-col items-start justify-center gap-6 pt-32 pb-16 px-16 cursor-pointer"
                >
                    <img src={Img2} alt="luxury hotel" className="absolute inset-0 w-full h-full object-cover rounded-xl -z-10 group-hover/offer:scale-110 group-hover/offer:-rotate-3 transition-all duration-600 ease-in-out" />
                    <div className="absolute inset-0 bg-black/60 rounded-xl -z-10"></div>
                    <div className="border border-white text-white group-hover/offer:bg-white group-hover/offer:text-primary transition-all duration-500 ease-in-out px-3 py-1 rounded-sm text-md font-medium">
                        35% <span className="text-xl font-bold">OFF</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white">Get 35% Off on Resort Booking</h2>
                    <MainButton
                        label="Book Now"
                        color="white"
                        colorHover="secondary"
                        textColor="black"
                        textColorHover="black"
                    />
                </FadeIn>


            </div>
        </div>
    )
}

export default OffersSection