// CardData2.js

import Card2 from "../assets/Card2";
import studentVector from "../assets/images/studentVector.png";
import illus1 from "../assets/images/whyChooseUs/illus1.svg";
import illus2 from "../assets/images/whyChooseUs/illus2.svg";
import illus3 from "../assets/images/whyChooseUs/illus3.svg";
import illus4 from "../assets/images/whyChooseUs/illus4.svg";
import illus5 from "../assets/images/whyChooseUs/illus5.svg";
import illus6 from "../assets/images/whyChooseUs/illus6.svg";
const CardData2 = () => {
  return (
    <div className="relative flex flex-col justify-center    ">
      <div className="flex justify-center items-center flex-col text-center z-10">
        <h1 className="md:text-4xl text-3xl  font-bold relative inline-block  custom-underline text-[#3E66DF]  mb-10">Why Choose Us?</h1>
      </div>
      <div className="relative z-10 h-full">
        <div className="flex justify-center items-center max-mbl:w-[95vw] max-md:mx-auto lg:h-[35rem]  md:mx-12 lg:max-h-[35rem]">
          <div className="flex flex-col lg:flex-row gap-8  p-4 h-full">
            <div className="flex flex-col mbl:flex-row lg:flex-col  gap-8">
              <Card2
                description="Enable students to identify their best-fit career with our world-class career assessment and personalised guidance."
                imageUrl={illus1}
                heading="Expert Guidance Find your perfect career fit"
                bgColor="indigo-400"
                tailwindStyle="bg-gradient-to-br  from-[#B2A4FF] to-[#483997] "
              />
              <Card2
                description="Enable schools in creating a career guidance ecosystem in sync with the vision of New Educaton Policy."
                imageUrl={illus2}
                bgColor="red-300"
                heading="Transform Career Guidance in Schools Align with the NEP"
                tailwindStyle="bg-gradient-to-br  from-[#FFB4B4] to-[#FF204E] "
              />
            </div>
            <div className="flex flex-col mbl:flex-row lg:flex-col gap-8">
              <Card2
                description="Experience careers virtually, explore our career library & stay informed with blogs & vlogs. Dive into your future!"
                imageUrl={illus3}
                heading="Explore Your Future A World of Career Discovery"
                bgColor="indigo-400"
                tailwindStyle=" bg-gradient-to-br  from-[#FFCCAA] to-[#FF6500] "
              />
              <Card2
                description="Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling."
                imageUrl={illus4}
                bgColor="red-300"
                heading="Educators to Career Coaches Empowering Your Future"
                tailwindStyle="bg-gradient-to-br  from-[#A4CE95] to-[#6196A6]  "
              />
            </div>
            <div className=" flex flex-col mbl:flex-row lg:flex-col gap-8">
              <Card2
                description="Streamline your journey with expert application guidance, scholarship opportunities, and through our internship program."
                imageUrl={illus5}
                heading="Dream College Unlocked Your All-in-One Application Guide"
                bgColor="indigo-400"
                tailwindStyle="bg-gradient-to-br  from-[#ACE2E1] to-[#008DDA] "
              />
              <Card2
                description="Boost your practice with our cutting-edge assessment platform and tech-driven tools."
                imageUrl={illus6}
                bgColor="red-300"
                heading="Empower Educators Next-Gen Career Guidance Solutions"
                tailwindStyle="bg-gradient-to-br  from-[#C4E4FF] to-[#af60b1] "
              />
            </div>
          </div>
          <img className="absolute z-[-1] w-screen" src={studentVector} alt="" />

        </div>
      </div>
    </div>
  );
};

export default CardData2;
