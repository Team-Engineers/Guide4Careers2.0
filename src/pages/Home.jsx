import React from "react";
import Content from "../components/Content";
import CardData from "../components/cardData";
import CardData2 from "../components/cardData2";
import GetReport from "../components/GetReport";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import CustomerService from "../components/CustomerService";
import Hero4 from "../components/ForInstitutes/Hero4";


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
      <div className='bg-white relative'>
        <h1 className={`text-[1.5rem] font-bold mb-10 md:mb-20 mbl:text-4xl text-center text-black relative`}>
          Our Success Stories!
        </h1>
        <Hero4 style="hidden" />
      </div>
      <div className='bg-white relative'>
        <ContactForm />
      </div>

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