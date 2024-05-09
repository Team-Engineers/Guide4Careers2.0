import React from 'react'
import { v4 as uuidv4 } from "uuid";
import MainCard from "./MainCard";
import Carousel from "./Carousel";
import chat from "../../assets/images/secondary/Chat.png"
import Learning from "../../assets/images/secondary/Chat.png"
import Scholarship from "../../assets/images/secondary/Chat.png"
import Vector1 from "../../assets/images/secondary/Vector1.png"
import main1 from "../../assets/images/secondary/main1.png"
import { useMediaQuery } from "react-responsive";

const Secondary2 = () => {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <MainCard
                    title="Counselling"
                    points1="Industry Best Counselor"
                    points2="Experience across various Domains"
                    points3="Personalized 1 on 1 Counselling to help find the right fit"
                    footer="Schedule a personalised session"
                    imagen={Scholarship}
                    color="bg-[#FFF0CB]"
                    text="text-[#A58639]"
                />
            )
        },
        {
            key: uuidv4(),
            content: (
                <MainCard
                    title="Career Encyclopedia"
                    points1="Industry Best Counselor"
                    points2="Experience across various Domains"
                    points3="Personalized 1 on 1 Counselling to help find the right fit"
                    footer="Schedule a personalised session"
                    imagen={chat}
                    color="bg-[#FCE4EC]"
                    text="text-[#BD6E89]"

                />
            )
        },
        {
            key: uuidv4(),
            content: (
                <MainCard
                    title="Get to Know yourself"
                    points1="Industry Best Counselor"
                    points2="Experience across various Domains"
                    points3="Personalized 1 on 1 Counselling to help find the right fit"
                    footer="Schedule a personalised session"
                    imagen={Learning}
                    color="bg-[#EBF2FF]"
                    text="text-[#28529F]"

                />
            )
        }
    ];
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return (
        < div className='my-10'>
            <div className='text-center max-md:mb-5' >
                <h1 className='font-medium mt-5 text-xl  md:text-2xl' >
                    How we are helping
                </h1>
                <h1 className='font-medium text-[#3E66DF] mt-5 text-2xl md:text-4xl' >
                1 Lakh+ Students like you!
                </h1>
            </div>
            <div className='flex flex-col  z-[1] md:flex-row relative w-full  items-center justify-between'>
                <div className='w-[60vw] '>
                <img className='absolute z-0 bottom-0' src={Vector1} alt="" />
                <img className=' relative  md:mx-10 z-[1]' src={main1} alt="" />
                </div>
                <Carousel
                    cards={cards}
                    height="500px"
                    width={isMobile ? "100%" : "60%"}
                    margin="20px"
                    offset={5}
                    showArrows={false}
                />
            </div>  
          

        </div>

    );
}

export default Secondary2