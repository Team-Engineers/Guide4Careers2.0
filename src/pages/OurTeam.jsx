import React from 'react'
import counselor1 from "../assets/images/team/card-header1.png";
import counselor2 from "../assets/images/team/header.png";
import counselor3 from "../assets/images/team/card-header.png";
import counselor4 from "../assets/images/team/studentVector.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

const services = [
    {
        image: counselor1,
        name: "Bonnie Green",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        image: counselor2,
        name: "Thomas Lean",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        image: counselor3,
        name: "Jese Leos",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        image: counselor4,
        name: "Derpina Wickers",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        image: counselor1,
        name: "Mark Churry",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        image: counselor2,
        name: "Derpina Wickers",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
    ,
    {
        image: counselor3,
        name: "Derpina Wickers",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        image: counselor4,
        name: "Derpina Wickers",
        designaiton:"Career Counsellor",
        description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
];
const OurTeam = () => {
  return (
    <div className='my-[4rem] mt-[90px]'>
        <div className='text-[#233876] mx-2 md:mx-10'>
        <h1 className='md:text-5xl max-md:text-center text-4xl font-bold'>
        Our team
        </h1>
        <h1 className='md:text-2xl max-md:text-center font-medium'>
        Our team is comprised of highly experienced and renowned career counselors, ready to provide you with personalized guidance and support on your career journey.
        </h1>
         </div>
        <div className='grid gap-10 mt-4 grid-cols-1 mx-2 md:mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {services.map((service, index) => (
                    <div key={index}>
                        <div className={`  min-h-[350px] flex flex-col justify-between py-8 rounded-3xl px-5  shadow-2xl  `}>
                            <img className=' rounded-xl max-md:my-2' src={service.image} alt={service.name} />
                            <h1 className=' mt-2 text-[#233876] font-bold text-xl  relative text-left '>{service.name}</h1>
                            <h1 className='opacity-80  '>{service.designaiton}</h1>
                            <h1 className=' my-4 '>{service.description}</h1>
                            <div className='flex gap-4 opacity-80 mx-1 '>
                                <Link to={""} target='_blank'>
                                <FaLinkedin/>
                                </Link>
                                <Link to={""} target='_blank'>
                                <FaGithub/>
                                </Link>
                                <Link to={""} target='_blank'>
                                    <FaFacebookF/>
                                </Link>
                                <Link to={""} target='_blank'>
                                    <BsTwitterX/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default OurTeam