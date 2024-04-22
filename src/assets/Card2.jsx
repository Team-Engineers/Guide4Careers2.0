import React from 'react';

const Card2 = ({ title, description, imageUrl, bgColor, height, marginTop, marginBottom }) => {
  return (
    <div className={`bg-${bgColor} rounded-lg p-4 text-white text-center`} style={{ height, marginTop, marginBottom }}>
      {/* Centered Logo */}
      <div className="mx-auto w-24 h-24 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 md:mb-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
      </div>
      <div className="mt-8">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card2;

