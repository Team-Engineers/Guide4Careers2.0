import React from 'react'
import user from "../../assets/images/User.png"
import session from "../../assets/images/session.svg"
import { Link } from 'react-router-dom'

const MainProfile = () => {
    return (
        <div className='flex flex-col justify-between mt-[4rem] lg:h-full'>
            <div className='flex flex-col justify-center text-center items-center'>
                <img className='w-[150px] rounded-full h-[150px]' src={user} alt="" />
                <h1 className='font-bold'>Kunal Bagra</h1>
                <h1>
                    Class 10
                </h1>
                <h1>
                    ST Mary’s English High School
                </h1>
                <h1>
                    Jamshedpur-831002
                </h1>
            </div>
            <div className='max-lg:grid max-lg:mt-4 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:justify-center '>
                <div className="bg-white max-sm:w-[90vw] max-lg:w-[300px] lg:my-5 flex flex-col gap-2  max-w-[400px]  border-2  border-solid shadow-2xl   relative px-8 p-5 rounded-xl">
                    <h1 className="text-3xl font-medium mb-2">
                        Scheduled test
                    </h1>

                    <h1 className="text-base text-center font-medium ">
                        Psychometric Test
                    </h1>
                    <h1 className="text-xs opacity-50 text-center font-medium mb-2">
                        Created on: 2 May,2024
                    </h1>


                    <div>
                        <button
                            className="border-none cursor-pointer w-[70%] mx-auto shadow-2xl mb-2 relative flex justify-center items-center rounded-2xl bg-[#54BAB9] overflow-hidden  text-white px-7 p-2"
                            onClick={() => window.location.reload()}
                        >
                            Set another
                        </button>


                    </div>
                </div>
                <div className="bg-white max-sm:w-[90vw] max-lg:w-[300px] flex flex-col gap-2  max-w-[400px]  border-2  border-solid shadow-2xl   relative px-8 p-5 rounded-xl">
                    <img className=' mx-auto' src={session} alt="" />
                    <div>
                        <Link to={"/create-session"}
                            className="border-none cursor-pointer w-[80%] mx-auto shadow-2xl mb-2 relative flex justify-center items-center rounded-2xl bg-[#54BAB9] overflow-hidden  text-white px-7 p-2"
                        >
                            Create Session
                        </Link>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainProfile