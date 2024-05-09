import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import College from "./pages/College";
import ContactUs from "./pages/ContactUs";
import ForInstitutes from "./pages/ForInstitutes";
import ForStudents from "./pages/ForStudents";
import HigherSecondary from "./pages/HigherSecondary";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Secondary from "./pages/Secondary";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<ForStudents />} />
        <Route path="/institutes" element={<ForInstitutes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/secondary" element={<Secondary />} />
        <Route path="/higher-secondary" element={<HigherSecondary />} />
        <Route path="/college" element={<College />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
