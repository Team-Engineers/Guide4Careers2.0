import React from 'react';

const ReviewData = ({ name, degree, testimonial, imageUrl }) => {
    
  return (

    
   
      <div className="group before:hover:scale-95 before:hover:h-96 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-72 before:h-32 before:rounded-t-2xl before:bg-black before:absolute before:top-0 w-72 h-100 relative bg-white flex flex-col items-center justify-center gap-2 rounded-2xl">
        <img
          src={imageUrl}
          alt={name}
          className="w-28 h-28 bg-blue-700 mt-16 rounded-full border-5 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500"
        />
        <div className="z-10 group-hover:-translate-y-10 transition-all duration-500 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-sky-500">{name}</span>
          <p className="text-sky-500">{degree}</p>
          <p className="text-sky-500 mt-2">{testimonial}</p>
        </div>
      </div>
     
  );
};

export default ReviewData;
