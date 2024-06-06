import React, { useState } from 'react';
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useGoogleLogin } from '@react-oauth/google';
import image1 from "../assets/images/home/login.png"
import { Link } from 'react-router-dom';
import gimage from "../assets/images/home/google.png"
import logo from "../assets/images/Logo.png"
import Rectangle from "../assets/images/home/Rectangle.png"
const Login = () => {
    const signin = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
    });
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleGoogleLogin = async (credentialResponse) => {

    };

    const handleGoogleLoginError = (error) => {
    };
    return (
        <div className='relative'>
            <img className='absolute h-screen w-screen md:w-1/2' src={Rectangle} alt="" />
            <div className='flex   relative md:flex-row  max-w-[1280px] mx-auto flex-col  min-h-screen items-center justify-between'>
                <Link  to={"/"}>
                    <div className="flex justify-center z-10 items-center w-full h-full">
                        <img className='max-w-[100px] z-20  md:left-20 top-0 absolute m-4' src={logo} alt="" />
                    </div>
                </Link>
                <div className=' w-[90vw]    md:w-1/2 relative z-10 max-md:mx-3   min-h-screen flex justify-center h-full items-center'>
                    <div className="font-normal w-full md:w-2/3 text-[#657597]">
                        <h1 className='font-medium text-black text-3xl max-md:text-center md:text-4xl'>Welcome Back </h1>
                        <h1 className='my-4 text-[#929AAA] font-normal max-md:text-center  max-md:text-sm '>Welcome Back! Please enter your details</h1>
                        <div className="flex my-2 flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input className="border bg-[#F6F7FB]  border-[#657597] rounded-md border-solid p-2" type="text" placeholder='xyz@mail.com' name="" id="email" />
                        </div>
                        <div className="flex relative my-2 flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    className="border w-full bg-[#F6F7FB]  border-[#657597] rounded-md border-solid p-2 pr-10"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    name="password"
                                    id="password"
                                    placeholder='password'
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
                        <div className='my-4 flex justify-between items-center'>
                            <label className='flex   gap-2 items-center text-xs font-normal' htmlFor="check">
                                <input className='bg-[#F6F7FB]' type="checkbox" name="" id="" />  Remember me
                            </label>
                            <Link className="text-[#3284FF] text-xs font-normal">Forget Password</Link>
                        </div>
                        <button className="p-2 max-md:mb-3 flex justify-center w-full max-md:mx-auto font-medium rounded-lg text-white shadow-md mx-auto shadow-[#00000095] scale-[80%] mbl:scale-[100%] origin- text-[1rem]   mt-0 bg-[#3E66DF] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                            Sign in
                        </button>
                        <button onClick={() => signin()} className="p-2 justify-center items-center gap-2  border-solid border border-[#657597] flex  w-full max-md:mx-auto font-medium rounded-lg text-black  mx-auto scale-[80%] mbl:scale-[100%] origin- text-[1rem]   mt-0 bg-[#ffffff] cstmr:mt-4 hover:text-white hover:bg-black transform transition-transform hover:scale-105">
                            <img className='max-w-[20px]' src={gimage} alt="" />
                            Sign in with Google
                        </button>
                        <h1 className='font-normal text-xs mt-4  text-center'>Don’t have an account? <Link to={"/signup"} className="text-[#3284FF] text-xs font-normal">Sign Up</Link> </h1>
                    </div>
                </div>
                <div className='md:min-h-screen  w-1/2 flex justify-center items-center'>
                    <img className='flex justify-center h-full items-center  mx-auto max-w-[300px] md:max-w-[400px]' src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login