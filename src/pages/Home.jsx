import ContactForm from "../components/ContactForm";
import Content from "../components/Content";
import CustomerService from "../components/CustomerService";
import FAQ from "../components/FAQ";
import GetReport from "../components/GetReport";
import ParticleWrapper from '../components/ParticleWrapper';
import CardData from "../components/cardData";
import CardData2 from "../components/cardData2";
import Reviewcard from "../components/reviewcard";


const Home = () => {
  return (
    <>
      <div className=''>
        <ParticleWrapper />
      </div>
      {/* <div className='relative h-[100px]'>
      
    </div> */}
      <div className=''>
        <Content />
      </div>
      <div className='bg-white relative lg:pb-[80px] '>
        <CardData />
      </div>
      <div className='bg-white relative'>
        <CardData2 />
      </div>
      <div className='bg-white relative'>
        <GetReport />
      </div>
      <div className='bg-white relative'>
        <Reviewcard />
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