const Card2 = ({ title, description, imageUrl, heading, tailwindStyle }) => {
  return (
    <div
      className={`${tailwindStyle || ""
        } parent rounded-lg p-4 transition-all  duration-500 text-white text-center justify-center items-center flex hover:h-[20rem] h-[15rem] w-full  cstmr:max-w-[18rem]`}
      style={{ flexGrow: "1", flexShrink: "1", transition: "0.4s" }}
    >
      <style>
        {`
          .child-scale {
            margin-bottom: 10px;
            transform: scale(1);
            transition: transform 0.4s ease-in-out;
          } 

          .parent:hover .child-scale {
            transform: scale(1.25);
            margin-bottom: 5px;
            margin-top: 20px;
          }

          .child2-scale {
            font-size: 13px;
            transition: all 0.4s ease-in-out;
          }
          .:hover .child2-scale  {
            font-size: 10px;
            transition: all 0.4s ease-in-out;
          }

          .parent:hover .child2-scale {
            margin-bottom: 20px;
                        font-size: 14px;

            margin-top: 30px;
          }
        `}
      </style>
      <div className="w-full  h-full  flex flex-col items-center">
        <div
          className="w-[4rem] relative z-20  h-[4rem]  rounded-full overflow-hidden child-scale"
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="child2-scale transition-all duration-100  mb-2">
          <p1 className="text-center  text-black font-bold ">{heading}</p1> <br />
          <p1 className=" overflow-hidden ">{description}</p1>
        </div>
      </div>
    </div>
  );
};

export default Card2;
