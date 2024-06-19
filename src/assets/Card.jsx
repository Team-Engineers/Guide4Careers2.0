import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Card({ logoUrl, style,path, style2, imageUrl, title, description, buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`${path}`}
      className="pl-4 min-h-[20rem] md:min-h-[25rem] h-full w-full border-solid border border-r border-[rgb(42,42,42)] cursor-pointer cstmr:w-[33%] flex flex-col justify-around relative basis-auto shrink grow hover:h-[130%] cstmr:hover:w-[40%] cstmr:hover:h-[100%] duration-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? style2 : style
      }}>
      <div className="h-16 w-16 relative">
        <img src={logoUrl} alt="logo" className="w-full h-full" />
      </div>
      <div
        className={`${isHovered ? "opacity-100" : "lg:opacity-0 opacity-100"} scale-[60%] lg:scale-[100%] top-0 right-0 duration-200 absolute cstmr:top-4 cstmr:right-4 h-36 w-36 rounded-[100px] bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex flex-col">
        <h3 className="font-bold text-[1.5rem]">{title}</h3>
        <p className="text-[1.1rem] font-semibold w-[85%] max-w-[17rem] min-w-[17rem] ">
          {description}
        </p>
      </div>
      <div className={`justify-center flex ${isHovered ? "opacity-100" : "lg:opacity-0 opacity-100"} duration-200`}>
        <button className={`px-16 py-3 rounded-lg shadow-[0_5px_4px_rgba(120,120,120,0.8)] ${title === "Class 11th & 12th" ? "bg-white text-[#2f5de9]" : "bg-[#2f5de9] text-white"}`}>
          {buttonText}
        </button>
      </div>
    </Link>
  );
}

export default Card;
