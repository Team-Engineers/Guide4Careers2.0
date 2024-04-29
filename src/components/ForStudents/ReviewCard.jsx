import React, { useState } from 'react';
import Slider from 'react-slick';
import ReviewData from './ReviewData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewCardSlider = () => {
  const reviews = [
    {
      name: "Freddie Deckow",
      degree: "BBA, Depauw University",
      testimonial: "“Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.”",
      imageUrl: "https://s3-alpha-sig.figma.com/img/4a6f/04d7/c466a91265844de9184bb99a5e315996?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOqZ7TJXe3fEiHGdhxJru7eUTTzShwd8XSrmq9A~rFMmlUccowfU-1vyzB2b4Cf-xxFl7wmnkqar6mwnM7KuqAT~aA5OxBidWD-q6do2wedaoUDX4Zpoo3I9aOxRkeu5cluWad9-CXWOjF~XBzSH1yGDgwlcOM2cNLeRtmu9vSHRbS9N8Puu2H-yMu6uqVriqCHV~ALLbrBEdZIZJkmV82G1ycINhYUIkwLOx400c1XlA~KNrBH4gFCbh80~2nTJ1ledMQyc5TdFwB4TN3LTIn-AVZlavItfKeICqiC8bxq59gcT2ZFWirIntHnyLEOunntGu14M13qeIM~iIO4-lg__"
    },
    {
      name: "Cameron Lehner",
      degree: "Class 10, Gopalan International School",
      testimonial: "“If you want real marketing that works and effective implementation - mobile app's got you covered.”",
      imageUrl: "https://s3-alpha-sig.figma.com/img/a4e9/e1a3/ceccba680ab397807f9579b2daed2f9c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PrbtKMott9lZkLByKgqjPkMw-Lvwjoi01~UIpkCqPaVt-cSvkXaKTXEdhcepkejnFE7Z3qChXYW~kbAUT-11n8cYRA9cowdwM9cIwBFSkfl0Z~ZiW9cRUAu-x91ikZSaNHlAVGXn9LiLvr3TpkRkvMK6UdKaHW9W~evP~WvXZ8b7EkKg032NQThlzREOsgVwQY5KKBztyp-guK-B3Wm3V6JRJgKg0S6JVB4YtChdnVa528JDtmkr4bh~FRjGVd3lB00I4PXWuEgz6EqT9IARIhxINK~dEUl9oDd7vv1VdvrKXJkjB9xMxJ0BwqyqmQj3bwOZYsGvps69Xo1~a2JUGA__"
    },
    {
      name: "Garry Medhurst",
      degree: "2nd year, Hansraj College",
      testimonial: "“I can't say enough about software. I will refer everyone I know. After using software my business skyrocketed!”",
      imageUrl: "https://s3-alpha-sig.figma.com/img/98b4/e91a/7b4d60b90289785ed80e557c081dcf6a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-oJu2buJKBe7Yzb6zt3Ndd3HCrfWFBm1XijI2tSDFD8J2uzyasm6C~8-u~pwPWtxF93z7XcdIqa0QktjWmhk~IURB5iBCj4QngKPVI8ELpNT4GUcywlheQQXFJvBzz8wssf4ZvfLppgWorn4W6dnZ13FbooAMdUNm73oBQmISWX0Pz3pzrS9QDGezxukJDfjDPm2rPbXC0mRmrxUpvRNwcF7zobvcHbY4wWxqqvo~GyFwCUyKAjX4reIpst0Q5f1zUcScjWltaSUs3joW6MWlZjj7nSps-YIsxV5nTO~GzMY6J~PGimBtFxS46kU7iXQUnCIu3ZXKFj16T7Aw7pfQ__"
    },
    {
        name: "Freddie Deckow",
        degree: "BBA, Depauw University",
        testimonial: "“Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.”",
        imageUrl: "https://s3-alpha-sig.figma.com/img/4a6f/04d7/c466a91265844de9184bb99a5e315996?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOqZ7TJXe3fEiHGdhxJru7eUTTzShwd8XSrmq9A~rFMmlUccowfU-1vyzB2b4Cf-xxFl7wmnkqar6mwnM7KuqAT~aA5OxBidWD-q6do2wedaoUDX4Zpoo3I9aOxRkeu5cluWad9-CXWOjF~XBzSH1yGDgwlcOM2cNLeRtmu9vSHRbS9N8Puu2H-yMu6uqVriqCHV~ALLbrBEdZIZJkmV82G1ycINhYUIkwLOx400c1XlA~KNrBH4gFCbh80~2nTJ1ledMQyc5TdFwB4TN3LTIn-AVZlavItfKeICqiC8bxq59gcT2ZFWirIntHnyLEOunntGu14M13qeIM~iIO4-lg__"
      },
      {
        name: "Cameron Lehner",
        degree: "Class 10, Gopalan International School",
        testimonial: "“If you want real marketing that works and effective implementation - mobile app's got you covered.”",
        imageUrl: "https://s3-alpha-sig.figma.com/img/a4e9/e1a3/ceccba680ab397807f9579b2daed2f9c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PrbtKMott9lZkLByKgqjPkMw-Lvwjoi01~UIpkCqPaVt-cSvkXaKTXEdhcepkejnFE7Z3qChXYW~kbAUT-11n8cYRA9cowdwM9cIwBFSkfl0Z~ZiW9cRUAu-x91ikZSaNHlAVGXn9LiLvr3TpkRkvMK6UdKaHW9W~evP~WvXZ8b7EkKg032NQThlzREOsgVwQY5KKBztyp-guK-B3Wm3V6JRJgKg0S6JVB4YtChdnVa528JDtmkr4bh~FRjGVd3lB00I4PXWuEgz6EqT9IARIhxINK~dEUl9oDd7vv1VdvrKXJkjB9xMxJ0BwqyqmQj3bwOZYsGvps69Xo1~a2JUGA__"
      },
      {
        name: "Garry Medhurst",
        degree: "2nd year, Hansraj College",
        testimonial: "“I can't say enough about software. I will refer everyone I know. After using software my business skyrocketed!”",
        imageUrl: "https://s3-alpha-sig.figma.com/img/98b4/e91a/7b4d60b90289785ed80e557c081dcf6a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-oJu2buJKBe7Yzb6zt3Ndd3HCrfWFBm1XijI2tSDFD8J2uzyasm6C~8-u~pwPWtxF93z7XcdIqa0QktjWmhk~IURB5iBCj4QngKPVI8ELpNT4GUcywlheQQXFJvBzz8wssf4ZvfLppgWorn4W6dnZ13FbooAMdUNm73oBQmISWX0Pz3pzrS9QDGezxukJDfjDPm2rPbXC0mRmrxUpvRNwcF7zobvcHbY4wWxqqvo~GyFwCUyKAjX4reIpst0Q5f1zUcScjWltaSUs3joW6MWlZjj7nSps-YIsxV5nTO~GzMY6J~PGimBtFxS46kU7iXQUnCIu3ZXKFj16T7Aw7pfQ__"
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
    <div className="flex justify-center items-center flex-col text-center mt-10 sm:mt-10 md:mt-10 md:mb-10 z-10">
        <h1 className="text-4xl font-bold mb-10">OUR SUCCESS STORIES!</h1>
      </div>
    <div className="relative ml-16">
      <Slider className="flex justify-center mt-10 mb-10 " {...sliderSettings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <ReviewData
              name={review.name}
              degree={review.degree}
              testimonial={review.testimonial}
              imageUrl={review.imageUrl}
              isActive={index === currentIndex}
            />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default ReviewCardSlider;
