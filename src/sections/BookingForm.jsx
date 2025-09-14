import HorizontalBookingForm from "../components/HorizontalBookingForm";

function BookingForm() {

  return (
    <div className="relative flex justify-center sm:justify-end items-center bg-primary/10 z-50">
      <div className="relative w-full max-w-[96%] mt-[650px] md:mt-[700px] bg-primary/60 backdrop-blur-md py-8 md:py-10 lg:py-14 text-base md:text-lg shadow-xl text-white rounded-lg sm:rounded-tr-none sm:rounded-br-none sm:rounded-bl-2xl sm:rounded-tl-2xl">
        <HorizontalBookingForm />
      </div>
    </div>
  )
}

export default BookingForm