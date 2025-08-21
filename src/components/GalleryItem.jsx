import { FaEye } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import FadeIn from "./ui/FadeIn";
function GalleryItem({ item, index }) {
  const isInstagram = index === 2;

  return (
    <FadeIn
      delay={index * 0.1}
      direction="up"
      className="group relative w-full overflow-hidden"
    >
      <img src={item} className="w-full h-full object-cover" />

      {!isInstagram && (
        <div
          className="bg-primary/70 absolute inset-0 transition-all duration-300 
            z-[2] origin-top 
            group-hover:opacity-100 group-hover:scale-y-100 
            opacity-0 scale-y-0"
        >
          <FaEye className="w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}

      {isInstagram && (
        <div className="absolute inset-5 bg-gray-200/70 flex flex-col gap-6 items-center justify-center z-[2] rounded-lg">
          <FaInstagram className="w-10 h-10 text-primary" />
          <h3 className="text-xl md:text-2xl font-extrabold text-primary text-center">
            Follow Us On Instagram
          </h3>
        </div>
      )}
    </FadeIn>
  );
}

export default GalleryItem;