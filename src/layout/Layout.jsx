import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.jsx"
import Home from "../pages/Home.jsx"
import { motion } from "framer-motion"
import { div } from "framer-motion/client"
import Footer from "../components/Footer/Footer.jsx"

function Layout() {

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <motion.div
        className="relative"
        initial={{ clipPath: "inset(0 50% 0 50%)" }}  // hidden (collapsed at center)
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // fully revealed
        transition={{ duration: 2, ease: "backOut" }}
      >
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footer />
      </motion.div>
    </div>
  )
}

export default Layout