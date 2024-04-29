// src/Card.js
import React from 'react';

const Card = ({ image, description, bgColor, color }) => {
  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg m-10 -mt-5 hover:shadow-xl transform hover:scale-105 transition duration-300"
    style={{ width: '225px', height: '240px', backgroundColor: bgColor }}>
 <img src={image} alt="card" className="w-full h-3/5" style={{ height: '40%' , width: '60%', marginLeft: '20px', marginTop: '10px' }} />
 <div className="px-4 py-1">
   <p className=" font-semibold text-base" style={{color: color}}>{description}</p>
 </div>
</div>
  );
};

export default Card;
