import { FaBed, FaBath } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import MainButton from './ui/MainButton';
import IconLabel from './ui/IconLabel';

function RoomCard2({ room }) {
    const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        element.classList.add('not-hover');
        setTimeout(() => {
            element.classList.remove('not-hover');
        }, 600);
    };

    return (
        <div className="bg-white w-full max-w-lg overflow-hidden flex flex-col gap-3 sm:gap-2 rounded-lg ">
            {/* Image with Price Badge */}
            <div
                onTouchEnd={handleMouseLeave}
                onMouseLeave={handleMouseLeave}
                className="group relative mb-3 sm:mb-4 overflow-clip"
            >
                <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transform group-hover:scale-110 group-hover:-rotate-3 group-focus:scale-110 group-focus:-rotate-3 group-active:scale-110 group-active:-rotate-3 transition-all duration-500 ease-in-out"
                    draggable={false}
                />
                <span className={`absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-focus:animate-ripple group-active:animate-ripple group-[.not-hover]:animate-rippleReverse origin-center transition-all ease-out`}></span>

                <div className="absolute top-3 sm:top-4 lg:top-5 left-3 sm:left-4 lg:left-5 bg-primary text-white px-2 sm:px-3 py-1 rounded-sm text-sm sm:text-md font-medium">
                    {room.price} / Night
                </div>
            </div>

            {/* Content */}
            <div className='px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col'>

                <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full focus:before:w-full active:before:w-full before:transition-all before:duration-300 self-start"
                >{room.title}</h3>

                {/* Amenities */}
                <div className="flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-4 text-gray-600">
                    {[
                        { icon: FaUsers, value: room.guests },
                        { icon: FaBed, value: room.beds },
                        { icon: FaBath, value: room.bath },
                    ].map((amenity, index) => (
                        <IconLabel
                            key={index}
                            icon={amenity.icon}
                            label={amenity.value}
                            textSize='text-sm sm:text-base'
                        />
                    ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-md leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {room.description}
                </p>
                <div className='self-start'>

                    <MainButton
                        label='Read More'
                        color='primary'
                        colorHover='black'
                        textColor='white'
                        textColorHover='white'
                    />
                </div>
            </div>
        </div>
    )
}

export default RoomCard2