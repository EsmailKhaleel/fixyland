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

export default function AboutSection() {
  return (
    <section id="about" className="relative flex flex-col lg:flex-row mx-auto gap-8 items-center px-2 sm:px-12 md:px-40 py-16 overflow-hidden bg-primary/10 " >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 left-36 w-full flex items-center"
      >
        <div
          className="w-full max-w-sm aspect-[3/2] opacity-20 self-start"
          style={{
            background: `radial-gradient(circle at center, #1f8f6a 1.5px, transparent 1px)`,
            backgroundSize: '10px 10px',
            maskImage: 'radial-gradient(circle at center, white 50%, transparent 50%)',
          }}
        >
        </div>
      </motion.div>
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        {/* Left image part */}

        {/* Main image */}
        <div className="relative">
          <AnimatedImage
            src={AboutImg}
            alt="Luxury Hotel"
            wrapperClass="about-img relative w-80 sm:w-96 overflow-hidden rounded-xl"
            className="w-full h-auto object-cover"
          />

          {/* Star + circular text */}
          <div className="absolute top-[50%] translate-y-[-50%] -right-8 sm:-right-16 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex justify-center items-center shadow-lg">
            <div className="relative w-full h-full flex justify-center items-center bg-white rounded-full p-4">
              <div className="bg-primary w-1/2 h-1/2 rounded-full flex justify-center items-center relative">
                <img src={StarIcon} className="fill-[#1f8f6a] w-8 h-8 absolute" />

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
      </div>

      {/* Right text content */}
      <div className="max-w-[600px] flex flex-col items-start gap-4">
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
