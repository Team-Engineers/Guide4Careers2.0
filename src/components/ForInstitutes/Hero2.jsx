import { useEffect, useRef, useState } from 'react';
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import hero3 from "../../assets/images/institute/hero2/Social media.png";
import hero2 from "../../assets/images/institute/hero2/interview.png";
import hero1 from "../../assets/images/institute/hero2/test forms.png";
import hero4 from "../../assets/images/institute/hero2/work project.png";

const services = [
    {
        image: hero1,
        title: "Test Platform",
        description: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
    },
    {
        image: hero2,
        title: "Sessions",
        description: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
    },
    {
        image: hero3,
        title: "Career Fairs",
        description: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
    },
    {
        image: hero4,
        title: "Engagement Platform",
        description: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
    },
    {
        image: hero4,
        title: "Scholarships",
        description: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
    },
    {
        image: hero4,
        title: "Profile Evaluation",
        description: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
    }
];

const Hero2 = () => {
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
            <div className='text-center' >
                <h1 className="text-[1.5rem] font-bold mb-8 md:mb-20 mbl:text-2xl text-center inline-block  custom-underline text-primary relative">
                    Our Services / Approach to help Institutions
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
                className="mySwiper  lg:pl-20 lg:pr-10 md:pb-5"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onMousewheel={handleMouseWheelScroll}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className={`lg:rounded-t-full rounded-3xl max-lg:m-4 py-8 lg:rounded-b-full flex flex-col justify-center items-center shadow-2xl  ${index % 2 === 0 ? 'lg:mt-20 lg:mb-0' : 'lg:mb-20 lg:mt-0'}`}>
                            <img className='max-lg:w-[80px] max-md:my-2' src={service.image} alt={service.title} />
                            <h1 className='font-bold text-2xl text-center '>{service.title}</h1>
                            <h1 className='w-[70%] my-6 text-center'>{service.description}</h1>
                            <div className='bg-black text-white rounded-full p-3'>
                                <Link to={"/home"}>
                                    <FaArrowRightLong />
                                </Link>
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

export default Hero2;
