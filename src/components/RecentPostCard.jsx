import { FaCalendar } from "react-icons/fa6"

function RecentPostCard({ post, isLastItem}) {
    return (
        <>
            <div className="flex flex-row gap-6 group">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-md group-hover:transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-in-out" />
                </div>
                <div className="flex flex-col justify-between">
                    <h3 className="font-semibold line-clamp-2 cursor-pointer">
                        <a className="line-effect text-base font-semibold hover:outline-none hover:[text-decoration:none] hover:border-none">
                            {post.title}
                        </a>
                    </h3>
                    <div className="flex items-center text-base text-gray-600 gap-2">
                        <FaCalendar className="text-primary" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
            {/* horizontal line */}
            {!isLastItem && <div className="border-b border-gray-200 my-4"></div>}
        </>
    )
}

export default RecentPostCard