import React from "react";
import backgroundImage from "../assets/images/backgroundhome.png";
import pic1 from "../assets/images/pic1.png"; // Assuming you have another image for the right side

const GetReport = () => {
  return (
    <div className="relative">
      <img className="absolute z-0 w-screen h-[320px] md:h-[100vh]" src={backgroundImage} alt="" />

      <div
        className=" max-md:py-10  relative mx-[10px] flex-col md:flex-row flex justify-center items-center   md:min-h-[100vh]  "
      >
        <div className="flex-1 flex max-md:mt-5 relative z-[1]  flex-col  text-white p-10">
          <h1 className="text-[1rem] mbl:text-[1.2rem] cstmr:text-[1.8rem] mb-4">
            Take a Free Psychometric Test Today! <br /> Know How You Feel.
          </h1>
          <button className="btn scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem] h-[2rem] text-black mt-0 bg-white cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
            Get Full Report
          </button>
        </div>
        <div className="hidden relative z-[1]  mbl:flex ">
          <img src={pic1} alt="Sample" className="h-auto max-lg:max-w-[300px]  max-lg:mx-auto rounded-lg" />

        </div>
      </div>
      <div className="flex mbl:hidden relative z-[1]   justify-center items-center pb-8">
        <img src={pic1} alt="Sample" className="w-4/6 h-auto rounded-lg" />
      </div>

    </div>
  );
};

export default GetReport;
