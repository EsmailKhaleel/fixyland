import Appointment from "../sections/booking/Appointment"
import BreadcrumbSection from "../components/BreadcrumbSection"
import RoomsSection from "../sections/booking/RoomsSection"
import BookingBreadcrumbImage from "../assets/breadcrumb-banner.jpg"

function Booking() {
    return (
        <main>
            <BreadcrumbSection title="Booking" image={BookingBreadcrumbImage} />
            <Appointment />
            <RoomsSection />
        </main>
    )
}

export default Booking