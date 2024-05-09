import React from 'react'
import main1 from "../../assets/images/Higher/main2.png"
import { FaArrowRight } from "react-icons/fa6";

const Higher3 = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col mx-10 min-h-[40vh] justify-between items-center '>
                <div className='text-black max-md:text-center min-h-[35vh] flex flex-col justify-between'>
                    <h1 className='font-bold text-xl  md:text-3xl'>
                        Feeling overwhelmed by the intricate <br className='max-md:hidden' />
                        college application process for your children?
                    </h1>
                    <h1 className='font-medium'>
                        Relieve yourself of the burden of researching and <br className='max-md:hidden' />
                        selecting the ideal colleges, as well as completing <br className='max-md:hidden' />
                        the tedious task of individually filling out applications.
                    </h1>
                    <h1>
                        <button className='text-[#3E66DF] gap-3 place-content-center place-items-center max-md:w-[90%] max-md:mx-auto text-center flex justify-center items-center  underline'>
                            <p className='md:text-4xl font-medium  '>Talk to our Experts</p>  <p><FaArrowRight className='text-2xl relative md:top-1 place-items-center flex justify-center items-center'/></p>
                        </button>
                    </h1>
                </div>
                <img className='max-lg:w-[300px] max-md:w-full' src={main1} alt="" />
            </div>
        </div>
    )
}

export default Higher3