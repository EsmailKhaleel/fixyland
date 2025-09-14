import AnimatedText from "../../components/ui/AnimatedText";
import BatchText from "../../components/ui/BatchText";
import FadeIn from "../../components/ui/FadeIn";
import staff from "../../data/staff";
import StaffCard2 from "../../components/StaffCard2";
import Clents from "../AboutUs/Clents";
import ClentsSwiper from "../../components/ClentsSwiper";

function StaffSection2() {
    return (
        <div className="relative section-padding bg-primary-light w-full flex flex-col items-center gap-8">
            <BatchText text={"Fixyland Staff"} />
            <AnimatedText text="Expert Staff Are Always At Your Service" className="heading-text text-center font-extrabold justify-center" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-10">
                {/* Sttaff Card */}
                {staff.map((item) => (
                    <FadeIn key={item.id} delay={item.id * 0.1} direction="up">
                        <StaffCard2
                            key={item.id}
                            employee={item}
                        />
                    </FadeIn>
                ))}
            </div>
            <div className="w-full pt-16">
            <ClentsSwiper />
            </div>
        </div>
    )
}

export default StaffSection2