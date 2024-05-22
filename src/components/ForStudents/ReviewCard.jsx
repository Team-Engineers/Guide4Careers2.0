import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Mousewheel,Navigation,Autoplay } from 'swiper/modules';import ReviewData from './ReviewData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/images/students/testimonials/1.png"
import image2 from "../../assets/images/students/testimonials/2.png"
import image3 from "../../assets/images/students/testimonials/1.png"


const ReviewCardSlider = () => {
  const reviews = [
    {
      rating:5,
      name: "Freddie Deckow",
      degree: "BBA, Depauw University",
      testimonial: "“Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.”",
      imageUrl:image1,
    },
    {
      rating:5,
      name: "Cameron Lehner",
      degree: "Class 10, Gopalan International School",
      testimonial: "“If you want real marketing that works and effective implementation - mobile app's got you covered.”",
      imageUrl:image2,
    },
    {
      rating:5,
      name: "Garry Medhurst",
      degree: "2nd year, Hansraj College",
      testimonial: "“I can't say enough about software. I will refer everyone I know. After using software my business skyrocketed!”",
      imageUrl:image3,
    },
    {
      rating:4.5,
        name: "Freddie Deckow",
        degree: "BBA, Depauw University",
        testimonial: "“Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.”",
        imageUrl:image1,
      },
      {
        rating:5,

        name: "Cameron Lehner",
        degree: "Class 10, Gopalan International School",
        testimonial: "“If you want real marketing that works and effective implementation - mobile app's got you covered.”",
        imageUrl:image2,
      },
      {
        rating:4.5,
        name: "Garry Medhurst",
        degree: "2nd year, Hansraj College",
        testimonial: "“I can't say enough about software. I will refer everyone I know. After using software my business skyrocketed!”",
        imageUrl:image3,
      },
  ];


  const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setSlidesPerView(4);
        } else if (window.innerWidth >= 768) {
          setSlidesPerView(3);
        } else if (window.innerWidth >= 560) {
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
    <>
    <div className="flex   justify-center items-center flex-col text-center mt-10 sm:mt-12 md:mt-10  z-10">
        <h1 className="text-4xl font-bold relative inline-block  custom-underline text-primary mb-10">OUR SUCCESS STORIES!</h1>
      </div>
    <div className="relative py-10 overflow-hidden max-xl:h-screen max-2xl:h-[90vh] max-md:h-full  h-[80vh]  ">
    <Swiper
          direction={'horizontal'}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          mousewheel={{ invert: false, forceToAxis: true }}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Navigation,Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}         
           className="mySwiper  p-4"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >        {reviews.map((review, index) => (
          <SwiperSlide className='md:mr-4 mbl:mx-4' key={index}>
          <ReviewData
              name={review.name}
              rating={review.rating}
              degree={review.degree}
              testimonial={review.testimonial}
              imageUrl={review.imageUrl}
            />
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
    </>
  );
};

export default ReviewCardSlider;
