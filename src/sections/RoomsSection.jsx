import AnimatedText from "../components/ui/AnimatedText"
import RoomCard from '../components/RoomCard';
import Rooms from '../data/rooms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import BatchText from "../components/ui/BatchText";
import useWindowWidth from "../hooks/useWindowWidth";

function RoomsSection() {
    const width = useWindowWidth();
    
    return (
        <>
            <div className="bg-primary/10 w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text={"Rooms Types"} />
                <AnimatedText 
                text="The Best Luxury Rooms And |Suites" 
                textColor="black" 
                className="heading-text text-center font-extrabold justify-center" 
                />
            </div>
            <div className='w-full bg-primary/10 pl-2 sm:pl-10 pt-10 pb-10'>
                <div className="select-none cursor-grab">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={15}
                        loop={true}
                        slidesPerView={
                            width >= 1024
                                ? 3.5
                                : width >= 768
                                ? 2.5
                                : 1.25
                        }
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
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
