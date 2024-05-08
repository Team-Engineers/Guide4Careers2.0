import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import ForInstitutes from "./pages/ForInstitutes";
import ForStudents from "./pages/ForStudents";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
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
