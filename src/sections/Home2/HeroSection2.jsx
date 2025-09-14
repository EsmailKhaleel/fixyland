import HeroImage1 from '../../assets/banner-2.jpg';
import HeroImage2 from '../../assets/banner-3.jpg';
import MainButton from "../../components/ui/MainButton";
import AnimatedText from '../../components/ui/AnimatedText';
import BatchText from '../../components/ui/BatchText';
import FadeIn from '../../components/ui/FadeIn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowDown } from 'react-icons/io';

const slides = [
  {
    image: HeroImage1,
    title: "Book With Best",
    subTitle: "Luxury Hotel"
  },
  {
    image: HeroImage2,
    title: "Find Your Perfect",
    subTitle: "Place To Stay"
  },
]
function HeroSection2() {
  return (
    <section className="absolute inset-0 h-screen flex items-center justify-start">
      <div className="absolute inset-0 -z-10 min-h-[1100px]">
        <img
          src={HeroImage1}
          alt="Hero"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
      </div>
      <div className="relative w-full z-55 mt-[100px] sm:mt-[300px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          pagination={{
            clickable: true
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          className='relative'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative text-white w-full z-55 flex flex-col gap-8 items-start justify-center px-4 lg:px-24">
                <div className='self-start'>
                  <BatchText text="Best Luxury Hotel & Resort" />
                </div>
                <div className="flex flex-col gap-0">
                  <FadeIn direction="down">
                    <h1 className="text-4xl sm:text-5xl md:text-[80px] font-bold">
                      {slide.title}
                    </h1>
                  </FadeIn>
                  <AnimatedText
                    text={slide.subTitle}
                    textColor='secondary'
                    className="text-secondary text-4xl sm:text-5xl md:text-[80px] font-bold"
                  />
                </div>
                <FadeIn direction="up">
                  <p className="text-lg max-w-[350px] md:max-w-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc Duis egestas ac ante sed tincidunt.
                  </p>
                </FadeIn>
                <FadeIn direction="up" className='self-start'>
                  <MainButton
                    label="Contact Us"
                    color="white"
                    colorHover="secondary"
                    textColor="black"
                    textColorHover="black"
                  />
                </FadeIn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="absolute hidden sm:flex sm:-bottom-26 right-2 gap-2 z-50">
        <div className="custom-prev p-4 bg-secondary flex items-center justify-center cursor-pointer text-white hover:bg-primary transition-all duration-500 rounded-full z-50">
          <IoIosArrowDown className="rotate-90 text-xl flex-shrink-0" />
        </div>
        <div className="custom-next p-4 bg-secondary flex items-center justify-center cursor-pointer text-white hover:bg-primary transition-all duration-500 rounded-full z-50">
          <IoIosArrowDown className="-rotate-90 text-xl flex-shrink-0" />
        </div>
      </div> */}
    </section>
  )
}

export default HeroSection2