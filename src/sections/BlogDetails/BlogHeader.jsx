import { FaBookmark, FaCalendar, FaUser } from "react-icons/fa6";
import AnimatedImage2 from "../../components/ui/AnimatedImage2";
import AnimatedText from "../../components/ui/AnimatedText";
import BigDashedLine from "../../components/ui/BigDashedLine";
import FadeIn from "../../components/ui/FadeIn";
import IconLabel from "../../components/ui/IconLabel";

function BlogHeader({ blog }) {
  return (
    <>
      <AnimatedImage2
        src={blog.image}
        alt={"Most Expensive Hotels Rooms in Your City"}
        wrapperClass={"w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden"}
        className={"w-full h-full object-cover"}
        bgColor='bg-gray-100'
      />

      <FadeIn direction="up" delay={0.2}>
        <div className="flex flex-wrap gap-8 items-center">
          {[{ icon: FaUser, label: blog.role },
          { icon: FaBookmark, label: blog.type },
          { icon: FaCalendar, label: blog.date }].map(({ icon: Icon, label }) => (
            <IconLabel key={label} icon={Icon} label={label}
              textSize='text-base md:text-lg'
              textColor='text-gray-600'
              iconColor='text-primary'
              iconSize='w-4 h-4 md:w-6 md:h-6'
            />
          ))}
        </div>
      </FadeIn>

      <div className="flex flex-col gap-3">
        <AnimatedText
          text={"Most Expensive Hotels Rooms in Your City"}
          className="text-[40px] font-extrabold dashed-border w-fit"
          delay={0.2}
        />
        <BigDashedLine />
      </div>
    </>
  );
}

export default BlogHeader;
