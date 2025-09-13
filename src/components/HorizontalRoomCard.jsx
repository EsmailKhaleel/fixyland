import { FaBath, FaBed, FaUsers } from 'react-icons/fa';
import MainButton from './ui/MainButton';
import IconLabel from './ui/IconLabel';

function HorizontalRoomCard({ room }) {
    const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        element.classList.add('not-hover');
        setTimeout(() => {
            element.classList.remove('not-hover');
        }, 600);
    };

    return (
        <div className="bg-gray-100 w-full overflow-hidden flex gap-3 sm:gap-2 rounded-lg px-2 lg:px-4 py-2 lg:py-4 flex-col sm:flex-row">
            {/* Image with Price Badge */}
            <div className="group relative overflow-clip rounded-lg flex-2" onMouseLeave={handleMouseLeave}>
                <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[350px] md:h-72 object-cover transform group-hover:scale-110 group-hover:-rotate-3 group-focus:scale-110 group-focus:-rotate-3 group-active:scale-110 group-active:-rotate-3 transition-transform duration-500 ease-in-out"
                    draggable={false}
                />
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-hover:opacity-0 group-[.not-hover]:animate-rippleReverse group-active:animate-ripple group-active:opacity-0 origin-center"></span>
            </div>

            {/* Content */}
            <div className='px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col flex-3 gap-2 sm:gap-4 justify-center'>

                <h3 className="relative text-2xl font-bold text-gray-900 before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full focus:before:w-full active:before:w-full before:transition-all before:duration-300 self-start"
                >{room.title}</h3>

                {/* Amenities */}
                <div className="flex items-center space-x-4 sm:space-x-6 text-gray-600">
                    {[
                        { icon: FaUsers, value: room.guests },
                        { icon: FaBed, value: room.beds },
                        { icon: FaBath, value: room.bath },
                    ].map((item, index) => (
                        <IconLabel
                            key={index}
                            icon={item.icon}
                            label={item.value}
                            textSize="text-sm sm:text-base md:text-lg"
                            iconSize="w-4 h-4 sm:w-6 sm:h-6"
                        />
                    ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {room.description}
                </p>

                <hr className="border-gray-300" />

                <div className='flex justify-center sm:justify-between sm:items-center mt-4 sm:mt-6 flex-col sm:flex-row gap-4 sm:gap-0'>
                    <span className="font-normal text-base text-gray-600 text-center sm:text-left">
                        Price: <strong className='text-primary font-bold text-2xl'>{room.price}</strong> / night
                    </span>
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

export default HorizontalRoomCard