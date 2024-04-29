import React, { useState } from 'react';

function PlanCard({ name, description, btnText, price, features, color }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundImage: "linear-gradient(to bottom right, rgba(106, 138, 255, 0.2), #FFFFFF)",
    backgroundColor: color,
    minHeight: price === "Rs 2400" ? "350px" : "200px",
    marginTop: price === "Rs 2400" ? "-50px" : "0px",
    padding: "32px",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    '@media (max-width: 768px)': {
      marginTop: price === "Rs 2400" ? "0px" : "0px",
    },
  };

  const buttonStyle = {
    backgroundColor: price === "Rs 2400" ? "#1B223C" : "#FFFFFF",
    color: price === "Rs 2400" ? "#FFFFFF" : "black",
    marginTop: "auto",
    borderRadius: "20px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isMiddleCard = price === "Rs 2400";

  return (
    <div
      style={cardStyle}
      className="flex w-[350px] flex-col rounded-3xl p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMiddleCard && (
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "-10px",
            right: "10px",
            bottom: "-20px",
            zIndex: -1,
            borderRadius: "42% 58% 86% 14% / 77% 27% 73% 23%",
            backgroundImage: "linear-gradient(to bottom right, #6A8AFF, rgba(106, 138, 255, 1))",
          }}
        />
      )}
      {isMiddleCard && (
        <div className="absolute top-4 right-4 bg-yellow-100 px-2 py-1 rounded-lg text-sm font-medium">
          🏆 Best Seller
        </div>
      )}
      <h2 className="mb-2 text-4xl font-medium">{name}</h2>
      <p className="mb-2 font-semibold text-2xl">{description}</p>
      <div className="mb-5 flex items-end text-3xl font-semibold">
        {price ? <div>{price}</div> : "Free"}
      </div>
      <ul className={`mb-10 flex flex-col gap-y-2 ${isMiddleCard ? 'mt-[30px] gap-y-8' : ''}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div style={{ width: '70px', height: '0px', marginRight: '16px' }}>
              {feature.isValid ? <img src={feature.imageValid} alt="Valid" /> : <img src={feature.imageInvalid} alt="Invalid" />}
            </div>
            <div className='flex flex-col'>
            <span className={`text-lg font-semibold ${feature.isValid ? 'text-black' : 'text-black'}`}>{feature.text}</span>
            <span className="text-sm text-gray-500 mt-1">{getFeatureDescription(feature.text)}</span>
            </div>
          </li>
        ))}
      </ul>
      <button style={buttonStyle}>{btnText}</button>
    </div>
  );
}

const getFeatureDescription = (feature) => {
  switch (feature) {
    case 'Stream Treatment':
      return '4-dimensional stream assessment with top stream recommendations.';
    case 'Career Content':
      return 'Well-researched information on hundreds of career options';
    case 'Career Counselling':
      return 'Face-to-face counselling sessions and guidance from career experts and online support.';
    case '1 User':
      return 'Access for a single user account.';
    case '2 Projects':
      return 'Ability to work on up to 2 projects concurrently.';
    case '5 GB Storage':
      return 'Storage space for saving project files.';
    default:
      return '';
  }
};

export default PlanCard;
