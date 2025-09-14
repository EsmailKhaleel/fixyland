import Background from "../../assets/pattern-1.png"
import HorizontalBookingForm from "../../components/HorizontalBookingForm"

function BookingForm2() {
  return (
    <section
            style={{ backgroundImage: `url(${Background})` }}
            className="relative bg-primary w-full mt-[700px] md:mt-[780px] py-8 md:py-10 lg:py-12"
        >
            <HorizontalBookingForm labelColor="text-white"/>
        </section>
  )
}

export default BookingForm2