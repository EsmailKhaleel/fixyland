import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import MainButton from "../../components/ui/MainButton"
import rooms from "../../data/rooms"
import RoomCard2 from "../../components/RoomCard2"

function RoomsSection2() {
    return (
        <div className='bg-primary/10 w-full flex flex-col justify-start gap-10 section-padding'>
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="w-full flex flex-col gap-4 justify-start max-w-lg mr-auto self-start">
                    <div className="self-start">
                        <BatchText text={"Rooms Types"} />
                    </div>
                    <AnimatedText
                        text="The Best Luxury Rooms And Suites"
                        textColor="black"
                        className="heading-text text-center font-extrabold justify-start"
                    />
                </div>
                <div className="self-end">
                    <MainButton
                        label="View All Rooms"
                        color="primary"
                        colorHover="black"
                        textColor="white"
                        textColorHover="white"
                    />
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {rooms.slice(0, 6).map((room) => (
                    <div key={room.id}>
                        <RoomCard2 room={room} />
                    </div>
                ))}
            </div>
            <div className="w-full text-center text-base text-gray-600">
                Call us Today: (+1) 987 654 3210 &nbsp;&nbsp; OR &nbsp;&nbsp; Email us: info@domain.com
            </div>
        </div>
    )
}

export default RoomsSection2