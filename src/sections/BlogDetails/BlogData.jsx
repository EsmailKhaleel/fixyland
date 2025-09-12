import { FaRegCircleCheck } from "react-icons/fa6";
import FadeIn from "../../components/ui/FadeIn";
import blogs from "../../data/news";
import { roomDetails } from "../../data/rooms";
import { tags } from "../../components/TagsCard";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogGallery from "./BlogGallery";
import BlogTagsAndShare from "./BlogTagsAndShare";
import BlogNavigation from "./BlogNavigation";
import AuthorProfile from "./AuthorProfile";
import CommentsSection from "./CommentsSection";
import CommentForm from "./CommentForm";
import CheckItem from "../../components/ui/CheckItem";
import { author, comments } from "../../data/comments";

function BlogData() {

  return (
    <div className="bg-gray-100 w-full flex flex-col gap-6 md:gap-10 p-4 sm:p-6 lg:p-10 rounded-lg">
      <BlogHeader blog={blogs[0]} />
      <BlogContent description={roomDetails.description} description2={roomDetails.description2} />
      <BlogGallery images={[blogs[5].image, blogs[6].image]} />

      <ul className="list-disc flex flex-col gap-4">
        {[...roomDetails.rules.policies, ...roomDetails.rules.policies].map((policy, index) => (
          <FadeIn key={index} direction="up" delay={index * 0.1}>
            <CheckItem text={policy} icon={FaRegCircleCheck} />
          </FadeIn>
        ))}
      </ul>

      <BlogTagsAndShare tags={tags} />
      <BlogNavigation />
      <AuthorProfile author={author} />
      <CommentsSection comments={comments} />
      <CommentForm />
    </div>
  )
}

export default BlogData