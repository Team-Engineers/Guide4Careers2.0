import React from 'react'
import hero from "../../assets/images/college/hero.png"
import vector from "../../assets/images/college/vector.jpeg"
import graduation from "../../assets/images/college/graduation.png"
import ModalDialog from '../ModalDialog'

const MainHero = () => {
    return (
        <div>
            <img className='absolute h-[90%] md:h-[90%]  w-screen z-0' src={vector} alt="" />
            <div className=' relative min-h-[90vh] md:mx-14 mx-4  justify-between items-center max-md:pt-[100px] md:flex-row flex-col flex'>
                <div className='relative z-[1] text-black'>
                    <h1 className='flex flex-col gap-5'>
                        <p className='text-2xl font-bold'>
                            Want to pace up your
                        </p>
                        <p className='text-4xl text-[#4CCD99] font-bold'>
                            career journey? But how?
                        </p>
                        <p className='text-xl font-bold'>
                            Seek clarity to get the best job after graduation <br />
                            <p className='mt-4 text-xl font-bold'>Pursue an In-demand course for postgraduation
                           <br /> in India</p>
                        </p>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()}  className="p-3 max-md:mx-auto font-medium rounded-lg text-white shadow-md shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#2975F5] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                            Speak to Expert
                        </button>
                        <ModalDialog />
                    </h1>
                </div>
                <div>
                <div className='flex max-lg:hidden absolute top-[250px] right-[400px] gap-1 px-3 justify-center items-center shadow-black  bg-white shadow-2xl rounded-2xl '>
                        <img className='' src={graduation} alt="" />
                        <h1>JOB?</h1>
                    </div>
                    <div className='flex max-lg:hidden absolute  top-[130px] right-[20px] gap-1 px-3 justify-center items-center shadow-black  bg-white shadow-2xl rounded-2xl '>
                    <img className='' src={graduation} alt="" />
                        <h1>PG?</h1>
                    </div>
                    <img className='md:absolute bottom-0 right-0' src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainHero