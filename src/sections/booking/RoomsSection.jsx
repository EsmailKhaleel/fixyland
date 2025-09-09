import Background from "../../assets/pattern-1.png";
import AnimatedText from "../../components/ui/AnimatedText";
import BatchText from "../../components/ui/BatchText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import rooms from "../../data/rooms";
import RoomCard2 from "../../components/RoomCard2";
import useWindowWidth from "../../hooks/useWindowWidth";

function RoomsSection() {
    const width = useWindowWidth();
    return (
        <div
            id="rooms"
            style={{ backgroundImage: `url(${Background})` }}
            className="relative h-auto pb-4 lg-pb-0 bg-primary w-full pt-24 px-2 sm:px-12 md:px-16 flex flex-col items-center gap-8"
        >
            <BatchText text="Our Best Rooms" />
            <AnimatedText text="Luxurious Rooms Await You" textColor="white" className="text-2xl sm:text-4xl text-center font-extrabold justify-center" />
            <div className='w-full bg-primary/10 pl-2 sm:pl-10 pt-10 pb-10'>
                <div className="select-none cursor-grab">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={
                            width >= 1024
                                ? 3
                                : width >= 768
                                    ? 2
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
                        {rooms.slice(0, 6).map((room) => (
                            <SwiperSlide key={room.id}>
                                <RoomCard2 room={room} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default RoomsSection