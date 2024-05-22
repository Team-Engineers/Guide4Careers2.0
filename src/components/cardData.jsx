import "../assets/App.css";
import Card from "../assets/Card";
import college from "../assets/images/college.svg";
import illus1 from "../assets/images/empoweringYourFuture/illus1.svg";
import illus2 from "../assets/images/empoweringYourFuture/illus2.svg";
import illus3 from "../assets/images/empoweringYourFuture/illus3.svg";
import highSchool from "../assets/images/highSchool.svg";
import primarySchool from "../assets/images/primarySchool.svg";
const CardData = () => {
  return (
    <>
      <div className="md:pt-20 mb-10 flex flex-col justify-center items-center z-30 relative">
        <div className="flex justify-center  max-md:mx-3 relative md:mt-10 mt-5 md:my-10 items-center flex-col text-center">
          <h1 class="relative inline-block md:text-4xl text-primary text-3xl font-bold mb-8 custom-underline">
            Empowering Your Future is our mission.
          </h1>
          <p className="md:text-xl text-base opacity-90  font-medium text-center">
            <span className="text-primary">Guide4Careers:</span> Expert career counseling navigating you <br /> from high
            school to dream career & beyond.
          </p>
        </div>
        <div className="flex flex-col overflow-hidden w-[105vw] lg:w-[90%] md:min-w-[18rem]  md:flex-row items-center scale-[85%] justify-around relative border-solid border border-[rgb(42,42,42)] rounded-[1rem]">
          <Card
            logoUrl={primarySchool}
            title="Class 9th & 10th"
            description="Guidance for the right combination and subjects (stream selection)"
            imageUrl={illus1}
            buttonText="Explore"
            style="#DAD3FF "
            style2={"#FFFDCB"}
            path={'/secondary'}
          />
          <Card
            logoUrl={highSchool}
            title="Class 11th & 12th"
            description="Expert advice on stream selection and career paths"
            imageUrl={illus2}
            buttonText="Explore"
            style="#FFB4B4"
            style2={"#4A76F6"}
            path={'/higher-secondary'}
          />
          <Card
            logoUrl={college}
            title="College Admissions"
            description="Insights for university entrance exams and applications"
            imageUrl={illus3}
            buttonText="Explore"
            style="#FBF3D5"
            style2={"#AEE2FF"}
            path={'/college'}
          />
        </div>
      </div>
    </>
  );
};

export default CardData;
