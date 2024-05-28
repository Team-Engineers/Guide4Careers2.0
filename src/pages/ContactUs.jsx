import React from "react";
import graphics from "../assets/images/contactUs.svg";
import facebookIcon from "../assets/images/contactUs/facebook.svg";
import instagramIcon from "../assets/images/contactUs/instagram.svg";
import linkedinIcon from "../assets/images/contactUs/linkedin.svg";
import twitterIcon from "../assets/images/contactUs/twitter.svg";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br lg:min-h-screen flex lg:flex-row flex-col justify-center items-center    from-[#ffffff] to-[#92dbff]  ">
      <div className="max-w-[1280px]  lg:h-[570px]  mx-auto lg:mt-10 mt-14 items-center relative  flex lg:flex-row flex-col-reverse  gap-5 p-4 lg:p-10 ">
        <div className="h-full font-medium flex flex-col justify-between">
          <div className="flex-col text-sm mb-10 flex justify-between h-full">
            <h1 className="text-5xl font-bold max-lg:hidden">Contact Us</h1>
            <h1>Email, Call, or complete the form to learn <br />
              how <span className="text-[#3D5AF1]">Guide4careers</span> can solve your <br />
              messaging problem.</h1>
            <h1>info@templeoflearning.in</h1>
            <h1>+91 98100 33459</h1>
            <h1 className="text-[#3D5AF1] underline">Customer Support</h1>
          </div>
          <div className="grid gap-2 text-sm grid-cols-2">
            <div className="">
              <h1 className="font-bold my-2">Customer Support</h1>
              <p1 className="text-xs">
                Our support team is available
                around the clock to address any
                concerns or queries you may
                have.</p1>
            </div>
            <div>
              <h1 className="font-bold my-2">Media Inquires</h1>
              <p1 className="text-xs">
                For media-related questions or
                press inquires, please contact us
                at <span className="text-[#3D5AF1]"> info@templeoflearning.in</span></p1>
            </div>
            <div>
              <h1 className="font-bold my-2">Feedback and Suggestions</h1>
              <p1 className="text-xs">
                We value your feedback and are
                continuously working to improve
                Guide4careers. Your input is
                crucial in
                shaping the future of <span className="text-[#3D5AF1]">Guide4careers</span>.</p1>
            </div>
          </div>

        </div>
        <iframe className="h-full max-lg:hidden max w-full rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.013437802437!2d77.21783243081936!3d28.63010902426457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd317b7b6db1%3A0xfb8a939428a4d433!2sKanchanjunga%20Building%2C%20Barakhamba%20Rd%2C%20Fire%20Brigade%20Lane%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2sus!4v1716054881079!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className="bg-white h-full   p-4 rounded-3xl w-full ">
          <h1 className="font-bold text-4xl">
            Get in Touch
          </h1>
          <p2 className="opacity-40  text-sm">You can reach us anywhere</p2>
          <form className="space-y-4 pt-2 text-center ">
            <div className="flex gap-10 justify-between">
              <div className="w-full">

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700"
                />
              </div>

              <div className="w-full">

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700"
                />
              </div>
            </div>
            <div>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700"
              />
            </div>

            <div>

              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700"
              />
            </div>

            <div>

              <textarea
                id="message"
                name="message"
                rows="2"
                className="w-full border h-[100px] border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="p-3 w-full font-medium rounded-xl text-white shadow-md shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem]    mt-0 bg-[#2975F5] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105"          >
              SUBMIT
            </button>
            <h1 className="text-center text-sm"> By contacting us, you agree to our <span className="font-bold"> Terms <br className="max-lg:hidden" />
              of service</span> and <span className="font-bold"> Privacy policy</span></h1>
          </form>
        </div>

      </div>
      <iframe className="lg:h-full h-[500px] lg:hidden max w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.013437802437!2d77.21783243081936!3d28.63010902426457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd317b7b6db1%3A0xfb8a939428a4d433!2sKanchanjunga%20Building%2C%20Barakhamba%20Rd%2C%20Fire%20Brigade%20Lane%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2sus!4v1716054881079!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="absolute z-10  origin-center-left flex flex-col py-2 justify-around items-center h-[10rem] right-[-0rem] bottom-[5rem] shadow-[-3px_0_4px_rgba(200,200,200,1)] bg-[#E5CEE9] w-[2rem] rounded-l-xl">
        <div>
          <img className="w-8 h-8 cursor-pointer" src={facebookIcon} />
        </div>
        <div>
          <img className="w-8 h-8 cursor-pointer" src={instagramIcon} />
        </div>
        <div>
          <img className="w-8 h-8 cursor-pointer" src={linkedinIcon} />
        </div>
        <div>
          <img className="w-8 h-8 cursor-pointer" src={twitterIcon} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
