import { FaArrowRightLong } from "react-icons/fa6"

function EventCard({ event }) {
        const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        element.classList.add('not-hover');
        setTimeout(() => {
            element.classList.remove('not-hover');
        }, 600);
    };
    return (
        <div className="bg-white shadow-sm rounded-lg sm:rounded-xl w-full max-w-lg overflow-hidden flex flex-col gap-3 sm:gap-2 z-50">
            {/* Image with Price Badge */}
            <div onTouchEnd={handleMouseLeave}
                onMouseLeave={handleMouseLeave}
                className="group relative mb-3 sm:mb-4 overflow-clip rounded-t-lg sm:rounded-t-xl"
            >
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-t-lg sm:rounded-t-xl transform group-hover:scale-110 group-hover:-rotate-3 focus:transform focus:scale-110 focus:-rotate-3 active:transform active:scale-110 active:-rotate-3 transition-all duration-500 ease-in-out"
                    draggable={false}
                />
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-hover:opacity-0 group-[.not-hover]:animate-rippleReverse origin-center"></span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 w-full flex flex-col items-center text-center">
                <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full focus:before:w-full active:before:w-full before:transition-all before:duration-300"
                >{event.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-md leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {event.description}
                </p>

                {/* Read More Button */}
                <button
                    className="relative group flex items-center space-x-2 mb-2 sm:mb-4 text-primary/90 hover:text-primary focus:text-primary active:text-primary font-medium transition-all
             duration-200 cursor-pointer text-sm sm:text-base before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary 
             hover:before:w-full before:transition-all after:content-[''] after:absolute after:right-0 after:top-full after:w-full hover:after:w-0 focus:after:w-0 active:after:w-0 after:h-[1px] after:bg-primary after:transition-all group/anim"
                >
                    <span>Discover More</span>
                    <FaArrowRightLong className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45 transform group-hover:rotate-0 group-focus:rotate-0 group-active:rotate-0 transition-transform duration-200" />
                </button>
            </div>
        </div>
    )
}

export default EventCard