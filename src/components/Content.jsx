import React from "react";

import GradientBackground from "../assets/GradientBackground";
import "../assets/App1.css";
import LottiePlayer from "./lottiePlayer";
import animation from "../assets/animation/homePageTopAnimation.json";

function Content() {
  return (
    <>
      {/* Wave SVG Background */}
      <div className="relative h-[100vh] max-h-[25rem] mbl:max-h-[44rem] mbl:h-[115vh] cstmr:h-[95vh] min-h-[48rem] sm:mb-1">
        <div className="w-full h-[58%] mbl:h-[55%] cstmr:h-full absolute top-[10%] scale-1">
          <GradientBackground />
        </div>
        {/* {This is just a spacer element} */}
        <div className="w-full h-[4rem] "></div>
        {/* Main Content */}
        <div className="MC max-w-screen-2xl mx-auto mbl:px-16 relative z-10 h-full  min cstmr:h-[83%] flex justify-center items-center">
          <div className="flex flex-col cstmr:flex-row w-full h-full gap-8 md:w-5/5 ">
            {/* Left Content */}
            <div className=" w-full px-4 md:mt-0 ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-betwen h-full gap-8">
                  <h1 className="text-[1.5rem] mbl:text-3xl font-medium text-black relative top-4 cstmr:top-0">
                    Let's Have a Counseling Session with
                  </h1>
                  <h1 className="text-2xl font-bold text-blue-500 underline decoration-yellow-500 underline-offset-8">
                    Expert Counselor!
                  </h1>
                </div>
              </div>
              <div className="text-lg mt-8 text-gray-950">
                You have something to say thought? Need someone to talk with?
                You just step away! Click the and the rest is
              </div>
              <button
                className="btn w-50 mbl:w-72 h-8 text-black bg-white mt-6 hover:text-white hover:bg-blue-500 transform transition-transform hover:scale-105"
                style={{ boxShadow: "0 5px 4px rgba(200,200,200,0.9)" }}
              >
                Book a 30-minute free call
              </button>
            </div>
            {/* Right */}
            <div className="w-full flex items-center cstmr:items-start mbl:min-w-[30rem] md:mt-1 md:text-right">
              {/* <img
            src={pic}
            alt=""
            className="PIC w-full md:max-w-lg mx-auto"
          /> */}
              <LottiePlayer lottieJson={animation} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
