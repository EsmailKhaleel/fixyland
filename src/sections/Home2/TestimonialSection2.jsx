import BatchText from '../../components/ui/BatchText'
import AnimatedText from '../../components/ui/AnimatedText'
import Customer1 from '../../assets/testimonial-user-1.png'
import Customer2 from '../../assets/testimonial-user-2.png'
import Customer3 from '../../assets/testimonial-user-3.png'
import Customer4 from '../../assets/testimonial-user-4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AnimatedCirclesShape from '../../components/ui/AnimatedCirclesShape'
// Import Swiper styles
import 'swiper/css';
import FadeIn from '../../components/ui/FadeIn'
import TestimonialCard2 from '../../components/TestimonialCard2'

function TestimonialSection2() {
    return (
        <div className="bg-gray-100 w-full flex flex-col justify-center items-center gap-8 xl:flex-row xl:justify-between xl:gap-24 section-padding">
            <div className="flex flex-col items-center text-center xl:text-left xl:items-start gap-4 w-full max-w-3xl xl:max-w-md">
                <BatchText text={"Testimonials"} />
                <AnimatedText
                    text={'Amazing Feedback Say About Services'}
                    className='heading-text font-extrabold justify-center xl:justify-start'
                />
                <FadeIn direction="up">
                    <p className='text-gray-600 text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                </FadeIn>
            </div>
            <div className='w-full max-w-3xl relative'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 }
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="w-full"
                >
                    {[Customer1, Customer2, Customer3, Customer4].map((user, index) => (
                        <SwiperSlide key={`room-${index}-${user}`}>
                            <TestimonialCard2 image={user} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <AnimatedCirclesShape 
                 position='absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3'
                />
            </div>
        </div>
    )
}

export default TestimonialSection2