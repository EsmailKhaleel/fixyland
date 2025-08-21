import Img1 from "../assets/gallery-1.jpg";
import Img2 from "../assets/gallery-2.jpg";
import Img3 from "../assets/image-3.jpg";
import Img4 from "../assets/image-4.jpg";
import Img5 from "../assets/image-5.jpg";
import GalleryItem from "../components/GalleryItem";

function GallerySection() {
  const images = [Img1, Img2, Img3, Img4, Img5];

  return (
    <div className="bg-primary/10 w-full flex justify-center">
        {/* lg+ > all 5 in one row */}
        <div className="hidden lg:grid grid-cols-5">
          {images.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* md > two rows (Instagram centered in row 1) */}
        <div className="flex flex-col lg:hidden">
          {/* First row → reorder to [0, 2, 1] so Instagram goes in the middle */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            {[ [images[0], 0], [images[2], 2], [images[1], 1] ].map(
              ([item, originalIndex]) => (
                <GalleryItem key={originalIndex} item={item} index={originalIndex} />
              )
            )}
          </div>

          {/* Second row > last 2 images, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:justify-center md:place-items-center">
            {images.slice(3).map((item, i) => (
              <GalleryItem key={i + 3} item={item} index={i + 3} />
            ))}
          </div>
        </div>
    </div>
  );
}

export default GallerySection;
