import BreadcrumbSection from "../components/BreadcrumbSection"
import StaffGridSection from "../sections/HotelStaff/StaffGridSection"
import SubscribeSection from "../sections/OurGallery/SubscribeSection"

function HotelStaff() {
  return (
    <main>
        <BreadcrumbSection title="Our Staff" />
        <StaffGridSection />
        <SubscribeSection />
    </main>
  )
}

export default HotelStaff