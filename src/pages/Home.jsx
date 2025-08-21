import HeroSection from "../sections/HeroSection"
import BookingForm from "../sections/BookingForm"
import AboutSection from "../sections/AboutSection"
import MarqueeSection from "../sections/MarqueeSection"
import RoomsSection from "../sections/RoomsSection"
import Services from "../sections/Services"
import VideoSection from "../sections/VideoSection"
import RestaurantSection from "../sections/RestaurantSection"
import OffersSection from "../sections/OffersSection"
import TestimonialSection from "../sections/TestimonialSection"
import StaffSection from "../sections/StaffSection"
import MarqueeImagesSection from "../sections/MarqueeImagesSection"
import NewsSection from "../sections/NewsSection"
import GallerySection from "../sections/GallerySection"
function Home() {
  return (
    <main className="overflow-hidden">
        <HeroSection />
        <BookingForm />
        <AboutSection />
        <MarqueeSection />
        <RoomsSection />
        <Services />
        <VideoSection />
        <RestaurantSection />
        <OffersSection />
        <TestimonialSection />
        <StaffSection />
        <MarqueeImagesSection />
        <NewsSection />
        <GallerySection />
    </main>
  )
}

export default Home