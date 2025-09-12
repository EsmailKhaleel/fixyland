import BreadcrumbSection from "../components/BreadcrumbSection"
import CallNowCard from "../components/CallNowCard"
import AnimatedText from "../components/ui/AnimatedText"
import BatchText from "../components/ui/BatchText"
import FadeIn from "../components/ui/FadeIn"
import BookingRoomForm from "../sections/RoomDetails/BookingRoomForm"
import RoomData from "../sections/RoomDetails/RoomData"

function RoomsDetails() {
  return (
    <main>
        <BreadcrumbSection title="Room Details" />
        <section className="relative w-full overflow-hidden section-padding bg-primary-light flex flex-col gap-8">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text="Room Details" />
                <AnimatedText
                    text="Explore Our Exclusive Rooms"
                    className="heading-text text-center font-extrabold justify-center"
                />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
                <RoomData />
                <div className="w-full flex flex-col gap-10">
                    <FadeIn direction="up" delay={0.6}>
                        <BookingRoomForm />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.8}>
                        <CallNowCard />
                    </FadeIn>
                </div>
            </div>
        </section>
    </main>
  )
}

export default RoomsDetails