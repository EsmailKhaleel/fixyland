import AnimatedText from "../components/ui/AnimatedText"
import RoomCard from '../components/RoomCard';
import Rooms from '../data/rooms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import BatchText from "../components/ui/BatchText";
import { useEffect, useState } from "react";

function RoomsSection() {
    const breakPoints = {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="bg-primary/10 w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text={"Rooms Types"} />
                <AnimatedText text="The Best Luxury Rooms And |Suites" textColor="black" className="text-4xl text-center font-extrabold" />
            </div>
            <div className='w-full bg-primary/10 pl-10 pt-10 pb-10'>
                <div className="select-none cursor-grab">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={
                            width >= 1024
                                ? 3.5
                                : width >= 768
                                ? 2.5
                                : 1
                        }
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="w-full"
                    >
                        {Rooms.map((room) => (
                            <SwiperSlide key={room.id}>
                                <RoomCard room={room} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default RoomsSection
