import Background from "../assets/pattern-1.png";
import AnimatedText from "../components/ui/AnimatedText";
import BatchText from "../components/ui/BatchText";
import staff1 from "../assets/staff-1.jpg";
import staff2 from "../assets/staff-2.jpg";
import staff3 from "../assets/staff-3.jpg";
import staff4 from "../assets/staff-4.jpg";
import { motion } from "framer-motion";
import StaffCard from "../components/StaffCard";
import FadeIn from "../components/ui/FadeIn";

const staff = [
    {
        id: 2,
        name: "Arnold Taylor",
        position: "Room Service",
        image: staff2,
    },
    {
        id: 1,
        name: "Michael Dean",
        position: "Chef Master",
        image: staff1,
    },
    {
        id: 3,
        name: "Emily Smith",
        position: "Assistant Chef",
        image: staff3,
    },
    {
        id: 4,
        name: "Victor Brown",
        position: "Supervisor",
        image: staff4,
    }
]

function StaffSection() {
    return (
        <div
            style={{ backgroundImage: `url(${Background})` }}
            className="relative h-screen bg-primary w-full pt-24 px-16 flex flex-col items-center gap-8"
        >
            <BatchText text={"Fixyland Staff"} />
            <AnimatedText text="Expert Staff Are Always At Your Service" textColor="white" className="text-4xl text-center font-extrabold" />
            <div className="relative lg:absolute md:-bottom-[18%] z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
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