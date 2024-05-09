const Card2 = ({ title, description, imageUrl, tailwindStyle }) => {
  return (
    <div
      className={`${
        tailwindStyle || ""
      } parent rounded-lg p-4 transition-all  duration-500 text-white text-center justify-center items-center flex hover:h-[20rem] h-[15rem] w-full  cstmr:max-w-[18rem]`}
      style={{ flexGrow: "1", flexShrink: "1", transition: "0.4s" }}
    >
      <style>
        {`
          .child-scale {
            transform: scale(1);
            transition: transform 0.4s ease-in-out;
          }

          .parent:hover .child-scale {
            transform: scale(1.25);
            margin-top: 20px;
          }

          .child2-scale {
            transition: all 0.4s ease-in-out;
          }

          .parent:hover .child2-scale {
            margin-bottom: 20px;
            margin-top: 30px;
          }
        `}
      </style>
      <div className="w-full  h-full  flex flex-col items-center">
        <div
          className="w-[5rem] mb-5 h-[5rem]  rounded-full overflow-hidden child-scale"
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="child2-scale transition-all duration-100  mb-2">
          <p className="text-sm overflow-hidden">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
