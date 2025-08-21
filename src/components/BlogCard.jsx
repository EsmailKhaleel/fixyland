import { FaUser } from 'react-icons/fa';
import { BsCalendarDateFill } from "react-icons/bs";

import MainButton from "./ui/MainButton";
function BlogCard({ blog }) {
    return (
        <div className="w-full max-w-lg overflow-hidden flex flex-col gap-2 h-full">
            {/* Image with Price Badge */}
            <div className="relative mb-4 overflow-clip rounded-xl">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded-xl hover:transform hover:scale-110 hover:-rotate-3 focus:transform focus:scale-110 focus:-rotate-3 active:transform active:scale-110 active:-rotate-3 transition-all duration-500 ease-in-out"
                    draggable={false}
                />
                <div className="absolute top-5 left-5 bg-primary text-white px-3 py-1 rounded-sm text-md font-medium">
                    {blog.type} 
                </div>
            </div>

            {/* Content */}
            <h3 className="self-start relative text-lg sm:text-2xl capitalize font-bold text-gray-900 mb-3 sm:mb-4 before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full focus:before:w-full active:before:w-full before:transition-all before:duration-300 line-clamp-2"
            >{blog.title}</h3>

            {/* Amenities */}
            <div className="flex items-center gap-6 mb-4 text-gray-600">
                <div className="flex items-center gap-1">
                    <BsCalendarDateFill className="w-4 h-4 text-primary" />
                    <span className="text-md">{blog.date}</span>
                </div>
                <div className="bg-black h-[1px] w-5" ></div>
                <div className="flex items-center gap-1">
                    <FaUser className="w-4 h-4 text-primary" />
                    <span className="text-md">{blog.role}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm sm:text-md leading-relaxed line-clamp-3 sm:line-clamp-2">
                {blog.description}
            </p>

            {/* Read More Button */}
            <div className="mt-auto self-start relative group flex items-center space-x-2 mb-4 text-primary/90 hover:text-primary focus:text-primary active:text-primary font-medium transition-all duration-200 cursor-pointer before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-primary hover:before:w-full focus:before:w-full active:before:w-full before:transition-all after:content-[''] after:absolute after:right-0 after:top-full after:w-full hover:after:w-0 :after:w-0 after:h-[1px] after:bg-primary after:transition-all group/anim">
                <MainButtonfocus
              label="Read More"
              color="primary"
              colorHover="black"
              textColor="white"
              textColorHover="white"
            />
            </div>
        </div>
    )
}

export default BlogCard