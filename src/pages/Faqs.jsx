import BreadcrumbSection from "../components/BreadcrumbSection"
import SubscribeSection from "../components/SubscribeSection"
import FaqsSection from "../sections/Faqs/FaqsSection"

function Faqs() {
  return (
    <main>
        <BreadcrumbSection title="Any Questions?" />
        <FaqsSection />
        <SubscribeSection />
    </main>
  )
}

export default Faqs