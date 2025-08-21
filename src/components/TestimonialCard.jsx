import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ image }) => {
  return (
    <div className="bg-primary/10 rounded-2xl shadow-sm p-8 flex flex-col gap-4 sm:gap-6 max-w-xl">
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="w-4 h-4" />
        ))}
      </div>

      <p className="text-gray-600 text-md sm:text-lg leading-relaxed">
        "Special treat to dine, It was wow experience food was really delicious!
        outstanding dinner made by Master chef, food experience was
        unforgettable!"
      </p>

      <hr className="border-gray-300" />

      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28">
          <img
            src={image}
            alt="customer"
            className="w-full h-full rounded-full object-cover"
          />
          <span className="absolute top-0 right-0 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
            <FaQuoteLeft />
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-gray-900">Bella Andrew</h4>
          <span className="text-gray-500 text-sm">Customer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
