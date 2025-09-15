import ActivitiesImage from '../../assets/activities-background-1.jpg'
import EventCard from '../../components/EventCard'
import AnimatedText from '../../components/ui/AnimatedText'
import BatchText from '../../components/ui/BatchText'
import events from '../../data/events'

function EventsSection() {
    return (
            <div className={`bg-gray-100 relative w-full flex flex-col justify-center items-center gap-8 section-padding h-auto`}>
                {/* Black overlay */}
                <div
                    style={{ backgroundImage: `url(${ActivitiesImage})`, filter: "brightness(0.3)" }}
                    className="absolute top-0 left-0 right-0 w-full h-[50%] bg-cover bg-center bg-no-repeat sm:bg-fixed z-0"
                ></div>
                <div className="w-full h-full flex flex-col gap-4 items-center justify-start max-w-3xl z-10">
                    <BatchText text={"Local Activities & Events"} />
                    <AnimatedText
                        text="Immerse yourself in a diverse mountain resort life"
                        textColor="white"
                        className="heading-text text-center font-extrabold justify-center"
                    />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
    )
}

export default EventsSection