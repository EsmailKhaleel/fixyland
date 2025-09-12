import PlansSection from "../sections/OurPricing/PlansSection"
import BreadcrumbSection from "../components/BreadcrumbSection"
import SubscribeSection from "../components/SubscribeSection"

function OurPricing() {
    return (
        <main>
            <BreadcrumbSection title="Our Pricing" />
            <PlansSection />
            <SubscribeSection />
        </main>
    )
}

export default OurPricing