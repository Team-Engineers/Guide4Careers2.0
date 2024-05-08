import React from 'react'
import hero from "../../assets/images/home/Vector (1).png";

const Hero1 = () => {
    return (
        <div>
            <div className='min-h-[50vh] relative max-md:mb-10 pb-20 flex justify-center items-center ' >
                <img className='w-screen  -z-0' src={hero} alt="" />
                <h1 className='flex absolute justify-center mb-20  z-10 font-bold text-3xl items-center'>
                    Career Guideance
                </h1>
                <h1 className='flex absolute justify-center  md:bottom-[100px] bottom-[110px]  text-center z-10 font-bold text-xl items-center'>
                    What new areas of expertise can I be trained on to be more helpful?
                </h1>
                <h1 className='flex max-md:flex-col  gap-4 absolute justify-center bottom-0 md:bottom-[30px] pt-20  z-10 font-bold text-xl items-center'>
                    <input className='border-[2px] min-w-full p-[5px]  border-black border-solid placeholder:font-thin rounded-md px-2' type="search" placeholder='Search' />
                    <button className=' btn-primary bg-[#3E66DF] rounded-md text-white p-[5px] px-10'>Search</button>
                </h1>
            </div>
            
        </div>
    )
}

export default Hero1