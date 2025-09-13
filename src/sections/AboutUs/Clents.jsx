import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import BatchText from '../../components/ui/BatchText';
import AnimatedText from '../../components/ui/AnimatedText';
import marqueeImages from '../../data/marqueeImages';

function Clents() {
  return (
    <section className="w-full section-padding bg-primary-light flex flex-col items-center gap-8">
        <BatchText text="Our Clents" />
        <AnimatedText
            text="We Have More Then 150+ Global Clents"
            textColor="text-gray-900"
            className="heading-text text-center font-extrabold justify-center break-words max-w-xl"
        />
        <div className="w-full rounded-lg overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={3}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    }
                }}
                className="w-full"
            >  
                {marqueeImages.map(({ image, hoverImage }, index) => (
                    <SwiperSlide key={index}>
                        <div className="overflow-hidden group relative inline-block">
                            <img src={image} alt="clents" className="block mx-4 opacity-100 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0 transform group-hover:-translate-y-full group-hover:scale-y-[300%] group-hover:blur-xl group-focus:-translate-y-full group-focus:scale-y-[300%] group-focus:blur-xl group-active:-translate-y-full group-active:scale-y-[300%] group-active:blur-xl transition-all duration-500 ease-in-out" />
                            <img src={hoverImage} alt="clents" className="absolute left-0 top-0 mx-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transform group-hover:translate-y-0 scale-y-[300%] group-hover:scale-y-100 blur-xl group-hover:blur-none group-focus:translate-y-0 group-focus:scale-y-100 group-focus:blur-none  group-active:translate-y-0 group-active:scale-y-100 group-active:blur-none transition-all duration-500 ease-in-out" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>


    </section>
  )
}

export default Clents