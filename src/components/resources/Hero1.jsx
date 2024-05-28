import hero from "../../assets/images/resources/Vector.png";
import main from "../../assets/images/resources/main.png";

const Hero1 = () => {
    return (
        <div>
            <div className='md:min-h-[80vh] min-h-[40vh] relative  flex justify-center items-center ' >
                <img className='w-screen  min-h-[80vh]  -z-0' src={hero} alt="" />
                <div className="flex mbl:flex-row flex-col  w-full px-5 md:px-20 max-w-[1280px] absolute justify-between items-center  z-10 ">
                    <h1 className='text-[#3D5AF1] text-2xl pb-10 font-bold md:text-3xl max-mbl:text-center items-center'>
                        Unlock Your Potential:<br />
                        <span className="text-black ">Discover your ideal career path!</span>
                    </h1>
                    <img className="md:max-w-[300px] max-w-[250px]" src={main} alt="" />
                </div>
                <h1 className='flex absolute justify-center  max-mbl:mx-2 md:bottom-[8px] bottom-[20px]  text-center z-10 font-bold text-xl items-center'>
                    What new areas of expertise can I be trained <br className="max-mbl:hidden" /> on to be more helpful?
                </h1>
            </div>

        </div>
    )
}

export default Hero1
