import BreadcrumbSection from "../components/BreadcrumbSection"
import SearchCard from "../components/SearchCard"
import FadeIn from "../components/ui/FadeIn"
import CategoriesList from "../components/CategoriesList"
import blogs from "../data/news"
import Pagination from "../components/ui/Pagination"
import RecentPosts from "../components/RecentPosts"
import GalleryCard from "../components/GalleryCard"
import BlogData from "../sections/BlogDetails/BlogData"
import TagsCard from "../components/TagsCard"

function BlogDetails() {
    return (
        <main>
            <BreadcrumbSection title="Blog SideBar" />
            <section className="relative w-full overflow-hidden section-padding bg-primary-light grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10">
                <div className="w-full flex flex-col gap-6 lg:gap-10">
                    <BlogData />
                </div>
                <div className="w-full flex flex-col gap-6 lg:gap-10">
                    <FadeIn direction="up" delay={0.1}>
                        <SearchCard />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <CategoriesList />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.3}>
                        <RecentPosts />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <TagsCard />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.5}>
                        <GalleryCard />
                    </FadeIn>
                </div>
            </section>
        </main>
    )
}

export default BlogDetails