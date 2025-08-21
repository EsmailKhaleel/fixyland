import { FaBed, FaBath } from 'react-icons/fa';
import { FaUsers, FaArrowRightLong } from "react-icons/fa6";

function RoomCard({ room }) {
    return (
        <div className="w-full max-w-lg overflow-hidden flex flex-col gap-3 sm:gap-2">
            {/* Image with Price Badge */}
            <div className="relative mb-3 sm:mb-4 overflow-clip rounded-lg sm:rounded-xl">
                <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg sm:rounded-xl hover:transform hover:scale-110 hover:-rotate-3 transition-all duration-500 ease-in-out"
                    draggable={false}
                />
                <div className="absolute top-3 sm:top-4 lg:top-5 left-3 sm:left-4 lg:left-5 bg-primary text-white px-2 sm:px-3 py-1 rounded-sm text-sm sm:text-md font-medium">
                    {room.price} / Night
                </div>
            </div>

            {/* Content */}
            <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full before:transition-all before:duration-300 self-start"
            >{room.title}</h3>

            {/* Amenities */}
            <div className="flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-4 text-gray-600">
                <div className="flex items-center space-x-1">
                    <FaUsers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-sm sm:text-md">{room.guests}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaBed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-sm sm:text-md">{room.beds}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaBath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-sm sm:text-md">{room.bath}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-md leading-relaxed line-clamp-3 sm:line-clamp-none">
                {room.description}
            </p>

            {/* Read More Button */}
            <button className="self-start relative group flex items-center space-x-2 mb-2 sm:mb-4 text-primary/90 hover:text-primary font-medium transition-all duration-200 cursor-pointer text-sm sm:text-base before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full before:transition-all after:content-[''] after:absolute after:right-0 after:top-full after:w-full hover:after:w-0 after:h-[1px] after:bg-primary after:transition-all group/anim">
                <span>Read More</span>
                <FaArrowRightLong className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45 transform group-hover:rotate-0 transition-transform duration-200" />
            </button>
        </div>
    )
}

export default RoomCard