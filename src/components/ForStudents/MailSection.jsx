import image from "../../assets/images/Email.svg"
import vector from "../../assets/images/students/vector.png";
import main from "../../assets/images/students/main1.png";
import vector2 from "../../assets/images/students/Vector3.png";
import main2 from "../../assets/images/students/main2.png";

const Mail = () => {



  return (

    <div className="relative">
      <img className="w-screen max-mbl:h-[60vh] h-full z-[0] absolute" src={vector} alt="" />
      <img className="lg:w-[30vw] max-lg:hidden max-mbl:w-[80vw] lg:-rotate-6 absolute right-[2vw] bottom-[10.5vh] mx-auto" src={main} alt="" />
      <div className="lg:min-h-[80vh] pt-20  max-w-[1280px] mx-auto grid  items-center relative z-10">
        <div className=" flex mbl:flex-row flex-col justify-between items-center mbl:px-10">
          <div className="   flex flex-col mx-3 gap-2 justify-start items-start">
            <div className="mbl:mb-14 mb-5">
               <h1 className={`text-[1.5rem] text-[#407BFF] font-bold  lg:text-4xl   relative`}>
              Level Up Your Future:
            </h1>
            <h1 className={`text-[1.3rem] text-black font-bold  lg:text-3xl   relative`}>
            Find Your Stream & Subject Superpower
            </h1>
            </div>
         
            <div className="flex max-mbl:mb-5 max-lg:shadow-2xl shadow-blue-500 max-mbl:w-[300px]  max-mbl:mx-auto  relative justify-center items-center">
            <img src={image} alt="Stream Image" className=" flex absolute left-4  justify-center items-center " />
              <input type="email" className="p-6 pl-14  rounded-xl text-sm md:w-[400px] w-[300px]  h-10 placeholder:text-black" placeholder="Enter your Email" />
              <div className="flex absolute right-4  justify-center items-center">
              <button
                type="submit"
                className="  bg-blue-700 text-sm rounded-xl  text-white border shadow-xl border-transparent  py-1 px-5 font-medium hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
            </div>
          </div>
          <div className=" lg:absolute mb-4 ">
            <img className="lg:max-w-[400px] w-[400px] lg:hidden max-mbl:w-[80vw] mx-auto" src={main2} alt="" />
          </div>
          

        </div>

      </div>

    </div>
  );
};


export default Mail;
