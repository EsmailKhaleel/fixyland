import FadeIn from "../../components/ui/FadeIn";
import SocialMediaButtons from "../../components/SocialMediaButtons";

function AuthorProfile({ author }) {
  return (
    <FadeIn direction="up" delay={0.4}>
      <div className="bg-primary-light p-10 rounded-lg">
        <div className="flex items-center gap-8">
          <img
            src={author.image}
            alt={author.name}
            className="w-48 h-full rounded-lg object-cover"
          />
          <div className="flex-1 flex flex-col gap-4 items-start justify-center">
            <h3 className="text-lg font-bold">{author.name}</h3>
            <p className="text-gray-600">{author.bio}</p>
            <SocialMediaButtons
              color="bg-gray-100"
              colorHover="bg-primary"
              iconColor="text-gray-600"
              iconColorHover="text-white"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default AuthorProfile;
