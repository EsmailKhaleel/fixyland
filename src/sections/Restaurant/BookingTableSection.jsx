import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import Background from "../../assets/pattern-1.png"
import FadeIn from "../../components/ui/FadeIn"
import BookingForm from "../../components/BookingForm"

function BookingTableSection() {
  return (
    <div
      id="booking-table"
      style={{ backgroundImage: `url(${Background})` }}
      className="relative h-auto bg-primary w-full py-24 px-2 sm:px-12 md:px-16 flex flex-col items-center gap-8"
    >
      <BatchText text="Booking" />
      <AnimatedText text="Book Your Private Table" textColor="white" className="text-2xl sm:text-4xl text-center font-extrabold justify-center" />
      <FadeIn delay={0.3} direction="up" className="max-w-2xl">
        <p className="text-white text-md sm:text-lg leading-relaxed text-center">
          Booking request <i className="text-secondary">(+1) 987 654 3210</i> or fill out the booking form.
        </p>
      </FadeIn>
      <div className='w-full max-w-2/3 bg-primary/10 rounded-lg overflow-hidden'>
        <BookingForm btnLabel="Book A Table" />
      </div>
    </div>
  )
}

export default BookingTableSection