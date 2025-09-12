import { FaInstagram } from "react-icons/fa" // For centered in a a primary-light overlay when hover images
import DashedLine from "./ui/DashedLine"
import gallery1 from "../assets/gallery-1.jpg"
import gallery2 from "../assets/gallery-2.jpg"
import gallery3 from "../assets/gallery-3.jpg"
import gallery4 from "../assets/gallery-4.jpg"
import gallery5 from "../assets/gallery-5.jpg"
import gallery6 from "../assets/gallery-6.jpg"
const GalleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6
]

function GalleryCard() {
  return (
    <div className="w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Our Gallery</h2>
          <DashedLine />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {GalleryImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="w-full h-26 overflow-hidden rounded-[6px]">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-[6px]" />
              </div>
              <div
                className="bg-primary/70 absolute inset-0 transition-all duration-300 
                  z-[2] origin-top 
                  group-hover:opacity-100 group-hover:scale-y-100 group-focus:opacity-100 group-focus:scale-y-100 group-active:opacity-100 group-active:scale-y-100 
                  opacity-0 scale-y-0"
              >
                <FaInstagram className="w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryCard