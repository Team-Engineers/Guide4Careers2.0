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
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<ForStudents />} />
        <Route path="/institutes" element={<ForInstitutes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
