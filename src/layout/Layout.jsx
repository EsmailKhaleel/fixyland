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
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Layout