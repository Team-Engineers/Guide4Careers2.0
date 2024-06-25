import tick from "../../assets/images/secondary/TickBox.png"
import { FaArrowRight } from "react-icons/fa6";

function MainCard({ title, points1, color, text, points2, points3, footer, imagen }) {
    return (
        <div
            className={`${color}   cursor-pointer p-5 max-mbl:w-[70vw] mbl:min-w-[400px] flex flex-col justify-between min-h-[350px] rounded-3xl ${text}`}

        >
            <div className="flex  justify-center gap-2 px-8 items-center">
                <img src={imagen} alt="" />
                <h2 className="font-bold whitespace-nowrap md:text-2xl">{title}</h2>
            </div>
                <p className="flex text-base max-md:text-sm font-medium items-center justify-start"> <img src={tick} alt="" /> {points1}</p>
                <p className="flex text-base max-md:text-sm  font-medium "> <img src={tick} alt="" /> {points2}</p>
                <p className="flex text-base max-md:text-sm  font-medium "> <img src={tick} alt="" /> {points3}</p>
            <h className="flex  text-base max-md:text-sm  font-medium  justify-center items-center gap-4"><p className="text-base max-md:text-sm   font-medium ">{footer}</p> <p><FaArrowRight/></p></h>
        </div>
    );
}

export default MainCard;
