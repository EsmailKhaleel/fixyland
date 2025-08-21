import BatchText from '../components/ui/BatchText'
import Img1 from '../assets/image-1.jpg'
import Img2 from '../assets/image-2.jpg'
import AnimatedImage from '../components/ui/AnimatedImage'
import { motion } from 'framer-motion'
import AnimatedText from '../components/ui/AnimatedText'
import Customer1 from '../assets/testimonial-user-1.png'
import Customer2 from '../assets/testimonial-user-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import TestimonialCard from '../components/TestimonialCard'

function TestimonialSection() {
    return (
        <div className="bg-gray-100 w-full grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-x-44 py-28 px-16">
            <div className='relative ml-11'>
                <AnimatedImage
                    src={Img1}
                    alt="Luxury Hotel"
                    wrapperClass="relative overflow-hidden rounded-xl scale-115"
                    className="w-full h-auto object-cover"
                />
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "backInOut" }}
                    className='absolute bottom-20 -right-20 border-4 border-white w-[35%] h-[35%] rounded-xl scale-115'>
                    <motion.div
                        initial={{ translateX: "100%", opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, ease: "linear" }}
                        className="w-full h-full bg-white"
                    >
                        <img src={Img2} alt="Luxury Hotel" className="w-full h-full object-cover rounded-xl" />

                    </motion.div>
                </motion.div>
            </div>
            <div className="flex flex-col items-start gap-4 mb-auto self-end">
                <BatchText text={"Testimonials"} />
                <AnimatedText
                    text={'Amazing Feedback Say |About Services'}
                    className='text-4xl font-extrabold'
                />
                <div className='w-full mt-8'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className="w-full"
                    >
                        {[Customer1, Customer2].map((user, index) => (
                            <SwiperSlide key={`room-${index}-${user}`}>
                                <TestimonialCard image={user} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection