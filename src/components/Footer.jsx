import React from "react";
import emailFormSubmitButton from "../images/emailFormSubmitButton.svg";
import randomShape from "../images/randomShape.svg";
import chatBoxImg from "../images/chatBoxImg.svg";
import Logo from "../images/Logo.png";
import mailIcon from "../images/mailIcon.svg";
import phoneIcon from "../images/phoneIcon.svg";
import locationIcon from "../images/locationIcon.svg";

const Footer = () => {
  const fontStyle = {
    fontFamily: "poppins",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "lighter",
  };
  return (
    <div>
      <div className="flex justify-around items-center relative h-[491px] w-full py-8 bg-[#EBEAF8] z1">
        <div className="absolute w-36 h-56 right-0 top-[5%]">
          <img src={randomShape} />
        </div>
        <div className="transform scale-[120%] flex justify-between items-start flex-col w-[23%] h-[68%]">
          <div className="font-poppins tracking-widest font-light text-[1.1em]">
            CUSTOMER SERVICE
          </div>
          <div
            className="font-poppins tracking-wide font-light text-[2.2em] w-[90%]"
            style={{ fontWeight: "bolder" }} // tailwind bolding of text was accurate so inline styling used
          >
            Subscribe Our
            <br /> 24*7 Customer <br /> Service
          </div>
          <div className="h-[20%] w-[80%] p-[2.2em_1em] bg-white flex justify-around items-center">
            <input
              placeholder="Enter your email.."
              type="email"
              className="w-[70%] focus:outline-none"
            />
            <div
              className="w-16 h-8 bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${emailFormSubmitButton}`,
                backgroundPosition: "50% 34%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex items-center w-1/3 h-4/5 min-w-[300px] scale-[140%] relative top-5">
          <img src={chatBoxImg} />
        </div>
      </div>
      <div className="relative bg-[#4069D5] h-[33rem] w-full z-10 flex flex-col justify-end items-center gap-[1.1rem] py-16 px-24">
        <div className="h-4/5 w-full flex justify-between gap-8">
          <div className="h-full w-1/3">
            <div className="flex flex-col gap-6">
              <div>
                <img src={Logo} alt="Logo" className="h-[15%] w-[40%]" />
              </div>
              <div style={fontStyle}>
                A Guide4Careers acts as a compass, providing valuable insights
                and direction for those seeking professional fulfillment. It
                begins with self-reflection, encouraging individuals to identify
                their strengths, interests, and aspirations. Setting
                well-defined goals and continually developing relevant skills.
                Networking and seeking mentorship offer opportunities for
                growth.
              </div>
            </div>
          </div>
          <div className="h-full w-1/3 flex justify-between items-center font-bold">
            <div className="flex flex-col gap-6 h-5/6 justify-around">
              <div className="text-white text-[1.5rem] font-poppins relative w-fit">
                COMPANY
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col h-5/6 justify-around">
                <div style={fontStyle}>Home</div>
                <div style={fontStyle}>For Students</div>
                <div style={fontStyle}>For Institutions</div>
                <div style={fontStyle}>Resource Treasure</div>
                <div style={fontStyle}>Contact Us</div>
              </div>
            </div>
            <div className="flex flex-col gap-6 h-5/6 justify-around">
              <div className="text-white text-[1.5rem]  font-poppins relative w-full">
                WHOM WE SERVE
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col h-5/6 justify-around">
                <div style={fontStyle}>School Students</div>
                <div style={fontStyle}>College Students</div>
                <div style={fontStyle}>Education Institutions</div>
                <div style={fontStyle}>Private Schools</div>
                <div style={fontStyle}>Private Colleges</div>
              </div>
            </div>
          </div>
          <div className="w-1/5 flex items-center p-8 pb-5">
            <div className="flex flex-col justify-between items-start ml-4 gap-4">
              <div className="text-white text-[1.5rem] font-poppins relative w-auto font-extrabold">
                Contact Us
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="flex flex-col w-full gap-2" style={fontStyle}>
                <div className="flex gap-2 w-full">
                  {/* Assuming mailIcon is a component or an image path */}
                  <img src={mailIcon} alt="mail" />
                  <p className="font-poppins">info@templeoflearning.in</p>
                </div>
                <div className="flex gap-2 w-full">
                  {/* Assuming phoneIcon is a component or an image path */}
                  <img src={phoneIcon} alt="phone" />
                  <div className="flex flex-col">
                    <p className="font-poppins">+91 98100 33459</p>
                    <p className="font-poppins">+011 45 019 365</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  {/* Assuming locationIcon is a component or an image path */}
                  <img src={locationIcon} alt="location" />
                  <p className="font-poppins">
                    Head Office - L-3, Kanchanjunga Building Barakhamba Road,
                    Connaught Place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 w-full flex justify-between border-t-4 border-white pt-2">
          <div style={fontStyle}>&#169;2024 Guid4Careers</div>
          <div style={fontStyle}>
            <a href="#">All Rights Reserved</a>
          </div>
          <div style={fontStyle}>
            <a href="#">Terms & Condition </a>| <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
