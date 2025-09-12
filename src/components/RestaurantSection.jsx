import RestaurantItem from "./RestaurantItem";
import { meals } from "../data/restaurant";
import BatchText from "./ui/BatchText";
import AnimatedText from "./ui/AnimatedText";

function RestaurantSection({ badgeText = "Fresh & Healthy", title = "Delicious Meals For You", data = meals, bgColor = "bg-gray-100" }) {
  // Split into 2 columns
  const leftCol = data.slice(0, Math.ceil(data.length / 2));
  const rightCol = data.slice(Math.ceil(data.length / 2));

  return (
    <section className={`relative w-full overflow-hidden section-padding ${bgColor}`}>
      {/* Section Heading */}
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <BatchText text={badgeText} />
        <AnimatedText
          text={title}
          textColor="black"
          className="heading-text text-center font-extrabold justify-center"
        />
      </div>

      {/* Two-column layout */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 md:gap-x-12 xl:gap-x-40 relative">
        {/* Vertical Dashed Line */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 border border-dashed border-gray-400"></div>

        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {leftCol.map((item, index) => (
            <RestaurantItem key={index} itemKey={index} {...item} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {rightCol.map((item, index) => (
            <RestaurantItem key={index} itemKey={index} {...item} />
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-base mt-12 text-center">Time: 12:00 pm To 02:00 pm</p>
    </section>
  );
}

export default RestaurantSection;
