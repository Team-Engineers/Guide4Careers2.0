import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import { Mousewheel, Navigation, Autoplay } from 'swiper/modules';

import counselor1 from "../../assets/images/secondary/counselor1.png";
import counselor2 from "../../assets/images/secondary/counselor2.png";
import counselor3 from "../../assets/images/secondary/counselor3.png";
import counselor4 from "../../assets/images/secondary/counselor4.png";

import { Link } from 'react-router-dom';

const services = [
    {
        image: counselor1,
        title: "Ana Wilson, Head of",
        description: "“Best product. Ever! Very easy to use. I strongly recommend plateform to every one involved in running a restaurant business!”"
    },
    {
        image: counselor2,
        title: "Mark Churry",
        description: "We've been seeing amazing results already! I can't believe how we ran the company before plateform. Groundbreaking!"
    },
    {
        image: counselor3,
        title: "Dirk Michon",
        description: "Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!"
    },
    {
        image: counselor4,
        title: "Derpina Wickers",
        description: "I am completely blown away! We are growing at a rate that's unprecedented for both the industry and the city!"
    },
    {
        image: counselor1,
        title: "Mark Churry",
        description: "We've been seeing amazing results already! I can't believe how we ran the company before plateform. Groundbreaking!"
    },
    {
        image: counselor4,
        title: "Derpina Wickers",
        description: "I am completely blown away! We are growing at a rate that's unprecedented for both the industry and the city!"
    }
];

const Counselors = () => {
    const swiperRef = useRef(null);

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 850) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 650) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseWheelScroll = (e) => {
        const swiper = swiperRef.current.swiper;
        const isEnd = swiper.isEnd;
        const isBeginning = swiper.isBeginning;

        if (e.deltaY > 0 && isEnd) {
            const parentDiv = e.currentTarget.parentElement;
            parentDiv.scrollBy({ top: parentDiv.clientHeight, behavior: 'smooth' });
        } else if (e.deltaY < 0 && isBeginning) {
            const parentDiv = e.currentTarget.parentElement;
            parentDiv.scrollBy({ top: -parentDiv.clientHeight, behavior: 'smooth' });
        }
    };

    return (
        <div className='w-full max-w-screen  mx-auto'>
            <div>
                <h1 className="text-[1.5rem] max-md:mx-3 font-bold mb-8 md:mb-20 mbl:text-3xl text-center text-black relative">
                    Our Counselors sculpting <br />
                    student success
                    <p className='text-center text-base mt-3'>50+ Counselors with 20+ years of experience in our team <br />
                        who have helped 1 Laksh+ students to kick start their <br />
                        Career Journey.</p>
                </h1>

            </div>
            <Swiper
                direction={'horizontal'}
                slidesPerView={slidesPerView}
                spaceBetween={30}
                mousewheel={{ invert: false, forceToAxis: true }}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Navigation, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper lg:pl-20 lg:pr-10 md:pb-10"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onMousewheel={handleMouseWheelScroll}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className={` max-lg:m-4 shadow-[#cde0ff] min-h-[350px] flex flex-col justify-between py-8 rounded-3xl px-5  shadow-2xl  ${index % 2 === 0 ? 'lg:mt-20 lg:mb-0' : 'lg:mb-20 lg:mt-0'}`}>
                            <img className=' w-[50px] max-md:my-2' src={service.image} alt={service.title} />
                            <h1 className=' my-6 text-center'>"{service.description}"</h1>
                            <h1 className=' text-sm relative opacity-80 text-left '>— {service.title}</h1>

                        </div>
                    </SwiperSlide>
                ))}
                <div className=' md:hidden relative my-10 pb-10'>
                    <div className="swiper-button-prev  pl-10  ">
                        <FaChevronLeft />
                    </div>
                    <div className="swiper-button-next pr-10 ">
                        <FaChevronRight />
                    </div>
                </div>
            </Swiper>

        </div>
    );
};

export default Counselors;
