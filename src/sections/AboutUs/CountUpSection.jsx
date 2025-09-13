import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import PrimarySection from "../../components/PrimarySection";

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
    <PrimarySection>
    <section
      ref={sectionRef}
      className="w-full"
    >
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, index) => (
          <div 
          key={index} 
          className={`flex flex-col items-center gap-4 py-4
            ${index === 0 ? 'border-dashed border-b border-r border-white' : ''}
            ${index === 1 ? 'border-dashed border-b border-white' : ''}
            ${index === 2 ? 'border-dashed border-r border-white' : ''}
            lg:border-b-0 ${index < stats.length - 1 ? 'lg:border-r lg:border-dashed lg:border-white' : ''}`}
          >
            <h3 className="marquee-text text-primary text-5xl md:text-6xl font-extrabold flex items-center">
              {start && (
                <CountUp end={stat.end} duration={3} />
              )}
              <span className="ml-1">+</span>
            </h3>
            <p className="mt-2 text-lg md:text-2xl font-normal text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    </PrimarySection>
  );
}

export default StatsSection;
