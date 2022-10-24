import Contact from "components/Contact";
import Footer from "components/Footer";
import HardSkills from "components/HardSkills";
import Home from "components/Home";
import Portfolio from "components/Portfolio";
import ScrollToTop from "components/ScrollToTop";
import SoftSkills from "components/SoftSkills";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Portfolio />
      <SoftSkills />
      <HardSkills />
      <Contact />
      <Footer />
    </motion.div>
  );
}
