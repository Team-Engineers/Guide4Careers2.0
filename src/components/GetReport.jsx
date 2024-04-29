import React from "react";
import backgroundImage from "../assets/images/psychoBackground2.svg";
import pic1 from "../assets/images/pic1.png"; // Assuming you have another image for the right side

const GetReport = () => {
  return (
    <div>
      <div
        className="w-full  h-[57vw] cstmr:h-[55.5vw] flex "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "110%",
          backgroundPosition: "82% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left side content */}
        <div className="flex-1 flex flex-col justify-center items-start w-2/4 max-w-[30rem] mbl:max-w-full text-white p-10">
          <h1 className="text-[1rem] mbl:text-[1.2rem] cstmr:text-[1.8rem] mb-4">
            Take a Free Psychometric Test Today! Know How You Feel.
          </h1>
          <button className="btn scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem] h-[2rem] text-black mt-0 bg-white cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
            Get Full Report
          </button>
        </div>

        {/* Right side image */}
        <div className="hidden flex-1 mbl:flex justify-center items-center">
          <img src={pic1} alt="Sample" className="w-4/6 h-auto rounded-lg" />
        </div>
      </div>
      <div className="flex mbl:hidden  justify-center items-center pb-8">
        <img src={pic1} alt="Sample" className="w-4/6 h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default GetReport;
