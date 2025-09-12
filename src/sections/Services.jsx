import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import AnimatedText from "../components/ui/AnimatedText";
import MainButton from "../components/ui/MainButton";
import Bg from "../assets/bg-shape-1.png";
import BatchText from "../components/ui/BatchText";
import FadeIn from "../components/ui/FadeIn";
import services from "../data/services";

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="w-full relative flex flex-col gap-10 bg-gray-100 section-padding">
      <img src={Bg} alt="bg" className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover" />
      <div className="relative w-full flex lg:flex-row flex-col gap-16">

        <div className="flex flex-col items-start gap-4 md:gap-8 shrink">
          <BatchText text="Hotel Services" />
          <AnimatedText
            text="Get The Best Hotel |Fixyland Services"
            textColor="black"
            className="heading-text font-extrabold tracking-widest"
          />
          <p className="text-lg text-gray-600 self-start">
            Nulla vitae ex nunc. Morbi quis purus convallis, fermentum hioon metus volutpat design sodales purus. Nunc quis an mauris etion eros vulputate mattis Nulla vitae ex nunc.
          </p>
          <div className="self-start">
            <MainButton
              label="View All"
              color="primary"
              colorHover="black"
              textColor="white"
              textColorHover="white"
            />
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.slice(0, 4).map((service, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <ServiceCard
                key={index}
                service={service}
                active={activeIndex === index}
                onActivate={() => setActiveIndex(index)}
              />
            </FadeIn>
          ))}
        </div >
      </div>
      <FadeIn className="w-full pt-16 text-gray-600 text-base text-center self-center" delay={0.4}>
        <footer>
          Call us Today: (+1) 987 654 3210 &nbsp;&nbsp; OR &nbsp;&nbsp; Email us: info@domain.com
        </footer>
      </FadeIn>
    </section>
  );
}

export default Services;
