import React from "react";
import Card from "../assets/Card";
import "../assets/App.css";
import primarySchool from "../assets/images/primarySchool.svg";
import highSchool from "../assets/images/highSchool.svg";
import college from "../assets/images/college.svg";
import illus1 from "../assets/images/empoweringYourFuture/illus1.svg";
import illus2 from "../assets/images/empoweringYourFuture/illus2.svg";
import illus3 from "../assets/images/empoweringYourFuture/illus3.svg";
const CardData = () => {
  return (
    <>
      <div className="pt-8 min-h-[47rem]  max-h-[48rem] cstmr:h-screen flex flex-col justify-center items-center gap-0 cstmr:gap-16 z-30 relative">
        <div className="  flex justify-center relative items-center flex-col text-center">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">
            Empowering Your Future is our mission.
          </h1>

          <p className="md:text-xl text-base opacity-90 max-md:mx-8 font-bold flex justify-center items-center flex-col text-center">
            Guide4Careers: Expert career counseling navigating you from high
            school to dream career & beyond.
          </p>
        </div>

        <div className="flex flex-col w-[90vw] md:w-[80%] min-w-[18rem] max-h-[50rem] cstmr:flex-row items-center scale-[85%] justify-around relative h-[80%] cstmr:h-[50%] border-solid border-4 border-[rgb(200,200,200)] rounded-[1rem]   overflow-hidden">
          <Card
            logoUrl={primarySchool}
            title="Class 9th & 10th"
            description="Guidance for the right combination and subjects (stream selection)"
            imageUrl={illus1}
            buttonText="Explore"
            style="bg-purple-300 "
          />

          <Card
            logoUrl={highSchool}
            title="Class 11th & 12th"
            description="Expert advice on stream selection and career paths"
            imageUrl={illus2}
            buttonText="Explore"
            style="bg-red-300"
          />

          <Card
            logoUrl={college}
            title="College Admissions"
            description="Insights for university entrance exams and applications"
            imageUrl={illus3}
            buttonText="Explore"
            style="bg-yellow-200 "
          />
        </div>
      </div>
    </>
  );
};

export default CardData;
