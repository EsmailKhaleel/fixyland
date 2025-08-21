import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import AnimatedText from "../components/ui/AnimatedText";
import MainButton from "../components/ui/MainButton";
import PoolIcon from "../components/ui/PoolIcon";
import SwimIcon from "../components/ui/SwimIcon";
import TreadmillIcon from "../components/ui/TreadmillIcon";
import SpaIcon from "../components/ui/SpaIcon";
import ServiceImage1 from "../assets/services-1.jpg";
import ServiceImage2 from "../assets/services-2.jpg";
import ServiceImage3 from "../assets/services-3.jpg";
import ServiceImage4 from "../assets/services-4.jpg";
import Bg from "../assets/bg-shape-1.png";
import BatchText from "../components/ui/BatchText";
import FadeIn from "../components/ui/FadeIn";

const services = [
  { icon: TreadmillIcon, label: "Fitness Center", image: ServiceImage1 },
  { icon: PoolIcon, label: "Jacuzzi", image: ServiceImage2 },
  { icon: SwimIcon, label: "Swimming Pool", image: ServiceImage3 },
  { icon: SpaIcon, label: "Spa Treatments", image: ServiceImage4 },
];
function Services() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="w-full relative flex flex-col gap-10 bg-gray-100">
      <img src={Bg} alt="bg" className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover" />
      <div className="relative w-full flex lg:flex-row flex-col gap-16 pt-28 px-16 pb-16">

        <div className="flex flex-col items-start gap-8 shrink">
          <BatchText text="Hotel Services" />
          <AnimatedText
            text="Get The Best Hotel |Fixyland Services"
            textColor="black"
            className="text-5xl font-extrabold tracking-widest"
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

        <div className="flex-grow grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              active={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div >
      </div>
      <FadeIn className="w-full pb-16 text-black text-md text-center self-center" delay={0.4}>
        <footer>
          Call us Today: (+1) 987 654 3210 &nbsp;&nbsp; OR &nbsp;&nbsp; Email us: info@domain.com
        </footer>
      </FadeIn>
    </section>
  );
}

export default Services;
