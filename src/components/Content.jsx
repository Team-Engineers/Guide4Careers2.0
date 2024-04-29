import React from "react";

import GradientBackground from "../assets/GradientBackground";
import "../assets/App1.css";
import LottiePlayer from "./lottiePlayer";
import animation from "../assets/animation/homePageTopAnimation.json";

function Content() {
  return (
    <>
      {/* Wave SVG Background */}
      <div className="relative ">
        <div className="w-full h-[58%] mbl:h-[55%] cstmr:h-full absolute bottom-[18vh] cstmr:bottom-[-18vw] scale-1">
          <GradientBackground />
        </div>
        {/* {This is just a spacer element} */}
        <div className="w-full h-[4rem] "></div>
        {/* Main Content */}
        <div className="MC max-w-screen-2xl mx-auto mbl:px-16 mbl:pl-8 mr-1 relative z-10 h-full  min cstmr:h-[83%] mb-[50px] flex justify-center cstmr:items-center">
          <div className="flex flex-col cstmr:flex-row w-full h-full gap-8 md:w-5/5 ">
            {/* Left Content */}
            <div className=" w-full px-4 cstmr:pt-4  tbl:pt-[4rem] min-w-[20rem] ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-betwen h-full gap-2">
                  <h1 className="text-[1.5rem] mbl:text-3xl font-medium text-white relative top-4 cstmr:top-0">
                    Let's Have a Counseling Session with
                  </h1>
                  <h1 className="text-3xl font-bold text-blue-500 underline decoration-yellow-500 underline-offset-8">
                    Expert Counselor!
                  </h1>
                </div>
              </div>
              <div className="text-lg mt-8 text-white">
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
            <div className="w-full flex items-center cstmr:items-start mbl:min-w-[27.5rem] md:mt-1 md:text-right">
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
