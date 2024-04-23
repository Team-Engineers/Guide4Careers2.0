import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviewcard = () => {
    const gradientColor = "rgba(195, 211, 255, 0.4)";
    const gradientStyle = {
      background: `linear-gradient(to right, ${gradientColor}, white)`, // Adjusted to left-to-right gradient
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center mt-0 sm:-mt-0 md:-mt-0 md:mb-0 z-10">
        <h1 className="text-4xl font-bold mb-10">Our Success Stories!</h1>
      </div>
      <div style={gradientStyle}>
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={index}
                  className="bg-white flex items-center rounded-xl p-4 shadow-md"
                >
                  <div className="flex flex-col items-left space-x-1 mb-6">
                    <div className="flex items-left space-x-1 mb-6 text-blue-500 ">
                      {Array.from({ length: Math.floor(d.rating) }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                      {d.rating % 1 !== 0 && <FaStarHalfAlt />}
                    </div>
                    <p className="text-black text-base mb-2">{d.description}</p>
                  </div>

                  <div className="flex flex-row">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div className="flex flex-col -mt-2">
                      <h5 className="text-xl font-bold">{d.name}</h5>
                      <h6 className="text-sm">{d.class}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/77a6/2407/3ed39ebd7f349c74e281d671ea53c5c6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H06QzaiB0DJmjCe8UIn3aWWMxV-sEKOuRDOtTx82sYolYOpj36nmS2O-g-NXVMo32-kx2SxEDpi1z9ZtMiE4QPp0iX8sVvNYxmcSV2lWP4AqtnoOQDEbAa5ejK~rFLPUEWxdSHnASM8vdbdES7rtLUAYTxcNXeoIKgGIfpCwXO5RgEg6rmK-R3dZj1L4zWlopFut3Nf3JVhackuCMTCFBRMWcYE5kUXPi0GGWrCXjiryPsh9fUSfLq96sGFVO4bK1~iCIL9hNy5-QV6b3Jssn3puyNI-nWfVPLn6MqlLXfAtoDON5D-MS91t0tovwlXtMzzN1g0D4bpRJQpY7S3GKg__",
    name: "Lana Bernier",
    class: "11th class",
    description:
      '"Feeling heard, not judged Guide4careers was a breath of fresh air. Talking to my counsellor online felt so much easier than traditional therapy."',
    rating: 5,
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/4928/2328/3b8e8ed23534774c67625834e977d9c1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ixb1CYVb8QbczB0AjzSjBaJnxlkE~MLL-ISbIk4ZYfgDntgoS1uO8k8y~8I8hkH-LGYNLEdR9VVO9YVc47b2FoqcY6quQOlp85SjSRXs-KLloeoZX9saT25dsm5ujkkQRlbmvyFRy2447-M73j1r~V3qDPFJwuf-ZERfHr7NNjWlC5xwZN-1j0s391PjWB7fcZ9gdBqfsykrmBmUCT0GAsXS-TdvJktbWggcwqvyTcGURRabD2cN2s9KE~PIrmdqMtg23ftw-WSddZ1yEgDFVhFyFfislPbArWnUPj8A0dd~SzF~iDHMgqxg5bewse3H48iKsqctirxP~3XUz6-Myw__",
    name: "Mrs. Van Hartmann",
    class: "10th class",
    description: `"Making progress, one step at a time. I wasn't sure what to expect with online counselling, but it's been amazing! My therapist at Guide4careers is fantastic.  I'm finally feeling like I'm making progress." `,
    rating: 5,
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/dff7/df7f/81e6a0cc10f131350c1e35a972331d0d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bcPIFCWUGBU6fOykdvWq-XHWi~xldQGIrLeD0ys2OMg9nCgxd0AKQF4c0Ci9mz3pe6FYFyc2V7QnE7h-6WfIIo15wGts0DKjLpDy4WWlJIRcEshmrJ7v1WH0VYNdkNs4vkJsHtYt2HJLerGlC9WoqUpCPAnzssc3WYonG0SKP9Iu~dOPzBJSUcc7Zsotg8cCTkUzGiMeXbLW5In5GfqRs9DmPnffebg3hwbWqWeK4m1v7rOQLRWCBXMemZgXHa2sr4NIGrmhJTPX1qM4ko7~itEI9Zu4rCKujmaI05ZgDVmVRRtohVEE8XtMaNA7P5nYy7xOJqAkpB8HTzC4YIty1g__",
    name: "Philip Deckow",
    class: "12th class",
    description:
      '"Convenience that fits my life. The online format allowed me to schedule sessions that fit my busy schedule, and the guidance I received has been invaluable."',
    rating: 5,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anshi",
    class: "11th class",
    description: ` "Taking steps forward, each session brings new clarity. Initially uncertain about online therapy, I've been pleasantly surprised! The counselor at Guide4careers has been instrumental in my journey. I can feel myself moving forward and gaining new insights with each session." `,
    rating: 4.8,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1580067644090-a03da9d1e360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hardy",
    class: "12th class",
    description: ` "I've been making steady strides forward, one session at a time. Going into online therapy with some skepticism, I've been pleasantly impressed! My counselor at  has truly made a difference. I'm starting to see real progress and feel more optimistic about the future." `,
    rating: 5,
  },
];

export default Reviewcard;
