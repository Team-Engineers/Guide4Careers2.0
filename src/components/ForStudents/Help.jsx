import React from 'react'
import Card from './HelpCard';

import image1 from "../../assets/images/students/image1.png"
import image2 from "../../assets/images/students/image2.png"
import image3 from "../../assets/images/students/image3.png"
import image4 from "../../assets/images/students/image4.png"

const Help = () => {
    const cards = [
        {
          image:image1,
          title:"Unlock Your Future: Choosing the Right Stream",
          description: 'Humanities, Science or Commerce -pick the right stream for you based on your interests & aptitude',
          bgColor:"rgba(178, 164, 255, 1)",
          color: "white"
        },
        {
          image:image3,
          title:"Craft Your Dream Career Profile",
          description: 'Build a holistic profile aligned to your career interests & ambitions with guidance from expert coaches',
          bgColor:"rgba(253, 247, 195, 1)",
          color: "black"
        },
        {
          
          image:image2,
          title:"Your Subjects, Your Future",
          description: 'Learn in detail about all the career options available for your chosen stream and subject combinations',
          bgColor:"rgba(255, 180, 180, 1)",
          color: "white"
        },
        {
          image:image4,
          title:"Dive Deep: Explore Careers with Virtual Experiences",
          description: 'Deep dive into your preferred career domains through virtual career simulations & internships',
          bgColor:"rgba(255, 222, 180, 1)",
          color: "black"
        }
      ];
  return (
        <>
      <div className="flex justify-center relative  items-center flex-col text-center mt-10 sm:mt-10 md:mt-10 md:mb-10 z-[2]">
        <h1 className="text-4xl font-bold  relative inline-block  custom-underline text-primary mb-10">HOW WE HELP</h1>
      </div>
      <div className="grid max-w-[1280px] mx-auto lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 place-items-center ">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} description={card.description} bgColor={card.bgColor} color={card.color} />
      ))}
    </div>
      </>
  )
}

export default Help
