import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ custmStyles }) => {
  const faqData = [
    {
      title: "Am I eligible for career guidance after graduation?",
      content:
        "Guide4careers offers career guidance services for students who want to change their career path or want to choose the right course at post graduate level. With Guide4careers psychometric assessment and one-on-one counselling session with career planners, students can choose the right career track for them.",
    },
    {
      title: "How to get career counselling after graduation?",
      content:
        "At Guide4careers, post-graduates seeking career counseling can benefit from our personalized services. We offer one-on-one counseling sessions with experienced career planners and specialized psychometric assessments to help students choose the right career path or postgraduate course. Connect with us today to start planning your successful career journey!",
    },
    {
      title: "When did Webflow was founded?",
      content:
        "Webflow was founded in 2013 by Vlad Magdalin, Sergie Magdalin, and Bryant Chou. They launched the company with the goal of making website design and development more accessible through a visual development platform.",
    },
    {
      title: "Who founded BRIX Templates?",
      content: "BRIX Templates was founded by John Doe and Jane Smith.",
    },
    {
      title: "Is NoCode the future of the web?",
      content:
        "Many believe that NoCode development will play a significant role in the future of web development.",
    },
    {
      title: "Who are the Webflow founders?",
      content:
        "Webflow was founded by Vlad Magdalin, Sergie Magdalin, and Bryant Chou.",
    },
  ];

  const [expandedItem, setExpandedItem] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleItem = (index) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      if (expandedItem === index) {
        setExpandedItem(null);
      } else {
        setExpandedItem(index);
      }
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="text-gray-600 body-font mb-10">
      <div className=" min-w- px-10 py-4 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
          {faqData.map((item, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gradient-to-r h-full from-violet-300 to-violet-200 rounded-lg p-6 flex flex-col"
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    expandedItem === index ? "#e6d3f7" : "#d3adf7",
                }}
              >
                <div
                  className="flex items-center gap-4 justify-between cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <span className="title-font font-medium">{item.title}</span>
                  <span>
                    {expandedItem === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <div
                  className="mt-4"
                  style={{
                    opacity: expandedItem === index ? 1 : 0,
                    maxHeight: expandedItem === index ? "100%" : "0",
                    overflow: "hidden",
                    transition: "opacity 0.3s ease, max-height 0.3s ease",
                  }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
