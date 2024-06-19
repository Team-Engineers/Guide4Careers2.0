import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewData = ({ name, degree, rating, testimonial, imageUrl }) => {
  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} />);
    }

    return stars;
  };

  return (
    <div className="group before:max-mbl:w-[90vw] max-mbl:w-[90vw] mb-16 shadow-2xl shadow-[#00000060] border border-solid h-[440px] before:hover:scale-95 before:hover:h-[410px] before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-72 before:h-32 before:rounded-t-2xl before:bg-black before:py-5 before:absolute before:top-[-10px] after:top-[px] w-72 h-100 relative p-5 bg-white flex flex-col items-center justify-center gap-2 rounded-2xl">
      <img
        src={imageUrl}
        alt={name}
        className="h-[100px] object-cover mt-16 mb-5 rounded-full border-5 border-slate-50 z-20 group-hover:scale-125 group-hover:-translate-x-24 group-hover:ml-10 group-hover:-translate-y-10 transition-all duration-500"
      />
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold text-sky-500">{name}</span>
        <p className=" group-hover:text-sky-500 text-sm">{degree}</p>
        <p className="group-hover:text-sky-500 text-lg text-center font-normal px-3 pb-5 mt-5">{testimonial}</p>
      </div>
      <h1 className={`m-2 flex absolute transition-all duration-500 justify-center items-center mb-4 z-10 text-white group-hover:text-[#3E66DF] ${'top-8'} ${'group-hover:bottom-[-340px]'}`}>
        {generateStars(rating)}
      </h1>
    </div>
  );
};

export default ReviewData;
