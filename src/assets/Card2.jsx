import React from "react";

const Card2 = ({ title, description, imageUrl, tailwindStyle }) => {
  return (
    <div
      className={`${
        tailwindStyle || ""
      } rounded-lg p-4 text-white text-center flex hover:h-[20rem] h-[15rem] mbl:w-[20rem] cstmr:max-w-[14rem]`}
      style={{ flexGrow: "1", flexShrink: "1", transition: "0.2s" }}
    >
      {/* Centered Logo */}
      <div className="w-full h-full flex flex-col items-center">
        <div className=" w-[5rem] h-[5rem] rounded-full overflow-hidden ">
          <img
            src={imageUrl}
            alt={title}
            className="w-[5rem]  h-[5rem] object-cover"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="">
          <p className="text-sm overflow-hidden">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
