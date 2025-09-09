import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Background from "../../assets/pattern-1.png";

const stats = [
  { end: 305, label: "Luxury Rooms" },
  { end: 650, label: "Regular Guests" },
  { end: 80, label: "Team Member" },
  { end: 75, label: "Beaches" },
];

function StatsSection() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary py-28 px-4"
      style={{ backgroundImage: `url(${Background})`}}
    >
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, index) => (
          <div 
          key={index} 
          className={`flex flex-col items-center ${index < stats.length - 1 ? 'border-dashed border-b gap-4 py-4 sm:border-b-0 sm:border-r border-white' : 'pb-0 pt-4'}`}
          >
            <h3 className="marquee-text text-primary text-6xl font-extrabold flex items-center">
              {start && (
                <CountUp end={stat.end} duration={3} />
              )}
              <span className="ml-1">+</span>
            </h3>
            <p className="mt-2 text-2xl font-normal text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
