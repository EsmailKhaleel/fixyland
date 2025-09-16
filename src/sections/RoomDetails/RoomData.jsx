import { useRef } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

import { roomDetails } from "../../data/rooms";
import stats from "../../data/stats";
import AnimatedText from "../../components/ui/AnimatedText"
import PlayVideoButton from "../../components/ui/PlayVideoButton"
import StatCard from "../../components/ui/StatCard";
import BigDashedLine from "../../components/ui/BigDashedLine";
import FadeIn from "../../components/ui/FadeIn";
import Amenities from "../../components/Amenities";
import TitleDescription from "../../components/TitleDescription";
import CheckItem from "../../components/ui/CheckItem";
import AnimatedImage2 from "../../components/ui/AnimatedImage2";

function RoomData() {
    const sectionRef = useRef(null);
    return (
        <div className="bg-gray-100 w-full flex flex-col gap-6 md:gap-10 p-4 sm:p-6 lg:p-10 rounded-lg">
            <AnimatedImage2
                src={roomDetails.image}
                alt={roomDetails.title}
                wrapperClass={"w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden"}
                className={"w-full h-full object-cover"}
                bgColor='bg-gray-100'
            />
            <div className="flex flex-col gap-3">
                <AnimatedText
                    text={"Luxury Double Bed"}
                    className="text-[30px] sm:text-[40px] font-extrabold dashed-border w-fit py-2 px-2 sm:py-6 sm:px-3"
                    delay={0.2}
                />
                <BigDashedLine />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xl sm:text-2xl my-3 sm:my-4 text-gray-700">
                    {stats.map((stat, index) => (
                        <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
                            <StatCard
                                key={index}
                                title={stat.label}
                                value={stat.value}
                                icon={stat.icon}
                            />
                        </FadeIn>
                    ))}
                </div>

                <AnimatedText
                    text={roomDetails.title}
                    className="text-lg font-semibold dashed-border px-3 py-1 w-fit uppercase"
                    delay={0.2}
                />
                <FadeIn direction="up" delay={0.2} className={"flex flex-col gap-2"}>
                    <p className="text-gray-600 text-lg">{roomDetails.description.slice(0, 250)}</p>
                    <p className="text-gray-600 text-lg">{roomDetails.description.slice(250)}</p>
                </FadeIn>
                <div ref={sectionRef} className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-6 relative overflow-hidden rounded-lg">
                    <img src={roomDetails.images[1]} alt={roomDetails.title} className="w-full h-full object-cover rounded-lg mt-6" />
                    <PlayVideoButton hasOverlay={false} sectionRef={sectionRef} />
                </div>
            </div>

            {/* Room Amenities */}
            <div className="flex flex-col gap-4">
                <TitleDescription title="Room Amenities" description={roomDetails.roomAmenities.description} />
                <Amenities amenities={roomDetails.roomAmenities.items} />
            </div>

            {/* Hotel Amenities */}
            <div className="flex flex-col gap-4">
                <TitleDescription title="Hotel Amenities" description={roomDetails.hotelAmenities.description} />
                <Amenities amenities={roomDetails.hotelAmenities.items} />
            </div>


            {/* Rules and Regulations */}
            <div className="flex flex-col gap-4">
                <TitleDescription title="Rules and Regulations" description={roomDetails.rules.description} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-gray-600 text-lg">Check In</span>
                        <span className="text-gray-600 text-lg">{roomDetails.rules.checkIn}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-gray-600 text-lg">Check Out</span>
                        <span className="text-gray-600 text-lg">{roomDetails.rules.checkOut}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-semibold text-gray-600 text-lg">Policies</span>
                    <ul className="list-disc pl-6 flex flex-col gap-2">
                        {roomDetails.rules.policies.map((policy, index) => (
                            <CheckItem key={index} icon={FaRegCircleCheck} text={policy} />
                        ))}
                    </ul>
                </div>
            </div>

            {/* Cancelation Policy */}
            <TitleDescription title="Cancelation Policy" description={roomDetails.cancellation.description} />
        </div>
    )
}

export default RoomData;