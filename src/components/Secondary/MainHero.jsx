import React from 'react'
import hero from "../../assets/images/secondary/main.png"
import vector from "../../assets/images/secondary/vector.png"
import graduation from "../../assets/images/college/graduation.png"
import ModalDialog from '../ModalDialog'

const MainHero = () => {
    return (
        <div>
            <img className='absolute h-[75%] md:w-[60%] md:h-[80%] z-0' src={vector} alt="" />
            <div className=' relative md:min-h-[80vh] mx-5 max-md:pt-[100px] md:mx-14  justify-between items-center flex flex-col md:flex-row'>
                <div className='relative z-[1] text-white'>
                    <h1 className='flex flex-col gap-5'>
                        <p className='text-2xl font-bold'>
                            Take the Control of your future.
                        </p>
                        <p className='text-4xl text-[#79EFFF] font-bold'>
                            Get the support your deserve.
                        </p>
                        <p className='text-xl font-bold'>
                            Discover their Areas of Interest and Consult with <br />
                            Expert Counselors!
                        </p>
                        <button  onClick={() => document.getElementById('my_modal_3').showModal()} className="p-3  max-md:mx-auto  font-medium rounded-lg text-white shadow-md shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#2975F5] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                            Speak to Expert
                        </button>
                        <ModalDialog />
                    </h1>
                </div>
                <img className='lg:absolute bottom-0 max-md:mt-5 right-0' src={hero} alt="" />
                <div className='flex max-lg:hidden absolute top-[170px] right-[120px] gap-1 px-3 justify-center items-center shadow-black  bg-white shadow-2xl rounded-2xl '>
                    <img className='' src={graduation} alt="" />
                    <h1>Stream?</h1>
                </div>
                <div className='flex max-lg:hidden absolute bottom-[130px] right-0 gap-1 px-3 justify-center items-center shadow-black  bg-white shadow-2xl rounded-2xl '>
                    <img className='' src={graduation} alt="" />
                    <h1>School?</h1>
                </div>
               
            </div>
        </div>
    )
}

export default MainHero