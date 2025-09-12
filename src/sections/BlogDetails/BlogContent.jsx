import { FaMinus } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import FadeIn from "../../components/ui/FadeIn";
import TitleDescription from "../../components/TitleDescription";

function BlogContent({ description, description2 }) {
  return (
    <>
      <FadeIn direction="up" delay={0.2} className={"flex flex-col gap-2"}>
        <p className="text-gray-600 text-lg">{description.slice(0, 250)}.</p>
        <p className="text-gray-600 text-lg">{description2}</p>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}
        className="relative flex flex-col gap-6 px-6 py-8 bg-primary-light rounded-lg border-l-6 border-primary"
      >
        <p className="text-gray-600 text-lg">{description.slice(0, 200)}.</p>
        <div className="flex items-center gap-2 text-primary font-semibold text-base italic">
          <FaMinus />
          <span><i>Martin Smith</i></span>
        </div>
        <div className="absolute bottom-4 right-4">
          <FaQuoteLeft className="text-primary text-3xl opacity-50" />
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.4} >
        <p className="text-gray-600 text-lg">{description2}</p>
      </FadeIn>

      <TitleDescription
        title="Latest Articles Updated Daily"
        description={description2}
      />
    </>
  );
}

export default BlogContent;
