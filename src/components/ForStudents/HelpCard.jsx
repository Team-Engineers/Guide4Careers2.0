import React from 'react';

const Card = ({ image, description, bgColor, color }) => {
  return (
    <div className="max-w-lg  h-[240px] rounded-lg overflow-hidden shadow-lg m-10 -mt-5 hover:shadow-xl transform hover:scale-105 transition duration-300"
      style={{  backgroundColor: bgColor }}>
      <img src={image} alt="card" className="md:w-[60%] h-[40%]" style={{  marginLeft: '20px', marginTop: '10px' }} />
      <div className="px-4 py-1">
        <p className=" font-medium text-sm mt-4" style={{ color: color }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
