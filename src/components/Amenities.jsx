import FadeIn from "./ui/FadeIn"

function Amenities({ amenities }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
                <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
                    <div key={index} className="flex items-start gap-4">
                        <div className="text-gray-600 text-2xl flex items-center justify-center">
                            <amenity.icon />
                        </div>
                        <span className="text-gray-600 font-normal text-lg">{amenity.label}</span>
                    </div>
                </FadeIn>
            ))}
        </div>
    )
}

export default Amenities