import { motion } from 'framer-motion';
import Clents1 from '../assets/clents-1.png';
import Clents2 from '../assets/clents-2.png';
import Clents3 from '../assets/clents-3.png';
import Clents4 from '../assets/clents-4.png';
import Clents5 from '../assets/clents-5.png';
import Clents6 from '../assets/clents-6.png';
import Clents7 from '../assets/clents-7.png';
import Clents1Hover from '../assets/clents-1-hover.png';
import Clents2Hover from '../assets/clents-2-hover.png';
import Clents3Hover from '../assets/clents-3-hover.png';
import Clents4Hover from '../assets/clents-4-hover.png';
import Clents5Hover from '../assets/clents-5-hover.png';
import Clents6Hover from '../assets/clents-6-hover.png';
import Clents7Hover from '../assets/clents-7-hover.png';
import Marquee from 'react-fast-marquee';

const images = [
    { image: Clents1, hoverImage: Clents1Hover },
    { image: Clents2, hoverImage: Clents2Hover },
    { image: Clents3, hoverImage: Clents3Hover },
    { image: Clents4, hoverImage: Clents4Hover },
    { image: Clents5, hoverImage: Clents5Hover },
    { image: Clents6, hoverImage: Clents6Hover },
    { image: Clents7, hoverImage: Clents7Hover },
];

function MarqueeImagesSection() {
    return (
        <div className="w-full bg-gray-100 flex items-center justify-center pt-48 pb-10">
            <Marquee
                gradient={false}
                speed={60}
                pauseOnHover={false}
                direction={"left"}
            >
                {images.map(({ image, hoverImage }, index) => (
                    <div
                        key={index}
                        className="overflow-hidden group relative inline-block"
                    >
                        <img src={image} alt="clents" className="block mx-4 opacity-100 group-hover:opacity-0 transform group-hover:-translate-y-full group-hover:scale-y-[300%] group-hover:blur-xl transition-all duration-1000 ease-in-out" />
                        <img src={hoverImage} alt="clents" className="absolute left-0 top-0 mx-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 scale-y-[300%] group-hover:scale-y-100 blur-xl group-hover:blur-none transition-all duration-1000 ease-in-out" />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueeImagesSection