import AnimatedImage from "../../components/ui/AnimatedImage";
import FadeIn from "../../components/ui/FadeIn";

function BlogGallery({ images }) {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-4'>
        <AnimatedImage
          src={images[0]}
          alt={"Fitness Center In Hotel Fixyland"}
          wrapperClass={"w-full md:w-1/2 rounded-lg overflow-hidden"}
          className={"w-full object-cover"}
          bgColor='bg-gray-100'
        />
        <AnimatedImage
          src={images[1]}
          alt={"Fitness Center In Hotel Fixyland"}
          wrapperClass={"w-full md:w-1/2 rounded-lg overflow-hidden"}
          className={"w-full object-cover"}
          bgColor='bg-gray-100'
        />
      </div>

      <FadeIn direction="up" delay={0.4} >
        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </FadeIn>
    </>
  );
}

export default BlogGallery;
