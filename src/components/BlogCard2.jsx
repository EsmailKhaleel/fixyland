import { FaUser } from 'react-icons/fa';
import MainButton from "./ui/MainButton";
import { IoBookmarks } from "react-icons/io5";
import IconLabel from './ui/IconLabel';

function BlogCard2({ blog }) {
    const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        element.classList.add('not-hover');
        setTimeout(() => {
            element.classList.remove('not-hover');
        }, 600);
    };
    return (
        <div className="w-full bg-white max-w-lg overflow-hidden flex flex-col gap-2 h-full rounded-lg">
            {/* Image with Price Badge */}
            <div
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleMouseLeave}
                className="relative mb-4 overflow-clip rounded-t-xl group"
            >
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover group-hover:transform group-hover:scale-110 group-hover:-rotate-3 group-focus:transform group-focus:scale-110 group-focus:-rotate-3 group-active:transform group-active:scale-110 group-active:-rotate-3 transition-all duration-500 ease-in-out"
                    draggable={false}
                />
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-hover:opacity-0 group-[.not-hover]:animate-rippleReverse group-active:animate-ripple group-active:opacity-0 origin-center"></span>
            </div>

            <div className='px-4 sm:px-6 pb-6 flex flex-col flex-grow'>
                {/* Amenities */}
                <div className="relateive flex items-center gap-6 mb-4 text-gray-600">
                    <div className="relative flex flex-col bg-primary text-white px-4 py-1 rounded-sm items-center gap-0">
                        <div className='absolute bottom-[100%] left-1/2 h-20 w-0.5 bg-primary rounded-2xl'></div>
                        <span className="text-2xl font-bold">{new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric' })}</span>
                        <span className="text-sm">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                        <IconLabel
                            icon={IoBookmarks}
                            label={blog.type}
                            textSize='text-sm'
                        />
                        <IconLabel
                            icon={FaUser}
                            label={blog.role}
                            textSize='text-sm'
                        />
                    </div>
                </div>

                {/* Content */}
                <h3 className='h-fit mb-3 w-fit line-clamp-2'>
                    <a className="line-effect self-start text-lg hover:outline-none hover:[text-decoration:none] hover:border-none sm:text-2xl capitalize font-bold text-gray-900 cursor-pointer origin-left">
                        {blog.title}
                    </a>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-2">
                    {blog.description}
                </p>

                {/* Read More Button */}
                <div className="mt-auto self-start relative ">
                    <MainButton
                        label="Read More"
                        color="primary"
                        colorHover="black"
                        textColor="white"
                        textColorHover="white"
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogCard2