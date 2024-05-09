import React from "react";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import ForStudents from "./pages/ForStudents";
import ForInstitutes from "./pages/ForInstitutes";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Secondary from "./pages/Secondary";
import HigherSecondary from "./pages/HigherSecondary";
import College from "./pages/College";
import ScrollToTop from "./components/ScrollToTop";
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
