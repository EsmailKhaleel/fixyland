import BreadcrumbSection from "../components/BreadcrumbSection"
import FaqsSection from "../sections/Faqs/FaqsSection"
import SubscribeSection from "../sections/OurGallery/SubscribeSection"

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