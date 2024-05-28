import React from "react";
import graphics from "../assets/images/contactUs.svg";
import facebookIcon from "../assets/images/contactUs/facebook.svg";
import instagramIcon from "../assets/images/contactUs/instagram.svg";
import linkedinIcon from "../assets/images/contactUs/linkedin.svg";
import twitterIcon from "../assets/images/contactUs/twitter.svg";
import locationOutlined from "../assets/images/locationIconOutlined.svg";
import mailIconOutlined from "../assets/images/mailIconOutlined.svg";
import phoneIconOutlined from "../assets/images/phoneIconOutlined.svg";
const ContactUs = () => {
  return (
    <>
      <div className="h-[4rem]"></div>
      <div className="h-[72rem] bg-gradient-to-br    from-[#67e8ff] via-[#74d0fe] to-[#e0eeff]  relative gap-8 cstmr:h-fit tblets:h-[90vh] min-h-[43.4rem] w-full px-8 py-8 mbl:p-16 flex flex-col cstmr:flex-row justify-around cstmr:justify-center cstmr:items-center cstmr:gap-16">
        
        <div className=" w-full cstmr:w-[40%] h-[34rem] flex flex-col justify-between cstmr:justify-around items-center">
          <div className=" z-10 h-[20rem] self-center top-[5%] cstmr:top-[12%] scale-[120%] cstmr:scale-[140%] relative">
            {" "}
            <img src={graphics} />
          </div>
          <div className="relative z-20 w-[75%] pt-8 flex flex-col gap-4 ">
            <div className="w-full flex gap-2">
              <img src={locationOutlined} />
              <p className="font-[poppins] text-[0.8rem] font-medium">
                Head Office - L-3, Kanchanjunga Building Barakhamba Road,
                Connaught Place
              </p>
            </div>
            <div className="w-full flex gap-2">
              <img src={phoneIconOutlined} />
              <p className="font-[poppins] text-[0.8rem] font-medium">
                +91 98100 33459
              </p>
            </div>
            <div className="w-full flex gap-2">
              <img src={mailIconOutlined} />
              <p className="font-[poppins] text-[0.8rem] font-medium">
                info@templeoflearning.in
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[34rem] min-h-[34rem] cstmr:w-[40%] flex flex-col justify-between">
          <div>
            <p className="text-[2rem] text-[#3D5AF1] font-semibold font-[poppins]">
              Get in touch
            </p>
            <p className="text-[1rem] text-black font-medium font-[poppins]">
              We are here for you! How can we help?
            </p>
          </div>
          <div className="flex flex-col h-[65%] justify-around items-start w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[0.9rem] font-medium font-gray">
                Name
              </label>
              <input
                type="text"
                className="border-solid border-[#3E66DF80] border-2 duration-100 focus:outline-none focus:border-4 focus:border-[#3E66DF80] rounded-lg h-[3rem]"
                placeholder=" Enter your Name"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[0.9rem] font-medium font-gray">
                Email
              </label>
              <input
                type="email"
                className="border-solid border-[#3E66DF80] border-2 duration-100 focus:outline-none focus:border-4 focus:border-[#3E66DF80] rounded-lg h-[3rem] focus:border-3"
                placeholder=" Enter your Email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 h-[35%] w-full">
              <label className="text-[0.9rem] font-medium font-gray">
                Message
              </label>
              <textarea
                type="text"
                className="font-[poppins] resize-none border-solid border-[#3E66DF80] duration-100 border-2 focus:outline-none focus:border-4 focus:border-[#3E66DF80] rounded-lg h-full"
                placeholder=" Enter your Message"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full h-[3rem] rounded-lg active:scale-[98%] duration-100 bg-[#3D5AF1] text-white font-medium"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="absolute origin-center-left flex flex-col py-2 justify-around items-center h-[10rem] right-[-0rem] bottom-[5rem] shadow-[-3px_0_4px_rgba(200,200,200,1)] bg-[#E5CEE9] w-[3rem] rounded-l-xl">
          <div>
            <img className="w-8 h-8" src={facebookIcon} />
          </div>
          <div>
            <img className="w-8 h-8" src={instagramIcon} />
          </div>
          <div>
            <img className="w-8 h-8" src={linkedinIcon} />
          </div>
          <div>
            <img className="w-8 h-8" src={twitterIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
