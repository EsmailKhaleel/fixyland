import { motion } from "framer-motion"
import AnimatedImage from "../../components/ui/AnimatedImage"
import Skills1 from '../../assets/skills-1.jpg'
import Skills2 from '../../assets/skills-2.jpg'
import BatchText from "../../components/ui/BatchText"
import AnimatedText from "../../components/ui/AnimatedText"
import FadeIn from "../../components/ui/FadeIn"
import AnimatedCirclesShape from "../../components/ui/AnimatedCirclesShape"
import skills from "../../data/skills"
import { useEffect, useRef, useState } from 'react';

function Skills() {
    const [visibleSkills, setVisibleSkills] = useState({});
    const progressRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.dataset.skillId;
                    if (entry.isIntersecting) {
                        setVisibleSkills(prev => ({ ...prev, [id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        Object.values(progressRefs.current).forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => observer.disconnect();
    }, []);
    return (
        <section className="bg-gray-100 relative w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-20 py-28 px-2 sm:px-12 md:px-16">
            <div className="flex flex-col items-start gap-4 sm:gap-8 pt-8 sm:pt-12">
                <BatchText text="Our Skills" />
                <h2 className="text-2xl sm:text-[40px] font-extrabold text-gray-900">
                    <AnimatedText
                        text="Why Choose for us?"
                        textColor="text-gray-900 "
                    />
                </h2>
                <FadeIn direction="left" className="text-gray-600 text-md" delay={0.2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.
                </FadeIn>
                {skills.map(({ id, name, level }, index) => (
                    <FadeIn key={id} direction="up" delay={0.3 + index * 0.2} className="relative w-full">
                        <div className="flex justify-between mb-1">
                            <p className="text-primary text-md font-semibold">{name}</p>
                            <motion.p
                                className="text-primary text-md font-semibold"
                                initial={{ x: -500, opacity: 0 }}
                                animate={visibleSkills[id] ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                            >
                                {level} %
                            </motion.p>
                        </div>
                        <progress
                            ref={element => progressRefs.current[id] = element}
                            data-skill-id={id}
                            value={visibleSkills[id] ? level : "0"}
                            max="100"
                            className={`w-full h-[6px] [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:h-[6px] [&::-webkit-progress-value]:w-0.5 [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-1500 [&::-webkit-progress-value]:ease-in rounded-full overflow-hidden`}
                        ></progress>
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