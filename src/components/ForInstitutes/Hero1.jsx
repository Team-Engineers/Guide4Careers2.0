import React from 'react'
import backgroundImage from "../../assets/images/institute/mainback.jpeg";
import hero from "../../assets/images/institues.png";
import { useState } from "react";
import CountUp from "react-countup";
import image1 from "../../assets/images/institute/hero1/1.png";
import image2 from "../../assets/images/institute/hero1/2.png";
import image3 from "../../assets/images/institute/hero1/3.png";
import image4 from "../../assets/images/institute/hero1/4.png";
import image5 from "../../assets/images/institute/hero1/5.png";

import { InView } from "react-intersection-observer";
const Hero1 = () => {
  const [focus, setFocus] = useState(false);
  const counterUpContent = [
    {
      id: 1,
      img: image1,
      startCount: "0",
      endCount: "15",
      endPointText: "k+",
      meta: "Number Of Students",
      animationDelay: "0",
    },
    {
      id: 2,
      img: image2,
      startCount: "0",
      endCount: "75",
      endPointText: "%",
      meta: "Percentage Of Success",
      animationDelay: "100",
    },
    {
      id: 3,
      img: image3,
      startCount: "0",
      endCount: "35",
      endPointText: "+",
      meta: "Number Of Questions",
      animationDelay: "200",
    },
    {
      id: 4,
      img: image4,
      startCount: "0",
      endCount: "25",
      endPointText: "+",
      meta: "Number Of Experts",
      animationDelay: "200",
    },
    {
      id: 5,
      img: image5,
      startCount: "0",
      endCount: "15",
      endPointText: "+",
      meta: "Years Of Experience",
      animationDelay: "200",
    },
  ];

  return (
    <>
      <div className='bg-[#172755] lg:pt-10 xl:pt-8 relative'>
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
        <img className=' z-[1]  top-3 max-md:mb-4 relative bottom-0 w-screen' src={backgroundImage} alt="" />
      </div>
      {/* grid sm:grid-cols-3 grid-cols-1 gap-10  mbl:grid-cols-2  md:grid-cols-5 */}
      <div className='flex flex-wrap my-10 mb-20  gap-10 justify-center lg:justify-between mx-10'>

        {counterUpContent.map((val) => (
          <div
            className=" flex flex-col justify-center items-center "
            data-aos="fade-up"
            data-aos-delay={val.animationDelay}
            key={val.id}
          >

            
            <img className=' opacity-80 -z-0' src={val.img} alt="" />
            <div className="flex relative z-[1] font-bold text-2xl  justify-center items-center">
              <span >
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={2}
                >
                  {({ countUpRef }) => (
                    <InView
                      as="span"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </InView>
                  )}
                </CountUp>
              </span>
              {val.endPointText}
            </div>
            <h4 className="text-sm text-center relative z-[1]">{val.meta}</h4>
            </div>
        ))}
      </div>
    </>
  )
}

export default Hero1