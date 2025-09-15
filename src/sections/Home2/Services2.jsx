import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import ServiceCard2 from "../../components/ServiceCard2"
import services from "../../data/services"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Services2() {
    return (
        <section className="relative w-full section-padding bg-primary-light">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text="Hotel Services" />
                <AnimatedText
                    text="Get The Best Fixyland Resort Amenities"
                    className="heading-text text-center font-extrabold justify-center max-w-2xl"
                />
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                onInit={(swiper) => {
            swiper.params.pagination.el = ".services-pagination";
            swiper.pagination.init();
            swiper.pagination.update();
          }}
          pagination={{
            clickable: true,
            el: ".services-pagination",
          }}
                slidesPerView={1}
                spaceBetween={15}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                className="mt-8"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <ServiceCard2 service={service} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="services-pagination"></div>
        </section>
    )
}

export default Services2