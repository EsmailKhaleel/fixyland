import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import RouteLoader from '../components/ui/RouteLoader';
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Home from "../pages/Home.jsx"
import Booking from "../pages/Booking.jsx"
import AboutUs from "../pages/AboutUs.jsx"
import Restaurant from "../pages/Restaurant.jsx"
import OurGallery from "../pages/OurGallery.jsx";
import OurPricing from "../pages/OurPricing.jsx";
import Faqs from "../pages/Faqs.jsx";
import NotFound from "../pages/NotFound.jsx";
import HotelStaff from "../pages/HotelStaff.jsx";
import StaffDetails from "../pages/StaffDetails.jsx";
import TermsAndConditions from "../pages/TermsAndConditions.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import RoomsGrid from "../pages/RoomsGrid.jsx";
import RoomsList from "../pages/RoomsList.jsx";
import RoomsDetails from "../pages/RoomsDetails.jsx";
import ServicesStyle1 from "../pages/ServicesStyle1.jsx";
import ServicesStyle2 from "../pages/ServicesStyle2.jsx";
import ServiceDetails from "../pages/ServiceDetails.jsx";
import BlogGrid from "../pages/BlogGrid.jsx";
import BlogList from "../pages/BlogList.jsx";
import BlogSideBar from "../pages/BlogSideBar.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
import ContactUs from "../pages/ContactUs.jsx";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);
  return (
    <div className="relative w-full h-screen bg-gray-900">
      <RouteLoader />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="relative"
          initial={{ clipPath: "inset(0 50% 0 50%)" }}  // hidden (collapsed at center)
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // fully revealed
          transition={{ duration: 2, ease: "backOut", delay: 1 }}
        >
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route index path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/our-gallery" element={<OurGallery />} />
            <Route path="/our-pricing" element={<OurPricing />} />
            <Route path="/faq's" element={<Faqs />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="/our-staff" element={<HotelStaff />} />
            <Route path="/our-staff/staff-details" element={<StaffDetails />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/rooms-grid" element={<RoomsGrid />} />
            <Route path="/rooms-list" element={<RoomsList />} />
            <Route path="/rooms/rooms-details" element={<RoomsDetails />} />
            <Route path="/services-style-1" element={<ServicesStyle1 />} />
            <Route path="/services-style-2" element={<ServicesStyle2 />} />
            <Route path="/services/service-details" element={<ServiceDetails />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/blog-sidebar" element={<BlogSideBar />} />
            <Route path="/blog/blog-details" element={<BlogDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Layout