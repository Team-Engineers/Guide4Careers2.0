// CardData2.js

import React from "react";
import WaveSVG from "../assets/GradientBackground2";
import Card2 from "../assets/Card2";
import illus1 from "../assets/images/whyChooseUs/illus1.svg";
import illus2 from "../assets/images/whyChooseUs/illus2.svg";
import illus3 from "../assets/images/whyChooseUs/illus3.svg";
import illus4 from "../assets/images/whyChooseUs/illus4.svg";
import illus5 from "../assets/images/whyChooseUs/illus5.svg";
import illus6 from "../assets/images/whyChooseUs/illus6.svg";

const CardData2 = () => {
  return (
    <div className="relative flex flex-col justify-center    ">
      {/* Content within the background */}
      <div className="flex justify-center items-center flex-col text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Why Choose Us?</h1>
      </div>

      {/* Container for Cards */}
      <div className="relative z-10 h-full">
        <div className="flex justify-center items-center cstmr:h-[35rem]  md:mx-12 cstmr:max-h-[35rem]">
          <div className="flex flex-col cstmr:flex-row gap-8 max-w-4xl p-4 h-full">
            <div className="flex flex-col  gap-8">
              <Card2
                description="Enable students to identify their best-fit career with our world-class career assessment and personalised guidance."
                imageUrl={illus1}
                bgColor="indigo-400"
                tailwindStyle=" bg-indigo-400  w-[80vw] md:w-[13rem]  "
              />
              <Card2
                description="Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy"
                imageUrl={illus2}
                bgColor="red-300"
                tailwindStyle=" bg-red-300  w-[80vw] md:w-[13rem] "
              />
            </div>
            <div className="flex flex-col gap-8">
              <Card2
                description="Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs."
                imageUrl={illus3}
                bgColor="indigo-400"
                tailwindStyle=" bg-indigo-400   w-[80vw] md:w-[13rem] "
              />
              <Card2
                description="Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling"
                imageUrl={illus4}
                bgColor="red-300"
                tailwindStyle=" bg-red-300   w-[80vw] md:w-[13rem] "
              />
            </div>
            <div className=" flex flex-col gap-8">
              <Card2
                description="Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program."
                imageUrl={illus5}
                bgColor="indigo-400"
                tailwindStyle=" bg-indigo-400  w-[80vw] md:w-[13rem] "
              />
              <Card2
                description="Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance & counselling practice"
                imageUrl={illus6}
                bgColor="red-300"
                tailwindStyle=" bg-red-300  w-[80vw] md:w-[13rem] "
              />
            </div>
          </div>
        </div>
      </div>
      {/* Wave Background */}
    </div>
  );
};

export default CardData2;
