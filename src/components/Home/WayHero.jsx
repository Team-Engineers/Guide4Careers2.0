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
                <h1 className='relative inline-block mt-4 mb-6  custom-underline text-[#3E66DF]  text-3xl  md:text-4xl'>The Guide4Career Way.</h1>
            </div>
            <div className='flex justify-center max-md:my-20 max-md:gap-20 sm:flex-row flex-col-reverse    gap-10  my-10 max-w-[1280px] px-5 mx-auto items-center'>
                <img className='rounded-2xl shadow-2xl    sm:w-1/2 w-full lg:h-[400px] h-[300px]' src={image1} alt="" />
                <div className=' sm:w-1/2 w-full lg:h-[400px] h-[300px] bg-gradient-to-b rounded-2xl  p flex flex-col  justify-center  p-3 '>
                    <h1 className=' max-mbl:text-base flex flex-col'>
                        <p1 className='text-2xl font-bold mb-4 max-md:text-center max-md:mt-3 '> Take the TEST and lean about the magic.  </p1>
                        <p1 className=" mb-4">Stop career confusion. Our awesome psychometric test is your personalized roadmap to exciting career possibilities.</p1>
                        <h1> Imagine:</h1>
                        <h1 className='ml-5 font-medium flex flex-col max-md:mb-4 '>
                            <p1 className='text-base font-normal'> • Discovering careers you NEVER knew existed!.</p1>
                            <p1 className='text-base font-normal'> • Finding the PERFECT study path that makes learning FUN!.</p1>
                            <p1 className='text-base font-normal'> • Finding the PERFECT study path that makes learning FUN!.</p1>
                        </h1>

                    </h1>
                    <Link to={"psychometric-test"} className="p-3 text-center max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[50%]  max-w-[18rem]   mt-0 bg-[#FF5C46] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                        Psychometric Test
                    </Link>
                </div>
            </div>
            <div className='flex my-20 md:justify-between justify-center sm:flex-row flex-col     max-w-[1280px] px-5 mx-auto items-center'>
                <div className='bg-gradient-to-b rounded-2xl max-sm:mb-20 sm:px-10  flex flex-col  sm:w-1/2 w-full justify-center  lg:h-[400px] h-[300px] p-3 '>
                    <h1 className='font-bold text-2xl max- '>
                    Congratulations – you are now to reveal your inner successful professional                
                        </h1>
                        <h1 className='my-5'>
                        Psychometric Test complete!  Get ready for your personalized <br /> career map, highlighting strengths &...growth areas (we all have them!).
                        </h1>
                        <h1>
                        Report card unlocks careers! Match strengths & boost <br /> weaknesses.
                        </h1>
                    <Link to={"dashboard"} className="p-3 text-center max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] min-w-[10rem] w-[60%] max-w-[18rem]   mt-0 bg-[#34A853] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                        Full Report
                    </Link>
                </div>
                <img className='rounded-2xl shadow-2xl md:w-[46.5%] lg:h-[400px] h-[300px]' src={image2} alt="" />

            </div>
            <div className='flex md:justify-between justify-center sm:flex-row flex-col-reverse   gap-10   my-10 max-w-[1280px] px-5 mx-auto items-center'>
                <img className='rounded-2xl shadow-2xl   sm:w-1/2 w-full lg:h-[400px] h-[300px]' src={image3} alt="" />
                <div className='sm:w-1/2  w-full lg:h-[400px] h-[300px] bg-gradient-to-b rounded-2xl  flex flex-col justify-center  sm:p-10 '>
                    <h1 className='font-bold text-2xl'>
                    Feeling Stuck? Don’t worry –  <br /><span className='text-[#3D5AF1]'>Guide4career</span> got you covered                  
                    
                      </h1>

                      <h1 className='my-5'>Psychometric results got you pumped? Don't sweat the <br className='max-sm:hidden' /> overwhelm – Guide4Career experts navigate your exciting <br /> options!</h1>
                      <h1 className='mb-2'>
                      Cut the confusion, map your dream career! Book a <br /> <span className='text-[#3D5AF1]'>Guide4Career</span>  expert in clicks.
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