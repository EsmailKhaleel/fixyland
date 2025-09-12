import BreadcrumbSection from "../components/BreadcrumbSection"
import FadeIn from "../components/ui/FadeIn"
import blogs from "../data/news.js"
import BlogCard2 from "../components/BlogCard2.jsx"
import SubscribeSection from "../components/SubscribeSection.jsx"
import Pagination from "../components/ui/Pagination.jsx"
import { useState } from "react"
function BlogGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentBlogs = blogs.slice(start, end);
    return (
        <main>
            <BreadcrumbSection title={"Blog Grid"} />
            <section className="section-padding bg-primary-light">
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
                    {currentBlogs.map((blog) => (
                        <FadeIn key={blog.id} delay={blog.id * 0.1} direction="left">
                            <BlogCard2 blog={blog} />
                        </FadeIn>
                    ))}
                </div>
                <FadeIn direction="up" delay={0.2} className={"mt-12"}>
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={blogs.length}
                        onPageChange={setCurrentPage}
                    />
                </FadeIn>
            </section>
            <SubscribeSection />
        </main>
    )
}

export default BlogGrid