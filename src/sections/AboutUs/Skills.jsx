import { motion } from "framer-motion"
import AnimatedImage from "../../components/ui/AnimatedImage"
import Skills1 from '../../assets/skills-1.jpg'
import Skills2 from '../../assets/skills-2.jpg'
import BatchText from "../../components/ui/BatchText"
import AnimatedText from "../../components/ui/AnimatedText"
import FadeIn from "../../components/ui/FadeIn"
import AnimatedCirclesShape from "../../components/ui/AnimatedCirclesShape"
import skills from "../../data/skills"
import SkillProgress from "../../components/ui/SkillProgress"

function Skills() {
    return (
        <section className="bg-gray-100 relative w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-20 section-padding">
            <div className="flex flex-col items-start gap-4 sm:gap-8 pt-8 sm:pt-12">
                <BatchText text="Our Skills" />
                <h2 className="heading-text font-extrabold text-gray-900">
                    <AnimatedText
                        text="Why Choose for us?"
                        textColor="text-gray-900 "
                    />
                </h2>
                <FadeIn direction="left" className="text-gray-600 text-md" delay={0.2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.
                </FadeIn>
                {skills.map(({ id, name, level }, index) => (
                    <FadeIn
                        key={id}
                        direction="up"
                        delay={0.3 + index * 0.2}
                        className="relative w-full"
                    >
                        <SkillProgress name={name} level={level} delay={index * 0.2} />
                    </FadeIn>
                ))}
            </div>
            <div className="relative w-full flex justify-center items-center">
                <AnimatedCirclesShape />
                <AnimatedImage
                    src={Skills1}
                    alt="Luxury Hotel"
                    wrapperClass="relative overflow-hidden rounded-xl self-end"
                    className="w-[350px] sm:w-full sm:min-w-[400px] sm:max-w-[600px] h-auto object-cover"
                />
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", damping: 0, stiffness: 100 }}
                    className='absolute sm:bottom-20 -bottom-12 -left-1 sm:-left-10 lg:-right-20 border-4 border-gray-100 w-[50%] h-[50%] lg:w-[35%] lg:h-[35%] rounded-xl scale-100 lg:scale-115'>
                    <motion.div
                        initial={{ translateX: "100%", opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, ease: "linear" }}
                        className="w-full h-full bg-white"
                    >
                        <img src={Skills2} alt="Luxury Hotel" className="w-full h-full object-cover rounded-xl" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills