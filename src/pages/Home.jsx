import React from "react";
import Content from "../components/Content";
import CardData from "../components/cardData";
import CardData2 from "../components/cardData2";
import GetReport from "../components/GetReport";
import Reviewcard from "../components/reviewcard";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <div>
        <Content />
      </div>
      <div>
        <CardData />
      </div>
      <div>
        <CardData2 />
      </div>
      <div>
        <GetReport />
      </div>
      <div>
        <Reviewcard />
      </div>
      <div>
        <ContactForm />
      </div>

      <FAQ />
    </>
  );
};

export default Home;
