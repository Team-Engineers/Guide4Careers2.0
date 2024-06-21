import React, { useState } from 'react';
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useGoogleLogin } from '@react-oauth/google';
import image1 from "../assets/images/home/signup.svg"
import { Link } from 'react-router-dom';
import gimage from "../assets/images/home/google.png"
import Rectangle from "../assets/images/home/Rectangle.png"
import logo from "../assets/images/Logo.png"

const Signup = () => {
    const signin = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState('');
    const [showEmailInput, setShowEmailInput] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleGoogleLogin = async (credentialResponse) => {

    };

    const handleGoogleLoginError = (error) => {
    };

    const handleSignUpWithEmail = () => {
        setShowEmailInput(true);
    };

    return (
        <div className='relative'>
            <img className='absolute w-screen h-screen md:w-1/2' src={Rectangle} alt="" />
            <div className='flex md:flex-row relative z-10  max-w-[1280px] mx-auto flex-col  min-h-screen items-center justify-between'>
                <Link to={"/"}>
                    <div className="flex justify-center items-center w-full h-full">
                        <img className='max-w-[100px] left-4 md:left-20 top-0 absolute m-4' src={logo} alt="" />
                    </div>
                </Link>
                <Link to={"/"}>
                <h className='md:right-20 shadow-xl hover:scale-105 transition-all duration-300 border p-3 px-6 rounded-3xl right-4 font-medium top-0 absolute m-4' src={logo} alt="">Home</h>
                </Link>

                <div className=' md:w-1/2 w-screen min-h-screen flex pt-5 justify-center h-full items-center'>
                    <div className={`font-normal flex justify-between  flex-col  ${showEmailInput ? "" : "h-[300px]"}  max-md:mx-5 w-full md:w-2/3 text-[#657597]`}>
                        <h1 className={`font-medium  ${showEmailInput ? "mt-8" : "max-md:mt-10"} text-black md:text-4xl text-3xl max-md:text-center max-md:mt-12 md:whitespace-nowrap`}>Create an account</h1>
                        {showEmailInput && (
                            <>
                                <h1 className='text-[#929AAA] md:mt-2 my-3 md:mb-1 font-normal max-md:text-sm  max-md:text-center  '>Let’s get started with your 30 day free trial.</h1>
                                <div className="flex mb-1 flex-col gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input className="border bg-[#F6F7FB]  border-[#657597] rounded-md border-solid font-normal md:px-3 md:p-1  max-md:p-3" type="text" placeholder='imane23@gmail.com' name="" id="email" />
                                </div>
                                <div className="flex max-md:my-2 mb-1 flex-col gap-2">
                                    <label htmlFor="class">Class</label>
                                    <input className="border bg-[#F6F7FB]  border-[#657597] rounded-md border-solid  font-normal md:px-3 md:p-1   p-3" type="text" placeholder='10' name="" id="class" />
                                </div>
                                <div className="flex relative max-md:my-2 md:mb-1 flex-col gap-2">
                                    <label htmlFor="password">Password</label>
                                    <div className="relative">
                                        <input
                                            className="border w-full bg-[#F6F7FB] max-md:p-3  px-3 border-[#657597] rounded-md font-normal border-solid p-1 pr-10"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={handlePasswordChange}
                                            name="password"
                                            placeholder='password'
                                            id="password"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-3 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <IoIosEye />
                                            ) : (
                                                <IoIosEyeOff />
                                            )}

                                        </button>
                                    </div>
                                </div>
                                <div className="flex relative max-md:my-2 md:mb-1 flex-col gap-2">
                                    <label htmlFor="password">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            className="border w-full bg-[#F6F7FB] max-md:p-3   px-3 border-[#657597] rounded-md font-normal border-solid p-1 pr-10"
                                            type={showPassword2 ? "text" : "password"}
                                            value={password}
                                            onChange={handlePasswordChange}
                                            name="password"
                                            placeholder='confirm password'
                                            id="password"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility2}
                                            className="absolute inset-y-0 right-3 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <IoIosEye />
                                            ) : (
                                                <IoIosEyeOff />
                                            )}

                                        </button>
                                    </div>
                                </div>
                                <div className="flex max-md:my-2 md:mb-1 flex-col gap-2">
                                    <label htmlFor="school">School/College Name</label>
                                    <input className="border bg-[#F6F7FB]  border-[#657597] rounded-md border-solid font-normal  md:px-3 md:p-1  max-md:p-3" type="text" name="" placeholder='St Mary’s English High School ' id="email" />
                                </div>
                            </>
                        )}
                        <div className={`w-full max-md:my-2 md:mb-1 ${showEmailInput ? "" : "mb-20"}`}>
                            <button
                                onClick={handleSignUpWithEmail}
                                className={`${showEmailInput ? "" : "my-8"}  p-2 flex justify-center w-full max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem] mt-0 bg-[#3E66DF] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105`}
                            >
                                Sign Up with email
                            </button>
                            {!showEmailInput && (
                                <button
                                    onClick={() => signin()}
                                    className="p-2 justify-center items-center gap-2 border-solid border border-[#657597] flex w-full max-md:mx-auto font-medium rounded-lg text-black mx-auto scale-[80%] mbl:scale-[100%] origin- text-[1rem] mt-0 bg-[#ffffff] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105"
                                >
                                    <img className='max-w-[20px]' src={gimage} alt="" />
                                    Sign Up with Google
                                </button>

                            )}
                            <h1 className={`font-normal ${showEmailInput ? "" : "mt-[30px]"} text-xs md:mt-3 mt-5 text-center`}>Already have an account? <Link to={"/login"} className="text-[#3284FF] text-xs font-normal">Sign In</Link> </h1>

                        </div>
                    </div>
                </div>
                <div className='md:min-h-screen max-md:hidden  bg-white w-full md:w-1/2 flex justify-center items-center'>
                    <img className='flex justify-center h-full items-center mx-auto max-w-[80vw] md:max-w-[400px]' src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Signup