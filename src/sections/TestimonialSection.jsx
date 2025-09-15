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
import useWindowWidth from '../hooks/useWindowWidth'

function TestimonialSection() {
    const width = useWindowWidth();
    return (
        <div className="bg-gray-100 w-full grid grid-cols-1 xl:grid-cols-2 items-center justify-start gap-22 lg:gap-24 xl:gap-36 py-28 section-padding">
            <div className='relative'>
                <AnimatedImage
                    src={Img1}
                    alt="Luxury Hotel"
                    wrapperClass="relative overflow-hidden rounded-xl"
                    className="w-full min-h-[300px] md:h-[600px] object-cover"
                />
                <motion.div
                    animate={{ y: [0, 10 , 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className='absolute -bottom-10 sm:bottom-10 md:bottom-20 right-2 sm:-right-4 md:-right-8 lg:-right-10 xl:-right-20 border-4 border-white w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-xl overflow-hidden'>
                    <motion.div
                        initial={{ 
                            x: width < 768 ? 100 : 200
                        }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full h-full bg-red"
                    >
                        <img src={Img2} alt="Luxury Hotel" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>
            </div>
            <div className="flex flex-col items-start gap-4 mb-auto self-end">
                <BatchText text={"Testimonials"} />
                <AnimatedText
                    text={'Amazing Feedback Say |About Services'}
                    className='heading-text font-extrabold'
                />
                <div className='w-full mt-8'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={15}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
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