import hero from "../assets/images/home/Vector.png";

import "../assets/App1.css";
import animation from "../assets/animation/homePageTopAnimation.json";
import LottiePlayer from "./lottiePlayer";

function Content() {
  return (
    <>
      <div className="relative  min-h-[72vh] ">
        <img className="absolute max-lg:bottom-0 z-[1] w-screen" src={hero} alt="" />
        <div className="w-full h-[5rem] "></div>
        <div className="relative max-w-[1280px] mt-5 mx-auto z-10">
          <div className="flex md:flex-row flex-col items-center m-2 md:mx-10 justify-between w-full">
            <div className=" w-full  ">
              <div className="flex flex-col max-md:mx-3  gap-4">
                <div className="flex flex-col justify-betwen h-full gap-2">
                  <h1 className="text-[1.5rem] mbl:text-3xl font-medium  relative top-4 cstmr:top-0">
                    Let's Have a Counseling Session with
                  </h1>
                  <h1 className="text-3xl font-bold max-md:mt-4 text-blue-500 underline decoration-yellow-500 underline-offset-8">
                    Expert Counselor!
                  </h1>
                </div>
              </div>
              <div className="text-lg mt-8 max-md:mx-4  ">
                You have something to say thought? Need someone to talk with? <br />
                You just step away! Click the and the rest is
              </div>
              <div className="flex max-md:justify-center max-md:items-center">
                <button className="btn w-50 shadow-[0_5px_4px_rgba(200,200,200,0.9)] mbl:w-72 h-8 text-[#3E66DF] bg-white mt-6 hover:text-white hover:bg-blue-500 transform transition-transform hover:scale-105" onClick={() => document.getElementById('my_modal_3').showModal()} >
                  Book a 30-minute free call
                </button>
              </div>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-[#3E66DF] top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Get on a Call with a <br />
                    <span className="text-[#3E66DF] text-4xl">Career Expert</span></h3>
                  <form className="font-medium" action="">
                    <div className="flex my-2 flex-col gap-2">
                      <label htmlFor="name">Name</label>
                      <input className="border border-black rounded-md border-solid p-1" type="text" name="" id="name" />
                    </div>
                    <div className="flex my-2 flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input className="border border-black rounded-md border-solid p-1" type="text" name="" id="email" />
                    </div>
                    <div className="flex my-2 flex-col gap-2">
                      <label htmlFor="number">Number</label>
                      <input className="border border-black rounded-md border-solid p-1" type="text" name="" id="number" />
                    </div>
                    <p className="md:text-base font-normal text-sm mb-2 max-md:text-center">You will get a call back on this number within 24hrs.</p>
                    <button className="p-2 flex justify-center w-full max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem]   mt-0 bg-[#3E66DF] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                      Schedule a Call
                    </button>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="w-full flex items-center max-w-[500px]  md:mt-1 md:text-right">
              <LottiePlayer lottieJson={animation} />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Content;
