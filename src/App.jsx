import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Spinner from "./components/ui/Spinner.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
      console.log("timeout");
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSpinner ? (
          <motion.div
            key="spinner"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Spinner />
          </motion.div>
        ) :
          (<Layout />)}
      </AnimatePresence>
    </>
  );
}



export default App
