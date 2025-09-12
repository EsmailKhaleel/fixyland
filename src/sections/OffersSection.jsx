import AnimatedText from "../components/ui/AnimatedText"
import BatchText from "../components/ui/BatchText"
import offers from "../data/offers"
import OfferCard from "../components/OfferCard"

function OffersSection() {
    return (
        <div className="section-padding bg-primary/10 w-full flex flex-col items-center justify-center gap-10">
            <BatchText text={"Special Offers"} />
            <AnimatedText
                text="Special Discount for Hotel & |Resort Booking"
                textColor="black"
                className="text-4xl text-center font-extrabold"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {offers.map((offer) => (
                    <OfferCard key={offer.id} {...offer} />
                ))}
            </div>
        </div>
    )
}

export default OffersSection