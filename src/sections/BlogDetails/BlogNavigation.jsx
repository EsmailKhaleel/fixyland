import { BsGrid3X3Gap } from "react-icons/bs";
import FadeIn from "../../components/ui/FadeIn";

function BlogNavigation() {
  return (
    <>
      <hr className="my-4 border-gray-300" />
      <FadeIn direction="up" delay={0.3}>
        <div className="relative border flex justify-between items-center">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-base font-normal text-primary">Prev Post</span>
            <h3 className="text-lg sm:text-xl font-bold">
              <a className="line-effect hover:outline-none hover:[text-decoration:none] hover:border-none">Tips On Minimalist</a>
            </h3>
          </div>
          <BsGrid3X3Gap className="text-5xl text-primary absolute top-0 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="flex flex-col gap-1 items-end">
            <span className="text-base font-normal text-primary">Next Post</span>
            <h3 className="text-lg sm:text-xl font-bold">
              <a className="line-effect hover:outline-none hover:[text-decoration:none] hover:border-none">Less Is More</a>
            </h3>
          </div>
        </div>
      </FadeIn>
    </>
  );
}

export default BlogNavigation;
