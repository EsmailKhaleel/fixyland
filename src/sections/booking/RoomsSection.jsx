import AnimatedText from "../../components/ui/AnimatedText";
import BatchText from "../../components/ui/BatchText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import rooms from "../../data/rooms";
import RoomCard2 from "../../components/RoomCard2";
import useWindowWidth from "../../hooks/useWindowWidth";
import PrimarySection from "../../components/PrimarySection";

function RoomsSection() {
    const width = useWindowWidth();
    return (
        <PrimarySection>
            <div className="relative flex flex-col items-center gap-8">
                <BatchText text="Our Best Rooms" />
                <AnimatedText text="Luxurious Rooms Await You" textColor="white" className="heading-text text-center font-extrabold justify-center" />
                <div className='w-full'>
                    <div className="select-none cursor-grab">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={15}
                            loop={true}
                            slidesPerView={
                                width >= 1280
                                    ? 3
                                    : width >= 960
                                        ? 2
                                        : width >= 640 ? 1.5 : 1
                            }
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
        </PrimarySection>
    )
}

export default RoomsSection