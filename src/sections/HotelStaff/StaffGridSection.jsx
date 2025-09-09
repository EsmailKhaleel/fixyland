import StaffCard from "../../components/StaffCard"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import FadeIn from "../../components/ui/FadeIn"
import staff, { restStaff } from "../../data/staff"

function StaffGridSection() {
  return (
    <section className="relative bg-primary-light w-full py-22 px-2 sm:px-12 md:px-16 flex flex-col justify-center gap-8 items-center">
        <div className="w-full flex flex-col gap-4 items-center justify-center max-w-2xl">
                <BatchText text="Fixyland Staff" />
                <AnimatedText text="Expert Staff Are Always At Your Service" textColor="black" className="text-3xl md:text-[40px] text-center font-extrabold justify-center" />
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:mx-10">
                {/* Sttaff Card */}
                {[...staff, ...restStaff].map((item) => (
                    <FadeIn key={item.id} delay={item.id * 0.1} direction="up">
                        <StaffCard
                            key={item.id}
                            employee={item}
                        />
                    </FadeIn>
                ))}
            </div>
    </section>
  )
}

export default StaffGridSection