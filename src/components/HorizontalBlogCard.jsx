import { FaUser } from 'react-icons/fa6';
import MainButton from './ui/MainButton';
import { FaCalendar, FaUsers } from 'react-icons/fa';
import IconLabel from './ui/IconLabel';

function HorizontalBlogCard({ blog }) {
    const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        element.classList.add('not-hover');
        setTimeout(() => {
            element.classList.remove('not-hover');
        }, 600);
    };

    return (
        <div className="bg-gray-100 w-full overflow-hidden flex gap-3 sm:gap-2 rounded-lg px-2 lg:px-4 py-2 lg:py-4 flex-col sm:flex-row">
            {/* Image */}
            <div
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleMouseLeave}
                className="group relative overflow-clip rounded-lg flex-1"
            >
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-3 group-focus:scale-110 group-focus:-rotate-3 group-active:scale-110 group-active:-rotate-3 transition-transform duration-500 ease-in-out"
                    draggable={false}
                />
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-hover:opacity-0 group-[.not-hover]:animate-rippleReverse origin-center"></span>
            </div>

            {/* Content */}
            <div className='px-4 sm:px-6 py-4 flex flex-col flex-1 gap-3 justify-center'>
                {/* Amenities */}
                <div className="flex items-center space-x-4 sm:space-x-6 text-gray-600">
                    <IconLabel
                        icon={FaCalendar}
                        label={blog.date}
                        textSize='text-sm sm:text-base'
                    />
                    <IconLabel
                        icon={FaUser}
                        label={blog.type}
                        textSize='text-sm sm:text-base'
                    />
                </div>

                {/* Title */}
                <h3 className='line-clamp-2'>
                    <a className="line-effect hover:[text-decoration:none] hover:outline-none hover:border-none relative text-2xl font-bold text-gray-900 self-start"
                    >{blog.title}</a>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed line-clamp-2">
                    {blog.description}
                </p>

                {/* Read More Button */}
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

export default HorizontalBlogCard