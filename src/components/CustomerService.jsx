import React from "react";
import { BsArrowRight } from "react-icons/bs";
import randomShape from "../assets/images/randomShape.svg";
import chatBoxImg from "../assets/images/chatBoxImg.svg";
import vector2 from "../assets/images/home/Vector2.png";

import "../components/style.css";
import { Link } from "react-router-dom";

const CustomerService = () => {

  return (
    <div>
      <div className="flex overflow-hidden flex-col cstmr:flex-row h-fit cstmr:h-[32rem] justify-around items-center relative w-full py-16 bg-[#EBEAF8] z1 px-8 cstmr:px-16 gap-12 cstmr:gap-10 border-box">
      <div className="absolute  z-10 left-0 ">
          <img src={vector2} />
        </div>
        <div className="absolute w-36 h-56 right-0 top-[5%]">
          <img src={randomShape} />
        </div>
        <div className="md:min-w-[20rem] md:w-[60%] scale-[100%] mbl:scale-[110%] cstmr:scale-[120%] md:px-8 cstmr:px-0 flex justify-around items-start flex-col cstmr:w-[40%] h-[76%] mbl:left-5 gap-4 mbl:min-w-[23rem]">
          <div className="font-poppins tracking-widest font-light text-[#9747FF] text-[1.1em]">
            Problem with Careers
          </div>
          <div
            className="font-poppins tracking-wide font-light text-[2.2rem] md:w-[90%]"
            style={{ fontWeight: "bolder" }} // tailwind bolding of text was accurate so inline styling used
          >
            Subscribe Our
            <br /> 24*7 Customer <br /> Service
          </div>
          <div className="max-h-[5.2rem] cstmr:h-[20%] w-[90%] p-[1rem] cstmr:py-[2.2rem] bg-white flex gap-2 justify-around items-center max-w-[22rem]">

            <h1 className="font-medium text-[#8D8A7A]">Click the arrow and book your Session now.</h1>
            <Link to={"book-session"}
              className=" flex  justify-center border border-solid p-4 shadow-lg items-center  "

            ><BsArrowRight /></Link>
          </div>
        </div>

        <div className="flex items-center w-[28.4rem] h-[10rem] mbl:h-[28.2rem] min-w-[300px] scale-[65%] mbl:scale-[120%] cstmr:[scale-140%] relative left-[1rem]  mbl:top-1">
          <img src={chatBoxImg} />
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
