import { useState } from "react";
import PlanCard from "../../components/PlanCard"
import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import { plansMonthly, plansYearly } from "../../data/plans"
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn";

function PlansSection2() {
    const [plan, setPlan] = useState("Monthly");
    return (
        <section className="relative bg-primary-light w-full section-padding flex flex-col justify-center gap-8 items-center">
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="w-full flex flex-col gap-4 justify-start max-w-lg mr-auto self-start">
                    <div className="self-start">
                        <BatchText text={"Pricing Plan"} />
                    </div>
                    <AnimatedText
                        text="We've Offered The Best Pricing For You"
                        textColor="black"
                        className="heading-text text-center font-extrabold justify-start"
                    />
                </div>
                <FadeIn direction="up" delay={0.2} className="self-end">
                    <div className="flex items-center justify-center my-4">
                        <div className="relative inline-flex rounded-sm overflow-hidden border border-primary">
                            {/* background */}
                            <span
                                className={`absolute inset-y-0 left-0 w-1/2 bg-primary transition-transform duration-500 ease-in-out`}
                                style={{
                                    transform: plan === "Monthly" ? "translateX(0%)" : "translateX(100%)",
                                }}
                            />
                            {["Monthly", "Yearly"].map((planType, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPlan(planType)}
                                    className={`relative z-10 px-6 py-2 uppercase text-lg font-normal w-1/2 cursor-pointer
                                    ${plan === planType ? "text-white" : "text-primary"} transition-colors duration-500 ease-in-out`}
                                >
                                    {planType}
                                </button>
                            ))}
                        </div>

                    </div>
                </FadeIn>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={plan}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {(plan === "Monthly" ? plansMonthly : plansYearly).map((planItem, i) => (
                        <PlanCard key={i} plan={planItem} />
                    ))}
                </motion.div>

            </AnimatePresence>
        </section>
    )
}

export default PlansSection2