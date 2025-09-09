import { FaCheckCircle } from "react-icons/fa";
import MainButton from "./ui/MainButton";

function PlanCard({ plan }) {
    const { name, price, planType, hasDiscount, features, discount } = plan;
    return (
        <div className={`relative overflow-hidden bg-gray-100 w-full flex flex-col items-start justify-center gap-4 sm:gap-8 p-6 sm:px-10 sm:py-10 rounded-lg ${hasDiscount ? "border border-primary" : ""}`}>
            {/* discount badge */}
            {hasDiscount
                && <div
                    className="w-44 text-center absolute top-0 right-0 translate-y-1/2  translate-x-[25%] rotate-45 transform bg-primary text-white text-sbase font-semibold py-2 "
                >
                    Save {discount}%
                </div>
            }
            <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold text-primary">{name}</div>
                <div className="text-base text-gray-600">Get started with our startup package</div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="text-4xl font-bold text-black">$&nbsp;{price}</div>
                <div className="text-sm text-gray-600 self-end">{planType}</div>
            </div>
            <div className="flex flex-col gap-6 w-full">
                <hr className="border-gray-300" />
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <FaCheckCircle className={`${feature.available ? "text-primary" : "text-gray-400"}`} />
                        <div className="text-sm text-gray-600">{feature.name}</div>
                    </div>
                ))}
            </div>
            <div className="w-full flex-1 flex items-center justify-center">
                <MainButton
                    label="Get Started"
                    color={`${hasDiscount ? "primary" : "black"}`}
                    colorHover={`${hasDiscount ? "black" : "primary"}`}
                    textColor="white"
                    textColorHover="white"
                />
            </div>
        </div>
    )
}

export default PlanCard