import React from 'react';
import popup from "../../assets/images/home/popup.png";

import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function ModalDialog() {
  return (
    <dialog id="my_modal_4" className="modal text-black">
      <div className=" relative  md:bg-gradient-to-br from-[#efb6ff]  to-[#7697fb] justify-center items-center rounded-2xl  flex w-[85vw] md:w-[70vw] ">
        <div className=' max-md:hidden  text-sm font-medium md:p-4 md:pl-6 rounded-l-2xl h-full w-1/2  '>
          <h1>Loved by thousands of students and <br />
            recommended by many colleges and schools.</h1>
          <img src={popup} alt="" />
          <div className='flex gap-2 items-center'>
            <h1 className=' border-r border-black border-solid p-2'>Over 100 <br />
              5- star review</h1>
            <h1 className='text-yellow-400 flex gap-2 '><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h1>
          </div>
        </div>
        <div className='md:w-1/2 p-4 max-md:rounded-2xl rounded-r-2xl bg-white'>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-lg font-bold text-[#3E66DF] top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">
            <span className="text-[#3E66DF] text-2xl">Talk to a Guide4Careers Expert</span></h3>
          <form className="font-medium" action="">
            <div className="flex my-4 flex-col gap-2">
              <input placeholder='First Name*' className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text" name="" id="firstname" />
            </div>
            <div className="flex my-4 flex-col gap-2">
              <input placeholder='Last Name*' className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text" name="" id="lastname" />
            </div>
            <div className="flex my-4 flex-col gap-2">
              <input placeholder='Email*' className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text" name="" id="email" />
            </div>
            <div className="flex my-4 flex-col gap-2">
              <input placeholder='Class*' className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text" name="" id="class" />
            </div>
            <div className="flex my-4 flex-col gap-2">
              <input placeholder='School*' className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                type="text" name="" id="school" />
            </div>
            <div className='my-4 flex gap-2 justify-between items-center'>
              <input className='bg-[#F6F7FB]' type="checkbox" name="" id="" />
              <label className=' text-xs font-normal' htmlFor="check">
                I agree with Guide4careers’s <span > <Link className='underline text-[#3E66DF]' to={"/termscondition"}>terms and conditions</Link> </span>, and
                provide
                consent to communication from the team.

              </label>
            </div>

            <button className="p-2 flex justify-center w-full max-md:mx-auto font-medium rounded-sm text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem]   mt-0 bg-[#3E66DF] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalDialog;
