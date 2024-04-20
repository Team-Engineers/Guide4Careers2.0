import React from "react";
import pic from "../images/pic.gif";
import GradientBackground from "../assets/GradientBackground";


function Content() {
  return (
    <>
  {/* Wave SVG Background */}
  <div className="relative overflow-hidden h-screen sm:mb-16">
  <GradientBackground />

    {/* Main Content */}
    <div className="max-w-screen-2xl mx-auto px-4 relative z-10 h-full flex justify-center items-center ">
      <div className="flex flex-col md:flex-row w-full md:w-4/5">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="space-y-5">
            <h1 className="text-2xl font-medium text-black">
              Let's Have a Counseling Session with
            </h1>
            <h1 className="text-3xl font-bold text-blue-500 underline decoration-yellow-500 underline-offset-8">
              Expert Counselor!
            </h1>
          </div>
          <div className="text-lg mt-12 text-gray-950">
            You have something to say thought? Need someone to talk with?
            You just step away! Click the and the rest is
          </div>
          <button className="btn w-72 h-8 text-white bg-blue-500 mt-10 hover:text-black hover:bg-white transform transition-transform hover:scale-105">
  Book a 30-minute free call
</button>

        </div>
        {/* Right */}
        <div className="w-full  md:w-1/2 md:mt-1 md:text-right">
          <img
            src={pic}
            alt=""
            className="w-full md:max-w-lg mx-auto mb-24 "
          />
        </div> 
      </div>
    </div>
  </div>
</>

  );
}

export default Content;
