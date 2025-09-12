import DashedLine from "./ui/DashedLine"
import post1 from "../assets/recent-post-1.jpg"
import post2 from "../assets/recent-post-2.jpg"
import post3 from "../assets/recent-post-3.jpg"
import RecentPostCard from "./RecentPostCard"

export const recentPosts = [
    {
        id: 1,
        image: post1,
        title: "The Ultimate Guide to Choosing the Perfect Wedding Venue",
        date: "August 15, 2023",
    },
    {
        id: 2,
        image: post2,
        title: "10 Tips for a Stress-Free Wedding Planning Experience",
        date: "August 16, 2023",
    },
    {
        id: 3,
        image: post3,
        title: "How to Choose the Right Wedding Photographer",
        date: "August 17, 2023",
    },
];
function RecentPosts() {
    return (
        <div className="w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Recent Posts</h2>
                    <DashedLine />
                </div>
                <div className="flex flex-col gap-1">
                        {recentPosts.map((post, index) => (
                            <RecentPostCard key={index} post={post} isLastItem={index === recentPosts.length - 1} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default RecentPosts