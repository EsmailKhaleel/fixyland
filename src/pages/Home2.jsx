import BookingForm2 from "../sections/Home2/BookingForm2"
import HeroSection2 from "../sections/Home2/HeroSection2"
import Activities from '../sections/AboutUs/Activities'
import TextMarquee from "../components/TextMarquee"
import Services2 from "../sections/Home2/Services2"
import VideoSection2 from "../sections/Home2/VideoSection2"
import RoomsSection2 from "../sections/Home2/RoomsSection2"
import EventsSection from "../sections/Home2/EventsSection"
import PlansSection2 from "../sections/Home2/PlansSection2"
import TestimonialSection2 from "../sections/Home2/TestimonialSection2"
import StaffSection2 from "../sections/Home2/StaffSection2"

function Home2() {
  return (
   <main className="overflow-hidden">
        <HeroSection2 />
        <BookingForm2 />
        <Activities />
        <div className="relative overflow-hidden">
          <TextMarquee
            items={["Relax", "Enjoy", "Luxury Hotel", "Hotel & Resort"]}
            bg="gray-900"
            direction="right"
          />
        </div>
        <Services2 />
        <VideoSection2 />
        <RoomsSection2 />
        <EventsSection />
        <PlansSection2 />
        <TestimonialSection2 />
        <StaffSection2 />
   </main>
  )
}

export default Home2