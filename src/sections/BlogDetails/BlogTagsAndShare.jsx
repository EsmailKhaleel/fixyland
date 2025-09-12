import FadeIn from "../../components/ui/FadeIn";
import Tag from "../../components/ui/Tag";
import SocialMediaButtons from "../../components/SocialMediaButtons";

function BlogTagsAndShare({ tags }) {
  return (
    <FadeIn direction="up" delay={0.3}>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
        <div className="flex gap-4 items-center">
          <span><b>Tags:</b></span>
          <div className="flex gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span><b>Share:</b></span>
          <SocialMediaButtons
            color="bg-primary-light"
            colorHover="bg-primary"
            iconColor="text-black"
            iconColorHover="text-white"
          />
        </div>
      </div>
    </FadeIn>
  );
}

export default BlogTagsAndShare;
