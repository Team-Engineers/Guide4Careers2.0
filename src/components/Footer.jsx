import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/images/logo2.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import mailIcon from "../assets/images/mailIcon.svg";
import phoneIcon from "../assets/images/phoneIcon.svg";
import locationIcon from "../assets/images/locationIcon.svg";
import "../components/style.css";

const Footer = () => {
  const fontStyle = {
    fontFamily: "poppins",
    color: "white",
    fontSize: "0.9rem",
    fontWeight: "lighter",
  };
  return (
    <div>
      <div className=" bg-[#212121] pb-5  pt-16">
        <div className="flex lg:flex-row flex-col max-mbl:px-0 px-4 pb-4 justify-between">
          <div className="max-lg:flex max-lg:justify-between max-mbl:pr-0 max-lg:pr-10">
            <div className="flex px-10  flex-col gap-2  ">
              <div>
                <img
                  src={logo2}
                  alt="Logo"
                  className="h-full  w-[10rem] mbl:w-[8rem]"
                />
              </div>
              {/* <div className="lg:max-w-[28vw] max-mbl:text-center  max-mbl:max-w-full max-w-[50vw]"  style={fontStyle}> */}

              <div className="lg:max-w-[28vw] max-mbl:max-w-full max-w-[50vw]" style={fontStyle}>
                A Guide4Careers acts as a compass, providing valuable insights and direction for those seeking professional fulfillment. It begins with self-reflection, encouraging individuals to identify their strengths, interests, and aspirations. Setting well-defined goals and continually developing relevant skills. Networking and seeking mentorship offer opportunities for growth.
              </div>
            </div>
            <div className=" flex lg:hidden max-mbl:hidden  px-3 flex-col gap-6 ">
              <div className="flex flex-col justify-between items-start gap-8">
                <div className="text-white text-[1.3rem] cstmr:text-[1.5rem] font-poppins relative w-fit font-extrabold">
                  Contact Us
                  <div className="w-full h-1 bg-white"></div>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 w-full">
                    <img src={mailIcon} alt="mail" />
                    <p className="fontStyle">info@templeoflearning.in</p>
                  </div>
                  <div className="flex gap-2 w-full">
                    <img src={phoneIcon} alt="phone" />
                    <div className="flex flex-col">
                      <p className="fontStyle">+91 98100 33459</p>
                      <p className="fontStyle">+011 45 019 365</p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full">
                    <img src={locationIcon} alt="location" />
                    <p className="fontStyle">
                      Head Office - L-3, <br /> Kanchanjunga Building <br /> Barakhamba Road, <br />
                      Connaught Place
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 max-mbl:flex max-mbl:flex-col max-mbl:justify-center max-lg:flex max-lg:w-full max-lg:justify-between max-lg:pt-5 max-lg:px-10  lg:pr-10 ">
            <div className="flex  flex-col gap-6 ">
              <div className="text-white text-[1.3rem] cstmr:text-[1.5rem] font-poppins relative w-fit">
                COMPANY
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col h-5/6 justify-around gap-4">
                <Link to="/" style={fontStyle}>Home</Link>
                <Link to="/students" style={fontStyle}>For Students</Link>
                <Link to="/institutes" style={fontStyle}>For Institutions</Link>
                <Link to="/resources" style={fontStyle}>Resource Treasure</Link>
                <Link to="/contact" style={fontStyle}>Contact Us</Link>
              </div>
            </div>
            <div className="flex max-mbl:mt-4  flex-col gap-6 ">
              <div className="text-white text-[1.3rem] cstmr:text-[1.5rem]  font-poppins relative w-fit">
                WHOM WE SERVE
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col h-5/6 justify-around gap-4 ">
                <div style={fontStyle}>School Students</div>
                <div style={fontStyle}>College Students</div>
                <div style={fontStyle}>Education Institutions</div>
                <div style={fontStyle}>Private Schools</div>
                <div style={fontStyle}>Private Colleges</div>
              </div>
            </div>
            <div className=" flex max-mbl:mt-5 max-mbl:w-[80vw] max-mbl:mx-auto max-mbl:block max-lg:hidden  mbl:px-3 flex-col gap-6 ">
              <div className="flex flex-col justify-between items-start gap-8">
                <div className="text-white text-[1.3rem] cstmr:text-[1.5rem] font-poppins relative w-fit font-extrabold">
                  Contact Us
                  <div className="w-full h-1 bg-white"></div>
                </div>
                <div className="flex flex-col w-full gap-2">

                  <div className="flex gap-2 w-full">
                    <FaPhoneAlt />
                    <div className="flex flex-col">
                      <p className="fontStyle">+91 98100 33459</p>
                      <p className="fontStyle">+011 45 019 365</p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full">
                    <IoLocationOutline/>
                    <p className="fontStyle">
                      Head Office - L-3, <br className="max-mbl:hidden" /> Kanchanjunga Building <br className="max-mbl:hidden" /> Barakhamba Road, <br className="max-mbl:hidden" />
                      Connaught Place
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex max-mbl:flex-wrap max-mbl:gap-2 mbl:justify-between mx-10  border-t-4  pt-2">
          <div style={fontStyle}>&#169; 2024 Guide4Careers</div>
          <div style={fontStyle}>
            <a href="#">All Rights Reserved</a>
          </div>
          <div className="flex gap-2" style={fontStyle}>
            <a href="#" className="underline">Terms & Conditions </a>| <a href="#" className="underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
