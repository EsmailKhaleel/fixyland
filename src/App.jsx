import { lazy, Suspense } from "react";
import Spinner from "./components/ui/Spinner.jsx";
import { AnimatePresence, motion } from "framer-motion";
const Layout = lazy(() => import("./layout/Layout.jsx"));

function App() {

  return (
    <Suspense fallback={
      <AnimatePresence mode="wait">
        <motion.div
          key="spinner"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -1000, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Spinner />
        </motion.div>
      </AnimatePresence>
    }>
      <Layout />
    </Suspense>
  );
}



export default App
