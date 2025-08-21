import AnimatedText from "../components/ui/AnimatedText"
import News from '../data/news';
import BatchText from "../components/ui/BatchText";
import BlogCard from "../components/BlogCard";
import FadeIn from "../components/ui/FadeIn";

function NewsSection() {
    return (
        <>
            <div className="bg-primary/10 w-full flex flex-col gap-4 items-center justify-center py-14">
                <BatchText text={"Hotel News"} />
                <AnimatedText text="Get More Update For Flxyland" textColor="black" className="text-4xl text-center font-extrabold justify-center" />
            </div>
            <div className='w-full bg-primary/10 px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
                {News.map((blog) => (
                    <FadeIn key={blog.id} delay={blog.id * 0.1} direction="left">
                        <BlogCard blog={blog} />
                    </FadeIn>
                ))}
            </div>
        </>
    )
}

export default NewsSection