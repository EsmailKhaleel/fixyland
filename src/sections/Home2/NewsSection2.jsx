import AnimatedText from "../../components/ui/AnimatedText"
import News from '../../data/news';
import BatchText from "../../components/ui/BatchText";
import BlogCard2 from "../../components/BlogCard2";
import FadeIn from "../../components/ui/FadeIn";

function NewsSection2() {
    return (
        <div id="news" className="w-full bg-gray-100 section-padding flex flex-col items-center justify-center gap-8">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <BatchText text={"Hotel News"} />
                <AnimatedText text="Get More Update For Flxyland" textColor="black" className="text-4xl text-center font-extrabold justify-center" />
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch'>
                {News.slice(0, 3).map((blog) => (
                    <FadeIn key={blog.id} delay={blog.id * 0.1} direction="left">
                        <BlogCard2 blog={blog} />
                    </FadeIn>
                ))}
            </div>
        </div>
    )
}

export default NewsSection2