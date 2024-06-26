import hero1 from "../../assets/images/institute/hero3/Begumpet.png";
import hero2 from "../../assets/images/institute/hero3/Mayo.png";
import hero3 from "../../assets/images/institute/hero3/Punjab.png";
import hero from "../../assets/images/institute/hero3/welham.png";

const partnerSchools = [
  { image: hero, name: "Welham Girl’s<br/>School, Dehradun", color: "#FDF7C3" },
  { image: hero1, name: "Hyderabad Public<br/>School, Begumpet, Hyderabad", color: "#FFB4B4" },
  { image: hero2, name: "Mayo Girls<br/>College, Ajmer", color: "#B2A4FF" },
  { image: hero3, name: "Punjab Public<br/>School, Punjab", color: "#FFDEB4" }
];

const Hero3 = () => {
  return (
    <div className=' justify-between flex-col flex my-10 md:my-20'>
      <div >
        <div className='text-center gap-2 mbl:flex-row flex-col  flex justify-center items-center md:my-5 mb-10 md:mb-20 text-2xl md:text-3xl font-medium'>
          <div className="relative">
          <h1 className=' inline-block  custom-underline text-[#3E66DF] '>50+ Partner Schools </h1> 
          </div>
          <div className='text-[#00E0FF] max-md:hidden'> | </div>
          <div className='opacity-60 max-mbl:mt-5'>25+ Partner Universities</div>
        </div>
      </div>
      <div className='mx-[40px]'>
        <div className='grid max-w-[1380px]  mx-auto gap-10  justify-center md:grid-cols-2 grid-cols-1 lg:grid-cols-4 text-center'>
          {partnerSchools.map((school, index) => (
            <div key={index} style={{ backgroundColor: school.color }} className={`flex rounded-3xl flex-col justify-between py-3  items-center`}>
              <img className='' src={school.image} alt="" />
              <h1 className='my-3 font-medium ' dangerouslySetInnerHTML={{ __html: school.name }}></h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
