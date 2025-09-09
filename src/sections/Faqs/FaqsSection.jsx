import { useState } from "react";
import Accordion from "../../components/ui/Accordion"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import faqsData from "../../data/faqs"
import Input from "../../components/ui/Input"
import { IoIosSearch } from "react-icons/io";
import CallNowCard from "../../components/CallNowCard";
import FadeIn from "../../components/ui/FadeIn";

function FaqsSection() {
    const [isOpen, setIsOpen] = useState(faqsData[0].question);

    return (
        <section className="relative w-full overflow-hidden py-28 px-2 sm:px-12 md:px-16 bg-primary-light flex flex-col gap-8">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text="Any Question?" />
                <AnimatedText
                    text="Frequently Asked Questions"
                    className="text-2xl sm:text-[40px] text-center font-extrabold justify-center"
                />
            </div>
            <div className="w-full grid grid-cols-[2fr_1fr] gap-10">
                <div className="bg-gray-100 w-full flex flex-col gap-4 p-6 sm:p-10 rounded-lg">
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
                        <div className="bg-gray-100 h-fit w-full flex flex-col gap-4 p-6 sm:p-10 rounded-lg">
                            <div className="flex flex-col">
                                <div className="text-xl font-bold text-gray-900 pb-2">Search</div>
                                <div className="flex gap-2">
                                    <div className="w-12 h-0.5 bg-black"></div>
                                    <div className="w-4 h-0.5 bg-black"></div>
                                </div>
                            </div>
                            <Input type="text" placeholder="Search" bgColor="bg-primary-light">
                                <IoIosSearch className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 text-gray-500" />
                            </Input>
                        </div>
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