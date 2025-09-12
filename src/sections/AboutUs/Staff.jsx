import StaffCard from "../../components/StaffCard"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import FadeIn from "../../components/ui/FadeIn"
import staff from "../../data/staff"

function Staff() {
    return (
        <section
            id="staff"
            className="relative h-auto bg-gray-100 w-full py-24 section-padding flex flex-col items-center gap-4"
        >
            <BatchText text={"Fixyland Staff"} />
            <AnimatedText 
            text="Expert Staff Are Always At Your Service" 
            textColor="black" 
            className="heading-text text-center font-extrabold justify-center" 
            />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 sm:mx-10">
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
        </section>
    )
}

export default Staff