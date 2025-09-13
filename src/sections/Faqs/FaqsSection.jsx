import { useState } from "react";
import Accordion from "../../components/ui/Accordion"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import faqsData from "../../data/faqs"
import Input from "../../components/ui/Input"
import { IoIosSearch } from "react-icons/io";
import CallNowCard from "../../components/CallNowCard";
import FadeIn from "../../components/ui/FadeIn";
import DashedLine from "../../components/ui/DashedLine";
import SearchCard from "../../components/SearchCard";

function FaqsSection() {
    const [isOpen, setIsOpen] = useState(faqsData[0].question);

    return (
        <section className="relative w-full overflow-hidden section-padding bg-primary-light flex flex-col gap-8">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text="Any Question?" />
                <AnimatedText
                    text="Frequently Asked Questions"
                    className="heading-text text-center font-extrabold justify-center"
                />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
                <div className="bg-gray-100 w-full flex flex-col gap-4 p-4 sm:p-10 rounded-lg">
                    {faqsData.map((faq, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.1}>
                            <Accordion
                                key={i}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />
                        </FadeIn>
                    ))}
                </div>
                <div className="w-full flex flex-col gap-10">
                    <FadeIn direction="up" delay={0.6}>
                        <SearchCard />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.8}>
                        <CallNowCard />
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default FaqsSection