import React, { useState } from "react";
import "./App.css";

function Card({ logoUrl, imageUrl, title, description, style, buttonText }) {
  const [isHovered, setIsHovered] = useState(false);

  // Define an array of hover colors (you can add more colors if needed)
  const hoverColors = [
    "rgba(255, 253, 203, 1)",
    "rgba(74, 118, 246, 1)",
    "rgba(174, 226, 255, 1)",
  ]; // Yellow, Green, Blue

  // Determine hover color based on card index (for demonstration)
  const getHoverColor = () => {
    const index = Math.floor(Math.random() * hoverColors.length); // Randomly select a color
    return hoverColors[index];
  };

  return (
    <div
      className={`${style} pl-4 h-full w-full max-h-[25rem] cstmr:w-[33%] flex flex-col justify-around relative basis-auto shrink grow hover:h-[130%]  cstmr:hover:w-[40%] cstmr:hover:h-[100%] duration-200 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-16 w-16 relative">
        <img src={logoUrl} alt="logo" className="w-full h-full" />
      </div>
      <div
        className={`${
          isHovered ? "opacity-100" : "opacity-0"
        }  scale-[60%] cstmr:scale-[100%] top-0 right-0 duration-200 absolute cstmr:top-4 cstmr:right-4 h-36 w-36 rounded-[100px] bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex flex-col">
        <h3 className="font-bold text-[1.2rem]">{title}</h3>
        <p className="text-[1rem] font-semibold w-[85%] max-w-[17rem] min-w-[17rem] ">
          {description}
        </p>
      </div>
      <div
        className={`${isHovered ? "opacity-100" : "opacity-0"} duration-200`}
      >
        <button className="px-16 py-3 bg-[#4a76f6] rounded-lg text-white ">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
