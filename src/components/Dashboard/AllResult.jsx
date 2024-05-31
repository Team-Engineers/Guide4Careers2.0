import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
const AllResult = () => {
    return (
        <div className=" lg:min-h-screen max-lg:mt-10 lg:mt-4 flex justify-between flex-wrap lg:flex-col" >
            <div className="bg-white flex flex-col gap-2 text-center w-full lg:max-w-[400px]  border-2  border-solid shadow-2xl  relative px-8 p-5 rounded-3xl">
                <h2 className="text-center whitespace-nowrap absolute rounded-lg p-3 px-10 font-medium text-white -top-12 bg-[#5648FC] text-[30px] left-1/2 transform -translate-x-1/2">
                    Your Result
                </h2>
                <p className="text-black text-center font-medium text-[20px]">
                    Attempted Questions 10 out of 21
                </p>
                <div className="flex justify-between">
                    <div className="flex justify-center items-center flex-col">
                        <CircularProgressbar
                            value="55"
                            text={`55%`}
                            styles={{
                                root: { width: 100 },
                                path: {
                                    stroke: 8 < 12 ? "#ff0000" : "#3b933e",
                                },
                                text: { fill: "black" },
                            }}
                        />
                        <p className="font-medium">
                            Your Score: 8
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <CircularProgressbar
                            value="45"
                            text={`45%`}
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
                    <h1 className="bg-[#3b933e] w-[50%] font-medium text-center rounded flex justify-center mx-auto text-white py-3 p-2">
                        Share Result
                    </h1>
                    <h1 className="font-medium my-2">
                        Congratulations! Try Next Test
                    </h1>
                    <button
                        className="border-none cursor-pointer w-[70%] mx-auto shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#5648FC] to-[#5648FC] text-white px-7 p-2"
                        onClick={() => window.location.reload()}
                    >
                        Try Again
                    </button>


                </div>
            </div>
            <div className="bg-white my-4 flex flex-col gap-2 w-full  lg:max-w-[400px]  border-2  border-solid shadow-2xl   relative px-8 p-5 rounded-3xl">
                <h1 className="text-3xl font-medium mb-2">
                    Overall performance
                </h1>
                <div className="flex flex-col text-2xl my-5 gap-4 justify-between">
                    <h1>Computer</h1>
                    <h1>
                        Sales
                    </h1>
                    <h1>
                        Marketing
                    </h1>
                    <h1>
                        Social Media
                    </h1>
                </div>
                <div>
                    <button
                        className="border-none cursor-pointer w-[70%] mx-auto shadow-2xl mb-2 relative flex justify-center items-center rounded-2xl bg-[#54BAB9] overflow-hidden  text-white px-7 p-2"
                        onClick={() => window.location.reload()}
                    >
                        See overall results
                    </button>


                </div>
            </div>
        </div>
    )
}

export default AllResult