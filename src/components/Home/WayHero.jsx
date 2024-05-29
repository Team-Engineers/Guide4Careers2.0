import React from 'react'
import image1 from "../../assets/images/home/main1.jpeg"
import image2 from "../../assets/images/home/main2.jpeg"
import image3 from "../../assets/images/home/main3.jpeg"
import { Link } from 'react-router-dom'

const WayHero = () => {
    return (
        <div>
            <div className='font-bold max-md:mx-2 text-center'>
                <h1 className='md:text-3xl text-2xl'>
                    Speak with confidence, steer your career:
                </h1>
                <h1 className='relative inline-block mt-4 mb-6  custom-underline text-primary text-3xl  md:text-4xl'>The Guide4Career Way.</h1>
            </div>
            <div className='flex md:justify-between justify-center sm:flex-row flex-col-reverse    gap-10  my-10 max-w-[1280px] px-5 mx-auto items-center'>
                <img className='rounded-2xl shadow-2xl   sm:w-1/2 w-full lg:h-[400px] h-[300px]' src={image1} alt="" />
                <div className=' sm:w-1/2 w-full lg:h-[400px] h-[300px] bg-gradient-to-b rounded-2xl  from-[#FFDDD8] to-[#FFFFFF] flex flex-col justify-between  p-3 '>
                    <h1 className='font-bold max-mbl:text-base'>
                        A psychometric test is like a quick X-ray of your abilities and personality. It uses a series of questions or tasks to assess your:
                        <p className='font-medium text-base'> • Aptitude: How well you can learn and perform specific skills, like math or logic.</p>
                        <p className='font-medium text-base'> • Personality: Your natural tendencies and preferences, such as leadership or teamwork.</p>
                    </h1>
                    <Link to={"psychometric-test"} className="p-3 text-center max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#FF5C46] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                        Psychometric Test
                    </Link>
                </div>
            </div>
            <div className='flex my-20 md:justify-between justify-center sm:flex-row flex-col     max-w-[1280px] px-5 mx-auto items-center'>
                <div className='bg-gradient-to-b rounded-2xl  from-[#91FFAF] to-[#FFFFFF] flex flex-col justify-between sm:w-1/2 w-full  lg:h-[400px] h-[300px] p-3 '>
                    <h1 className='font-bold max-mbl:text-base'>
                        A full psychometric test is a comprehensive assessment designed to create a detailed picture of your abilities and personality.  Imagine it as a multi-faceted lens that helps you, and others, see your strengths and areas for development.
                    </h1>
                    <Link to={"dashboard"} className="p-3 text-center max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#34A853] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                        Full Report
                    </Link>
                </div>
                <img className='rounded-2xl shadow-2xl md:w-[46.5%] lg:h-[400px] h-[300px]' src={image2} alt="" />

            </div>
            <div className='flex md:justify-between justify-center sm:flex-row flex-col-reverse   gap-10   my-10 max-w-[1280px] px-5 mx-auto items-center'>
                <img className='rounded-2xl shadow-2xl   sm:w-1/2 w-full lg:h-[400px] h-[300px]' src={image3} alt="" />
                <div className='sm:w-1/2 w-full lg:h-[400px] h-[300px] bg-gradient-to-b rounded-2xl  from-[#FFECA7] to-[#FFFFFF] flex flex-col justify-between  p-3 '>
                    <h1 className='font-bold max-mbl:text-base'>
                        Are you feeling lost or unsure about your future career path? We can help! We offer personalized career guidance appointments to assist you in navigating the exciting, but sometimes overwhelming, world of career choices.
                    </h1>
                    <Link to={"our-team"} className="p-3 text-center max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#FFCC00] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                        Check Our Team
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WayHero