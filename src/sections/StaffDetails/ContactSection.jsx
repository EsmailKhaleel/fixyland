import staff from "../../data/staff"
import BatchText from "../../components/ui/BatchText"
import AnimatedText from "../../components/ui/AnimatedText"
import SocialMediaButtons from "../../components/SocialMediaButtons"
import AnimatedImage from "../../components/ui/AnimatedImage"
import FadeIn from "../../components/ui/FadeIn"
function ContactSection() {
    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 relative z-20 pt-26">
            <div className="bg-gray-100 w-full flex flex-col lg:flex-row gap-8 lg:gap-24 p-4 sm:py-14 sm:px-12 rounded-lg">
                <AnimatedImage
                  src={staff[1].image}
                  alt={staff[1].name}
                  wrapperClass="relative w-full overflow-clip rounded-lg max-w-[580px] self-center lg:self-start"
                  className="w-full h-full object-cover"
                  bgColor="bg-gray-100"
                />
                <div className="w-full flex flex-col gap-4 items-start sm:gap-6">
                    <BatchText text="35 Years Experience" />
                    <AnimatedText text={staff[1].name} className="heading-text font-extrabold" />
                    <FadeIn direction="up" delay={0.2}>
                    <p className="text-gray-600 text-base leading-relaxed">{staff[1].position}</p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.3}>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">Must explain to you how all this mistaken idea of denouncing works pleasure and praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater sed explores truth. Denouncing works pleasures and praising pains was us born and I will gives you a completed ut workers accounts of the system.</p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                    <div className="flex gap-2 flex-col">
                        <div className="flex gap-2">
                            <strong className="text-primary text-base">Phone:</strong>
                            <h3 className="text-gray-600 text-base">(+1) 987 654 3210</h3>
                        </div>
                        <div className="flex gap-2">
                            <strong className="text-primary text-base">Email:</strong>
                            <h3 className="text-gray-600 text-base">info@domain.com</h3>
                        </div>
                        <div className="flex gap-2">
                            <strong className="text-primary text-base">Website:</strong>
                            <h3 className="text-gray-600 text-base">www.domain.com</h3>
                        </div>
                    </div>
                    </FadeIn>
                    <SocialMediaButtons
                        color="bg-black"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactSection