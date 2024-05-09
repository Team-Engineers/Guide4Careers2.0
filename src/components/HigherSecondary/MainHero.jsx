import React from 'react'
import hero from "../../assets/images/Higher/main.png"
import vector from "../../assets/images/Higher/vector.jpeg"
import graduation from "../../assets/images/college/graduation.png"

const MainHero = () => {
    return (
        <div>
            <img className='absolute right-0 z-0' src={vector} alt="" />
            <div className=' relative lg:min-h-[90vh] pt-[100px]  mx-3 md:mx-14  justify-between md:flex-row flex-col items-center flex'>
                <div className='relative z-[1] text-black'>
                    <h1 className='flex flex-col gap-5'>
                        <p className='text-2xl font-bold'>
                            Find the Perfect
                        </p>
                        <p className='text-4xl text-[#F66F52] font-bold'>
                            College and Course Match
                        </p>
                        <p className='text-xl font-bold'>
                            Discover your paths to success with us!
                        </p>
                        <button className=" p-3 max-md:mx-auto font-medium rounded-lg text-white shadow-md shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#2975F5] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                            Speak to Expert
                        </button>
                    </h1>
                </div>
                <div className='relative'>
                    <img src={hero} alt="" />
                    <div className='flex max-lg:hidden absolute top-[-50px] right-[120px] gap-1 px-3 justify-center items-center shadow-black  bg-white shadow-2xl rounded-2xl '>
                        <img className='' src={graduation} alt="" />
                        <h1>Stream?</h1>
                    </div>
                    <div className='flex max-lg:hidden absolute p-2 bottom-[130px] left-[-40px] gap-1 px-3 justify-center items-center shadow-black  bg-white shadow-2xl rounded-2xl '>
                        <h1>What Next?</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHero