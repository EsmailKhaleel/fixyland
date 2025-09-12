import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function SkillProgress({ name, level, delay = 0, progressColor = "bg-primary", nameColor = "text-primary", levelColor = "text-primary" }) {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // unobserve once visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex justify-between mb-1 relative">
        <p className={ `${nameColor} text-md font-semibold`}>{name}</p>
        <motion.p
          className={`${levelColor} text-md font-semibold relative top-0 right-0`}
          initial={{ right: "100%" }}
          animate={isVisible ? { right: 0} : {}}
          transition={{ duration: 1, ease: "easeOut", delay: delay + 0.2 }}
        >
          {level} %
        </motion.p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-[6px] overflow-hidden">
        <motion.div
          ref={progressRef}
          className={`h-full ${progressColor} rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: isVisible ? `${level}%` : "0%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

export default SkillProgress;
