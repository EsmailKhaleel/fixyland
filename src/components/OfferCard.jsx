import FadeIn from "./ui/FadeIn"
import MainButton from "./ui/MainButton"

function OfferCard({ image, discount, title, direction, delay }) {
    return (
        <FadeIn direction={direction} delay={delay}
            className="group/offer relative rounded-xl overflow-hidden flex flex-col items-start justify-center gap-6 pt-32 pb-16 px-16 cursor-pointer"
        >
            <img
                src={image}
                alt="luxury hotel"
                className="absolute inset-0 w-full h-full object-cover rounded-xl -z-10 group-hover/offer:scale-110 group-hover/offer:-rotate-3 group-focus/offer:scale-110 group-focus/offer:-rotate-3 transition-all duration-600 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/60 rounded-xl -z-10"></div>
            <div className="border border-white text-white group-hover/offer:bg-white group-hover/offer:text-primary group-focus/offer:bg-white group-focus/offer:text-primary transition-all duration-500 ease-in-out px-3 py-1 rounded-sm text-md font-medium">
                {discount}% <span className="text-xl font-bold">OFF</span>
            </div>
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            <MainButton
                label="Book Now"
                color="white"
                colorHover="secondary"
                textColor="black"
                textColorHover="black"
            />
        </FadeIn>
    )
}

export default OfferCard