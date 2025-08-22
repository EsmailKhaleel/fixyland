import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

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
      className="bg-primary py-16 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="py-8 flex flex-col items-center">
            <h3 className="marquee-text text-primary text-5xl font-extrabold flex items-center">
              {start && (
                <CountUp end={stat.end} duration={3} />
              )}
              <span className="ml-1">+</span>
            </h3>
            <p className="mt-2 text-2xl font-extrabold text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
