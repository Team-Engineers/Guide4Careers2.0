import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
const topics = [
  {
    id: 1,
    name: "Numerical Reasoning",
    questions: [
      {
        question: "If 3x + 5 = 20, what is the value of x?",
        options: ["3", "5", "7", "10"],
        correctAnswer: "5",
      },
      {
        question:
          "A company sold 25% of its products at a discount of 20%. What percentage of the original price did the company receive for these products?",
        options: ["75%", "80%", "85%", "90%"],
        correctAnswer: "80%",
      },
      {
        question:
          "If the ratio of boys to girls in a class is 3:2, and there are 15 boys, how many girls are there?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "10",
      },
    ],
  },
  {
    id: 2,
    name: "Verbal Reasoning",
    questions: [
      {
        question:
          'Choose the word that is most nearly opposite in meaning to "diligent".',
        options: ["Lazy", "Industrious", "Hardworking", "Persistent"],
        correctAnswer: "Lazy",
      },
      {
        question: 'Which of the following is the best synonym for "fickle"?',
        options: ["Consistent", "Changeable", "Stable", "Reliable"],
        correctAnswer: "Changeable",
      },
      {
        question:
          'Choose the word that best completes the sentence: "The teacher was ______ when grading the papers."',
        options: ["Lenient", "Strict", "Harsh", "Biased"],
        correctAnswer: "Strict",
      },
    ],
  },
  {
    id: 3,
    name: "Logical Reasoning",
    questions: [
      {
        question:
          "If all cats are animals, and some animals are mammals, does it follow that some cats are mammals?",
        options: ["Yes", "No", "Maybe", "Not enough information"],
        correctAnswer: "Yes",
      },
      {
        question:
          "If today is Saturday, what day will it be three days from now?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Tuesday",
      },
      {
        question:
          "If X is greater than Y, and Y is greater than Z, which of the following must be true?",
        options: [
          "X is greater than Z",
          "X is less than Z",
          "X is equal to Z",
          "Not enough information",
        ],
        correctAnswer: "X is greater than Z",
      },
    ],
  },
  {
    id: 4,
    name: "Spatial Reasoning",
    questions: [
      {
        question:
          "Which of the following shapes can be formed by folding a square piece of paper in half?",
        options: ["Circle", "Rectangle", "Triangle", "Rhombus"],
        correctAnswer: "Rectangle",
      },
      {
        question:
          "If you rotate a cube 90 degrees clockwise, what shape will you see from the top?",
        options: ["Square", "Rectangle", "Triangle", "Hexagon"],
        correctAnswer: "Square",
      },
      {
        question:
          "Which of the following shapes is not a three-dimensional shape?",
        options: ["Cube", "Sphere", "Pyramid", "Circle"],
        correctAnswer: "Circle",
      },
    ],
  },
  {
    id: 5,
    name: "Personality Test",
    questions: [
      {
        question: "You are more of a:",
        options: ["Leader", "Follower", "Independent", "Team player"],
        correctAnswer: "Leader",
      },
      {
        question: "When faced with a difficult situation, you tend to:",
        options: ["Take charge", "Seek help", "Avoid it", "Analyze it"],
        correctAnswer: "Take charge",
      },
      {
        question: "You prefer working:",
        options: [
          "Alone",
          "In a team",
          "With clear instructions",
          "With flexibility",
        ],
        correctAnswer: "Alone",
      },
    ],
  },
  {
    id: 6,
    name: "Situational Judgements Tests",
    questions: [
      {
        question:
          "You notice a coworker is struggling with a task. What would you do?",
        options: [
          "Offer to help",
          "Let them figure it out",
          "Ask your manager for advice",
          "Ignore it",
        ],
        correctAnswer: "Offer to help",
      },
      {
        question:
          "A client is being unreasonable and demanding. How would you respond?",
        options: [
          "Remain calm and try to resolve the issue",
          "Match their tone and argue back",
          "Escalate the issue to your manager",
          "Apologize and agree to their demands",
        ],
        correctAnswer: "Remain calm and try to resolve the issue",
      },
      {
        question:
          "You made a mistake that impacted a project. What would you do?",
        options: [
          "Own up to the mistake and suggest solutions",
          "Blame someone else",
          "Try to cover it up",
          "Wait and see if anyone notices",
        ],
        correctAnswer: "Own up to the mistake and suggest solutions",
      },
    ],
  },
  {
    id: 7,
    name: "Emotional Intelligence",
    questions: [
      {
        question:
          "You are having a disagreement with a coworker. How would you handle it?",
        options: [
          "Raise your voice and argue",
          "Remain calm and listen to their perspective",
          "Walk away and avoid the situation",
          "Involve your manager",
        ],
        correctAnswer: "Remain calm and listen to their perspective",
      },
      {
        question:
          "A team member is feeling stressed and overwhelmed. What would be the best way to support them?",
        options: [
          "Offer to help with their workload",
          "Suggest they take a break",
          "Ignore it, as it's not your problem",
          "Tell them to work harder",
        ],
        correctAnswer: "Offer to help with their workload",
      },
      {
        question:
          "You receive feedback that is critical of your work. How would you respond?",
        options: [
          "Get defensive and argue",
          "Thank them and consider their feedback",
          "Ignore the feedback",
          "Blame others for the issues",
        ],
        correctAnswer: "Thank them and consider their feedback",
      },
    ],
  },
];
const TopicQuestions = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [numAttemptedQuestions, setNumAttemptedQuestions] = useState(0);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempteTopics, setAttempteTopics] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const currentTopic = topics[currentTopicIndex];
  const currentQuestion = currentTopic?.questions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    const updatedSelectedOptions = {
      ...selectedOptions,
      [currentTopicIndex]: {
        ...(selectedOptions[currentTopicIndex] || {}),
        [currentQuestionIndex]: option,
      },
    };

    setSelectedOptions(updatedSelectedOptions);

    const prevOption =
      selectedOptions[currentTopicIndex]?.[currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
      if (prevOption !== option) {
        setNumCorrectAnswers(
          (prevNumCorrectAnswers) => prevNumCorrectAnswers + 1
        );
      }
    } else {
      if (prevOption === currentQuestion.correctAnswer) {
        setNumCorrectAnswers(
          (prevNumCorrectAnswers) => prevNumCorrectAnswers - 1
        );
      }
    }

    const isLastQuestion =
      currentQuestionIndex === currentTopic.questions.length - 1;
    const isAllQuestionsAttempted =
      Object.keys(updatedSelectedOptions[currentTopicIndex] || {}).length ===
      currentTopic.questions.length;

    if (isLastQuestion) {
      if (
        isAllQuestionsAttempted &&
        !attempteTopics.includes(currentTopicIndex)
      ) {
        setAttempteTopics((prevAttempteTopics) => [
          ...prevAttempteTopics,
          currentTopicIndex,
        ]);
      }
    }

    if (!updatedSelectedOptions[currentTopicIndex][currentQuestionIndex]) {
      setNumAttemptedQuestions(
        (prevNumAttemptedQuestions) => prevNumAttemptedQuestions + 1
      );
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentTopic.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (!attempteTopics.includes(currentTopicIndex)) {
        setAttempteTopics((prevAttempteTopics) => [
          ...prevAttempteTopics,
          currentTopicIndex,
        ]);
      }
      if (currentTopicIndex === topics.length - 1) {
        setShowWarning(true);
      } else {
        setCurrentQuestionIndex(0);
        setCurrentTopicIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else if (currentTopicIndex > 0) {
      setCurrentTopicIndex((prevIndex) => prevIndex - 1);
      setCurrentQuestionIndex(
        topics[currentTopicIndex - 1].questions.length - 1
      );
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowWarning(false);
  };

  const hasAttemptedAllTopics = attempteTopics.length === topics.length;
  const passingMarks = 12;
  const hasPassed = numCorrectAnswers >= passingMarks;
  const correctPercentage = (numCorrectAnswers / 21) * 100;
  const incorrectPercentage = (15 / 21) * 100;
  return (
    <div className=" min-h-screen">
      <h1 className="text-2xl font-bold m-4 absolute">PSYCHOMETRIC TEST</h1>
      <div className="flex md:flex-row flex-col-reverse justify-between  items-center ">
        <div className=" md:w-[75%]  border-black m-3  p-3 h-[90%] shadow-2xl border border-solid     bg-gradient-to-b rounded-lg  from-[#D5FFFF] to-[#FFFFFF] md:mr-4">
          {currentQuestion && (
            <div className="flex h-[400px] justify-around flex-col">
              <p className="m-4 font-normal"> <span className="font-bold">Question: </span>{currentQuestion.question}</p>
              <div className="ml-4">
                {currentQuestion.options.map((option) => (
                  <div key={option} className="flex  items-center mb-1">
                    <div
                      className={`w-4 h-4 flex justify-center items-center rounded-full relative border border-gray-400 cursor-pointer ${selectedOptions[currentTopicIndex]?.[
                          currentQuestionIndex
                        ] === option
                          ? "bg-blue-500  "
                          : "bg-white"
                        }`}
                      onClick={() => handleOptionChange(option)}
                    >
                      <div
                        className={`w-3 h-3 flex justify-center items-center absolute rounded-full border border-gray-400 cursor-pointer ${selectedOptions[currentTopicIndex]?.[
                            currentQuestionIndex
                          ] === option
                            ? "bg-blue-500 border-black border "
                            : "bg-white"
                          }`}
                        onClick={() => handleOptionChange(option)}
                      />
                    </div>
                    <span className="ml-2">{option}</span>
                  </div>
                ))}
              </div>
              <div className="m-4 flex max-md:text-sm  justify-between">
                <button
                  className="text-black  bg-[#54BAB9] hover:bg-blue-700 font-bold py-2 px-4 rounded-3xl"
                  onClick={handlePreviousQuestion}
                  disabled={
                    currentTopicIndex === 0 && currentQuestionIndex === 0
                  }
                >
                  Previous
                </button>
                <button
                  className="text-black  bg-[#54BAB9] hover:bg-blue-700  font-bold py-2 px-4 rounded-3xl"
                  onClick={handleNextQuestion}
                >
                  {currentQuestionIndex === currentTopic.questions.length - 1
                    ? "Next Topic"
                    : "Next Question"}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" md:w-[25%] max-md:py-10 relative max-md:gap-3  max-md:px-4 md:pt-[60px] md:pb-[90px] border-l border-black flex md:flex-col max-md:max-w-[100vw] max-md: max-md:overflow-scroll  justify-evenly  p-3 md:min-h-screen bg-gradient-to-b   from-[#D5FFFF] to-[#FFFFFF]">
          {topics.map((topic, index) => (
            <div key={topic.id} className={`flex  items-center mb-2`}>
              <div
                className={`w-4 h-4  rounded border border-gray-400 ${attempteTopics.includes(index) ? "bg-green-500" : "bg-[#D9D9D9]"
                  }`}
              />
              <span className="ml-2   max-md:whitespace-nowrap">{topic.name}</span>
            </div>
          ))}
          <div className="mt-4">
            {isSubmitted && (
              <div>

                <div className="fixed flex justify-center items-center overflow-hidden z-[400] top-0 left-0 w-full h-full backdrop-blur-[5px] bg-[#00000051]">
                  <div className="bg-white flex flex-col gap-2 text-center md:min-w-[400px] border-4 border-solid border-[#5648FC] relative px-8 p-5 rounded-3xl">
                    <h2 className="text-center whitespace-nowrap absolute rounded-lg p-3 px-10 font-medium text-white -top-12 bg-[#5648FC] text-[30px] left-1/2 transform -translate-x-1/2">
                      Result
                    </h2>
                    <p className="text-black text-center font-medium text-[20px]">
                      Attempted Questions {numAttemptedQuestions} out of 21
                    </p>
                    <div className="flex justify-between">
                      <div className="flex justify-center items-center flex-col">
                        <CircularProgressbar
                          value={correctPercentage}
                          text={`${correctPercentage.toFixed(2)}%`}
                          styles={{
                            root: { width: 100 },
                            path: {
                              stroke: numCorrectAnswers < 12 ? "#ff0000" : "#3b933e",
                            },
                            text: { fill: "black" },
                          }}
                        />
                        <p className="font-medium">
                          Your Score: {numCorrectAnswers}
                        </p>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <CircularProgressbar
                          value={incorrectPercentage}
                          text={`${incorrectPercentage.toFixed(2)}%`}
                          styles={{
                            root: { width: 100 },
                            path: { stroke: "#3b933e" },
                            text: { fill: "black" },
                          }}
                        />
                        <p className="font-medium">Passing Score: 12</p>
                      </div>
                    </div>
                    <div>
                      {numCorrectAnswers < 12 ? (
                        <>
                          <h1 className="bg-[#b7bcb8] w-[60%] font-medium text-center rounded flex justify-center mx-auto text-black py-3 p-2">
                            You didn't Pass
                          </h1>
                          <h1 className="font-medium">Better Luck Next Time</h1>
                        </>
                      ) : (
                        <>
                          <h1 className="bg-[#3b933e] w-[60%] font-medium text-center rounded flex justify-center mx-auto text-white py-3 p-2">
                            You Passed
                          </h1>
                          <h1 className="font-medium">
                            Congratulations! Try Next Test
                          </h1>
                        </>
                      )}
                    </div>
                    <div className="flex gap-2 max-md:w-[70%] mx-auto md:flex-row flex-col justify-center  md:justify-between">
                      <button
                        className="border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#FF7468] to-[#FF7468] text-white px-7 p-2"
                        // onClick={() => setShowResultPopup(false)}
                      >
                        Review Test
                      </button>
                      <button
                        className="border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#5648FC] to-[#5648FC] text-white px-7 p-2"
                        onClick={() => window.location.reload()}
                      >
                        Try Again
                      </button>
                      <Link
                        to="/"
                        className="border-none no-underline cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#FF7468] to-[#FF7468] text-white px-7 p-2"
                      >
                        Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="md:absolute max-md:hidden bottom-5 mx-10 md:mx-3 left-0 right-0  text-black  bg-[#54BAB9] hover:bg-blue-700 font-bold py-2 px-4 rounded-3xl"
              onClick={() => setShowWarning(true)}
              disabled={isSubmitted}
            >
              Submit
            </button>
          </div>
        </div>
        <button
          className="absolute md:hidden bottom-5 mx-10 md:mx-3 left-0 right-0  text-black  bg-[#54BAB9] hover:bg-blue-700 font-bold py-2 px-4 rounded-3xl"
          onClick={() => setShowWarning(true)}
          disabled={isSubmitted}
        >
          Submit
        </button>
      </div>
      {showWarning && (
        <div className="fixed   mx-auto bg-[#0000003a] backdrop-blur-[2px] w-screen  inset-0 flex items-center justify-center z-50">
          <div className="bg-white md:w-[50%] max-md:mx-2 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Warning</h2>
            <p className="mb-4 ">
              Are you sure you want to submit your answers? You will not be able
              to change them after submission.
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowWarning(false)}
              >
                Cancel
              </button>
              <button
                className="text-black  bg-[#54BAB9] hover:bg-blue-700 font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicQuestions;
