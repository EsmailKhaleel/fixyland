import { useState } from "react";
import BreadcrumbSection from "../components/BreadcrumbSection"
import AnimatedText from "../components/ui/AnimatedText"
import BatchText from "../components/ui/BatchText"
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import FadeIn from "../components/ui/FadeIn";
import SubscribeSection from "../components/SubscribeSection";

function ServicesStyle1() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <main>
            <BreadcrumbSection title="Services Style 1" />
            <section className="relative w-full overflow-hidden section-padding bg-primary-light flex flex-col gap-8">
                <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <BatchText text="Fixyland Services" />
                    <AnimatedText
                        text="Get The Best Hotel Fixyland Services"
                        className="heading-text text-center font-extrabold justify-center max-w-2xl"
                    />
                </div>
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={0.2 + index * 0.1}>
                            <ServiceCard
                                key={index}
                                service={service}
                                active={activeIndex === index}
                                onActivate={() => setActiveIndex(index)}
                            />
                        </FadeIn>
                    ))}
                </div>
                <FadeIn className="w-full pt-16 text-gray-600 text-base text-center self-center" delay={0.4}>
                    <footer>
                        Call us Today: (+1) 987 654 3210 &nbsp;&nbsp; OR &nbsp;&nbsp; Email us: info@domain.com
                    </footer>
                </FadeIn>
            </section>
            <SubscribeSection />
        </main>
    )
}

export default ServicesStyle1