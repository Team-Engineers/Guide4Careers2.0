import React from 'react';

const Card = ({ image, description, bgColor, color, title }) => {
  return (
    <div className="max-w-lg justify-center flex flex-col m-4 h-[290px] rounded-lg overflow-hidden shadow-lg  hover:shadow-xl transform hover:scale-105 transition duration-300"
      style={{  backgroundColor: bgColor }}>
      <img src={image} alt="card" className="md:max-w-[120px] h-[100px] mx-auto " />
      <div className="px-4 py-1">
        <p  className=" sm:h-[40px] flex justify-center items-start font-bold text-center  text-base mt-4" >{title}</p>
        <p className=" font-medium text-center text-sm mt-4" style={{ color: color }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
