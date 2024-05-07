import React from 'react'
import backgroundImage from "../../assets/images/institute/mainback.jpeg";
import hero from "../../assets/images/institues.png";
const Hero1 = () => {
  return (
    <>
    <div className='bg-[#172755] relative'>
        <div className='flex md:flex-row flex-col justify-between z-[2] md:px-[70px] px-[30px]  max-w-[1380px] mx-auto  relative  items-center md:mt-[60px] min-h-[300px] text-white'>
            <div className='w-full'>
            <h1 className="text-[1.5rem] max-md:text-center  max-md:mt-[80px]  mbl:text-3xl font-medium text-white relative ">
                  CAREER GUIDANCE FOR THE  <br className='max-lg:hidden' /> INSTITUTE'S BRIGHT MINDS TO <br className='max-lg:hidden' />  PERFORM WELL
                  </h1>
            </div>
            <div>
            <img
            src={hero}
            alt=""
            className=" md:max-w-[400px] max-w-[300px] "
          />
            </div>
        </div>
        <img className=' z-[1]  max-lg:top-3 max-md:mb-4 relative bottom-0 w-screen' src={backgroundImage} alt="" />
</div>

    </>
  )
}

export default Hero1