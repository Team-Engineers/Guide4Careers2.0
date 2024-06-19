import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainTest from "./components/psychometric-test/MainTest";
import OurTeam from "./pages/OurTeam";
import DashBoard from "./pages/DashBoard";
import Session from "./components/Dashboard/Session";
import ResourcesTitle from "./components/resources/ResourcesTitle";

function App() {
  const withLayout = (Component) => (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={withLayout(Home)} />
        <Route path="/students" element={withLayout(ForStudents)} />
        <Route path="/our-team" element={withLayout(OurTeam)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/psychometric-test" element={<MainTest />} />
        <Route path="/create-session" element={withLayout(Session)} />
        <Route path="/institutes" element={withLayout(ForInstitutes)} />
        <Route path="/resources" element={withLayout(Resources)} />
        <Route path="/resources/:title" element={withLayout(ResourcesTitle)} />
        <Route path="/dashboard" element={withLayout(DashBoard)} />
        <Route path="/contact" element={withLayout(ContactUs)} />
        <Route path="/secondary" element={withLayout(Secondary)} />
        <Route path="/higher-secondary" element={withLayout(HigherSecondary)} />
        <Route path="/college" element={withLayout(College)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;