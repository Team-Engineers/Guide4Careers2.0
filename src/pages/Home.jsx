import ContactForm from "../components/ContactForm";
import Content from "../components/Content";
import CustomerService from "../components/CustomerService";
import FAQ from "../components/FAQ";
import Hero4 from "../components/ForInstitutes/Hero4";
import GetReport from "../components/GetReport";
import WayHero from "../components/Home/WayHero";
import CardData from "../components/cardData";
import CardData2 from "../components/cardData2";


const Home = () => {
  return (
    <>
      <div className=''>
        <Content />
      </div>
      <div className='bg-white relative '>
        <CardData />
      </div>
      <CardData2 />
      <div className='bg-white relative'>
        <GetReport />
      </div>
      <WayHero/>
      <div className='bg-white md:h-[90vh] text-center relative'>
        <h1 className={`text-3xl  inline-block mt-5  custom-underline text-[#3E66DF]  font-bold mb-10 md:mb-20 mbl:text-4xl text-center  relative`}>
          Our Success Stories!
        </h1>
        <Hero4 style="hidden" />
      </div>
      {/* <div className='bg-white relative'>
        <ContactForm />
      </div> */}
      <div className='bg-white relative'>
        <FAQ />
      </div>
      <div className='bg-white relative'>
        <CustomerService />
      </div>
    </>
  );
};

export default Home;