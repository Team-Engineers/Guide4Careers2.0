import hero from "../../assets/images/home/Vector (1).png";

const Hero1 = () => {
    return (
        <div>
            <div className='md:min-h-[50vh] min-h-[40vh] relative  flex justify-center items-center ' >
                <img className='w-screen  -z-0' src={hero} alt="" />
                <h1 className='flex absolute justify-center mb-20  z-10 font-bold text-3xl items-center'>
                    Career Guidance
                </h1>
                <h1 className='flex absolute justify-center  md:bottom-[8px] bottom-[20px]  text-center z-10 font-bold text-xl items-center'>
                    What new areas of expertise can I be trained on to be more helpful?
                </h1>
            </div>

        </div>
    )
}

export default Hero1
