import React from 'react';
import LottiePlayer from "./lottiePlayer";

import hero from "../assets/images/home/Vector.webp";
import animation from "../assets/animation/homePageTopAnimation.json";
import "../assets/App1.css";
import ModalDialog from './ModalDialog';

function Content() {
  return (
    <>
      <div className="relative  min-h-[72vh] ">
        <img className="absolute max-lg:bottom-0 z-[1] w-screen" src={hero} alt="" />
        <div className="w-full h-[5rem] "></div>
        <div className="relative max-w-[1280px] mt-5 mx-auto z-10">
          <div className="flex md:flex-row flex-col items-center m-2 md:mx-10 justify-between w-full">
            <div className=" w-full  ">
              <div className="flex flex-col max-md:mx-3  gap-4">
                <div className="flex flex-col justify-betwen h-full gap-2">
                  <h1 className="text-[1.2rem] mbl:text-3xl font-medium  relative top-4 cstmr:top-0">
                    Let's Have a Counseling Session with
                  </h1>
                  <h1 className="text-3xl font-bold max-md:mt-4 text-primary underline decoration-yellow-500 underline-offset-8">
                    Expert Counselor!
                  </h1>
                </div>
              </div>
              <div className="text-lg mt-8 max-md:mx-4  ">
                You have something to say thought? Need someone to talk with? <br />
                You just step away! Click the and the rest is
              </div>
              <div className="flex max-md:justify-center max-md:items-center">
                <button className="btn w-50 shadow-[0_5px_4px_rgba(200,200,200,0.9)] mbl:w-72 h-8 text-[#3E66DF] bg-white mt-6 hover:text-white hover:bg-blue-500 transform transition-transform hover:scale-105" onClick={() => document.getElementById('my_modal_3').showModal()} >
                  Book a 30-minute free call
                </button>
              </div>
              <ModalDialog />
            </div>
            <div className="w-full flex items-center max-w-[500px]  md:mt-1 md:text-right">
              <LottiePlayer lottieJson={animation} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
