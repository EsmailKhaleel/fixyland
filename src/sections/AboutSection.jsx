import { motion } from "framer-motion";
import AboutImg from "../assets/about-1-1.jpg";
import UserImg from "../assets/user.png";
import StarIcon from "../assets/star.svg";
import CircularText from "../assets/batch.png"
import { FaRegCircleCheck } from "react-icons/fa6";
import AnimatedText from "../components/ui/AnimatedText";
import FadeIn from "../components/ui/FadeIn";
import AnimatedImage from "../components/ui/AnimatedImage";
import BatchText from "../components/ui/BatchText";
import aboutInfo from "../data/aboutInfo";
import AnimatedCirclesShape from "../components/ui/AnimatedCirclesShape";

export default function AboutSection() {
  return (
    <section id="about" className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] mx-auto gap-8 lg:gap-24 items-center px-2 sm:px-12 md:px-28 py-26 overflow-hidden bg-primary/10 " >
      {/* Left image part */}
      <div className="relative w-full flex justify-center items-center">
        <AnimatedCirclesShape />
        {/* Main image */}
        <AnimatedImage
          src={AboutImg}
          alt="Luxury Hotel"
          wrapperClass="about-img relative w-full min-w-[350px] max-w-[600px] overflow-hidden rounded-xl"
          className="w-full h-auto object-cover"
        />
        {/* Star + circular text */}
        <div className="absolute top-[50%] translate-y-[-50%] -right-0 sm:-right-16 w-40 h-40 rounded-full flex justify-center items-center shadow-lg">
          <div className="relative w-full h-full flex justify-center items-center bg-white rounded-full p-4">
            <div className="bg-primary w-1/2 h-1/2 rounded-full flex justify-center items-center relative z-10">
              <img src={StarIcon} className="w-8 h-8 transform transition-transform duration-500 ease-in-out rotate-0 cursor-pointer hover:rotate-180" />
            </div>
            <motion.img
              src={CircularText}
              animate={{ rotate: 360 }}
              transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] h-[90%] flex justify-center items-center"
            />
          </div>
        </div>
      </div>

      {/* Right text content */}
      <div className="flex flex-col items-start gap-4">
        <BatchText text="About Fixyland" />
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
          <AnimatedText
            text="World Class Luxury Hotel and |Resort Near City"
            textColor="text-gray-900"
          />
        </h2>
        <FadeIn className="text-gray-600 text-sm" delay={0.2}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even.
        </FadeIn>

        <FadeIn delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm gap-x-14">
          {aboutInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <FaRegCircleCheck className="text-primary bg-primary/10 rounded-full" /> 24-Hours Emergency Service
            </div>
          ))}
        </FadeIn>

        {/* Person info */}
        <FadeIn delay={0.6} className="flex items-center gap-4 mt-6">
          <img
            src={UserImg}
            alt="CEO"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-gray-900">Robert L. Robinson</p>
            <p className="text-gray-600 text-sm">CEO & Founder</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
