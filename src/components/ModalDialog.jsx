import React from 'react';

function ModalDialog() {
  return (
    <dialog id="my_modal_3" className="modal text-black">
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
  );
}

export default ModalDialog;
