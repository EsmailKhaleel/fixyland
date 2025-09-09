import { AnimatePresence } from "framer-motion";
import { LoadingProvider } from "./context/LoadingContext";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <LoadingProvider>
      <AnimatePresence mode="wait">
        <Layout />
      </AnimatePresence>
    </LoadingProvider>
  );
}

export default App;
