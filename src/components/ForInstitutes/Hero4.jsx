import React, { useState, useEffect, useRef } from 'react';
import { FaThumbsUp, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Mousewheel,Navigation } from 'swiper/modules';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const services = [
    {
        description: "Feeling heard, not judged Guide4careers was a breath of fresh air. Talking to my counsellor online felt so much easier than traditional therapy.",
        img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "hello",
        class: "12th",
        rating: 4.5
    },
    {
        description: "Convenience that fits my life. The online format allowed me to schedule sessions that fit my busy schedule, and the guidance I received has been invaluable.",
        img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        class: "11th",
        rating: 4.0
    },
    {
        description: "Feeling heard, not judged Guide4careers was a breath of fresh air. Talking to my counsellor online felt so much easier than traditional therapy.",
        img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Smith",
        class: "10th",
        rating: 3.5
    },
    {
        description: "Convenience that fits my life. The online format allowed me to schedule sessions that fit my busy schedule, and the guidance I received has been invaluable.",
        img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Michael Brown",
        class: "9th",
        rating: 5.0
    },
    {
        description: "Feeling heard, not judged Guide4careers was a breath of fresh air. Talking to my counsellor online felt so much easier than traditional therapy.",
        img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Emily Johnson",
        class: "8th",
        rating: 4.5
    },
    {
        description: "Convenience that fits my life. The online format allowed me to schedule sessions that fit my busy schedule, and the guidance I received has been invaluable.",
        img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "David Wilson",
        class: "7th",
        rating: 3.0
    }
];



const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key={fullStars} />);
    }

    return stars;
};

const Hero4 = () => {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setSlidesPerView(4);
        } else if (window.innerWidth >= 768) {
          setSlidesPerView(3);
        } else if (window.innerWidth >= 550) {
            setSlidesPerView(2);
        } else {
          setSlidesPerView(1);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='w-full'>
            <div>
                <h1 className="text-[1.5rem] font-bold mb-10 md:mb-20 mbl:text-2xl text-center text-black relative">
                    Testimonials
                </h1>
            </div>
            <Swiper
                direction={'horizontal'}
                slidesPerView={slidesPerView}
                spaceBetween={30}
                mousewheel={{ invert: false, forceToAxis: true }}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                className="mySwiper p-4"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide className='mr-4' key={index}>
                        <div className={`py-8 p-3 mb-4  shadow-2xl shadow-[#0038C7]  min-h-[340px]  `}>
                            <div className='flex justify-between items-center w-full'>
                                <h1 className='m-2 flex text-[#3E66DF]'>
                                    {generateStars(service.rating)}
                                </h1>
                                <h1 className='m-2 flex justify-center font-medium items-center gap-2'>
                                    <span className='bg-[#3E66DF] text-white text-[10px] flex items-center justify-center h-[18px] w-[18px] rounded-full'> <FaThumbsUp/> </span>Testimonials
                                </h1>
                            </div>
                            <h1 className=' mt-10  '>"{service.description}"</h1>
                            <div className="flex bottom-0 pb-10 absolute p-4  flex-row ">
                                <img
                                    src={service.img}
                                    alt={""}
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <div className="flex flex-col -mt-2">
                                    <h5 className="text-xl whitespace-nowrap font-bold">{service.name}</h5>
                                    <h6 className="text-sm">{service.class} class</h6>
                                </div>
                            </div>
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

export default Hero4;
