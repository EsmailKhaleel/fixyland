import AnimatedText from '../../components/ui/AnimatedText'
import BigDashedLine from '../../components/ui/BigDashedLine'
import FadeIn from '../../components/ui/FadeIn'
import { roomDetails } from '../../data/rooms'
import ServiceMainImage from '../../assets/services-details-1.jpg'
import ServiceImage1 from '../../assets/services-details-2.jpg'
import ServiceImage2 from '../../assets/services-details-3.jpg'
import AnimatedImage from '../../components/ui/AnimatedImage'
import faqsData from '../../data/faqs'
import Accordion from '../../components/ui/Accordion'
import { useState } from 'react'
import AnimatedImage2 from '../../components/ui/AnimatedImage2'
import TitleDescription from '../../components/TitleDescription'
import CheckItem from '../../components/ui/CheckItem'
import { FaRegCircleCheck } from 'react-icons/fa6'

function ServiceData() {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <div className="bg-gray-100 w-full flex flex-col gap-6 md:gap-10 p-4 sm:p-6 lg:p-10 rounded-lg">
            <AnimatedImage2
                src={ServiceMainImage}
                alt={"Fitness Center In Hotel Fixyland"}
                wrapperClass={"w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden"}
                className={"w-full h-full object-cover"}
                bgColor='bg-gray-100'
            />
            <div className="flex flex-col gap-3">
                <AnimatedText
                    text={"Fitness Center In Hotel Fixyland"}
                    className="text-[30px] sm:text-[40px] font-extrabold dashed-border w-fit py-2 px-2 sm:py-6 sm:px-3"
                    delay={0.2}
                />
                <BigDashedLine />
                <FadeIn direction="up" delay={0.2} className={"flex flex-col gap-2"}>
                    <p className="text-gray-600 text-lg">{roomDetails.description.slice(0, 250)}</p>
                    <p className="text-gray-600 text-lg">{roomDetails.description.slice(250)}</p>
                </FadeIn>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <AnimatedImage
                    src={ServiceImage1}
                    alt={"Fitness Center In Hotel Fixyland"}
                    wrapperClass={"w-full md:w-1/2 rounded-lg overflow-hidden"}
                    className={"w-full object-cover"}
                    bgColor='bg-gray-100'
                />
                <AnimatedImage
                    src={ServiceImage2}
                    alt={"Fitness Center In Hotel Fixyland"}
                    wrapperClass={"w-full md:w-1/2 rounded-lg overflow-hidden"}
                    className={"w-full object-cover"}
                    bgColor='bg-gray-100'
                />
            </div>
            <div className="flex flex-col gap-4">
                <TitleDescription title="Benefits Of Hotel Services" description={roomDetails.roomAmenities.description} />
                <ul className="list-disc flex flex-col gap-2">
                    {[...roomDetails.rules.policies, ...roomDetails.rules.policies].map((policy, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.1}>
                            <CheckItem key={index} icon={FaRegCircleCheck} text={policy} />
                        </FadeIn>
                    ))}
                </ul>
            </div>
            <TitleDescription title="Frequently Asked Questions" description={roomDetails.roomAmenities.description} />
            <div className="w-full flex flex-col gap-4">
                {faqsData.slice(0, 5).map((faq, i) => (
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
        </div>
    )
}

export default ServiceData