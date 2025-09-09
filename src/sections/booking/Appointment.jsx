import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import FadeIn from "../../components/ui/FadeIn"
import BookingForm from "../../components/BookingForm"
import CallNowCard from "../../components/CallNowCard"

function Appointment() {
    return (
        <section className="relative w-full flex flex-col gap-16 py-28 px-2 sm:px-12 md:px-16 overflow-hidden bg-primary-light">
            <div className="w-full mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
                <BatchText text="Stay with us" />
                <AnimatedText
                    text="Make An Appointment"
                    textColor="black"
                    className="text-2xl sm:text-[40px] font-extrabold tracking-wide"
                />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
                <FadeIn direction="up" delay={0.2}>
                    <BookingForm btnLabel="Book Appointment"/>
                </FadeIn>
                <FadeIn direction="up" delay={0.4}>
                   <CallNowCard />
                </FadeIn>
            </div>
        </section>
    )
}

export default Appointment