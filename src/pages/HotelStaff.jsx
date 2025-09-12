import BreadcrumbSection from "../components/BreadcrumbSection"
import SubscribeSection from "../components/SubscribeSection"
import StaffGridSection from "../sections/HotelStaff/StaffGridSection"

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