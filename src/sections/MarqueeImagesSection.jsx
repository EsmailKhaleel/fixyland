import Marquee from 'react-fast-marquee';
import marqueeImages from '../data/marqueeImages';

function MarqueeImagesSection() {
    return (
        <div className="w-full bg-gray-100 flex items-center justify-center py-16 lg:pt-52">
            <Marquee
                gradient={false}
                speed={60}
                pauseOnHover={false}
                direction={"left"}
            >
                {marqueeImages.map(({ image, hoverImage }, index) => (
                    <div
                        key={index}
                        className="overflow-hidden group relative inline-block"
                    >
                        <img src={image} alt="clents" className="block mx-4 opacity-100 group-hover:opacity-0  group-focus:opacity-0 group-active:opacity-0 transform group-hover:-translate-y-full group-hover:scale-y-[300%] group-hover:blur-xl group-focus:-translate-y-full group-focus:scale-y-[300%] group-focus:blur-xl group-active:-translate-y-full group-active:scale-y-[300%] group-active:blur-xl transition-all duration-1000 ease-in-out" />
                        <img src={hoverImage} alt="clents" className="absolute left-0 top-0 mx-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transform group-hover:translate-y-0 scale-y-[300%] group-hover:scale-y-100 blur-xl group-hover:blur-none group-focus:translate-y-0 group-focus:scale-y-100 group-focus:blur-none  group-active:translate-y-0 group-active:scale-y-100 group-active:blur-none transition-all duration-1000 ease-in-out" />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default MarqueeImagesSection