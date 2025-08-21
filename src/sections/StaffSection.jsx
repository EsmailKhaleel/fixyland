import Background from "../assets/pattern-1.png";
import AnimatedText from "../components/ui/AnimatedText";
import BatchText from "../components/ui/BatchText";
import StaffCard from "../components/StaffCard";
import FadeIn from "../components/ui/FadeIn";
import staff from "../data/staff";

function StaffSection() {
    return (
        <div
            id="staff"
            style={{ backgroundImage: `url(${Background})` }}
            className="relative h-auto pb-4 lg-pb-0 lg:h-screen bg-primary w-full pt-24 px-2 sm:px-12 md:px-16 flex flex-col items-center gap-8"
        >
            <BatchText text={"Fixyland Staff"} />
            <AnimatedText text="Expert Staff Are Always At Your Service" textColor="white" className="text-2xl sm:text-4xl text-center font-extrabold justify-center" />
            <div className="relative lg:absolute md:-bottom-[18%] z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-10">
                {/* Sttaff Card */}
                {staff.map((item) => (
                    <FadeIn key={item.id} delay={item.id * 0.1} direction="up">
                    <StaffCard
                        key={item.id}
                        employee={item}
                    />
                    </FadeIn>
                ))}
            </div>
        </div>
    )
}

export default StaffSection