import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import FadeIn from "../../components/ui/FadeIn"
import BookingForm from "../../components/BookingForm"
import PrimarySection from "../../components/PrimarySection"

function BookingTableSection() {
  return (
    <PrimarySection>
    <div
      id="booking-table"
      className="relative h-auto w-full flex flex-col items-center gap-8"
    >
      <BatchText text="Booking" />
      <AnimatedText text="Book Your Private Table" textColor="white" className="heading-text text-center font-extrabold justify-center" />
      <FadeIn delay={0.3} direction="up" className="max-w-2xl">
        <p className="text-white text-md sm:text-lg leading-relaxed text-center">
          Booking request <i className="text-secondary">(+1) 987 654 3210</i> or fill out the booking form.
        </p>
      </FadeIn>
      <div className='w-full max-w-5xl bg-primary/10 rounded-lg overflow-hidden'>
        <BookingForm btnLabel="Book A Table" />
      </div>
    </div>
    </PrimarySection>
  )
}

export default BookingTableSection