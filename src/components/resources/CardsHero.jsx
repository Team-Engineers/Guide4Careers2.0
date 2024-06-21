import { useState } from 'react';
import image1 from "../../assets/images/resources/1.png";
import image10 from "../../assets/images/resources/10.png";
import image11 from "../../assets/images/resources/11.png";
import image12 from "../../assets/images/resources/12.png";
import image13 from "../../assets/images/resources/13.png";
import image14 from "../../assets/images/resources/14.png";
import image15 from "../../assets/images/resources/15.png";
import image16 from "../../assets/images/resources/16.png";
import image2 from "../../assets/images/resources/2.png";
import image3 from "../../assets/images/resources/3.png";
import image4 from "../../assets/images/resources/4.png";
import image5 from "../../assets/images/resources/5.png";
import image6 from "../../assets/images/resources/6.png";
import image7 from "../../assets/images/resources/7.png";
import image8 from "../../assets/images/resources/8.png";
import image9 from "../../assets/images/resources/9.png";
import { Link } from 'react-router-dom';

const cardData = [
    {
        bgColor: 'bg-indigo-300',
        imageUrl: image1,
        title: 'Engineering',
        cardClass: 'h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },
    {
        bgColor: 'bg-indigo-300',
        imageUrl: image2,
        title: 'Computer Application & IT',
        cardClass: ' h-[291.95px]',
        imageClass: 'w-[120px] h-[120px]',
    },
    {
        bgColor: 'bg-indigo-300',
        imageUrl: image3,
        title: 'Sales',
        cardClass: 'h-[168.43px]',
        imageClass: 'w-[100px] h-[100px]',
    },
    {
        bgColor: 'bg-indigo-300',
        imageUrl: image4,
        title: 'Ethical Hacking',
        cardClass: ' h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },

    {
        bgColor: 'bg-rose-300',
        imageUrl: image5,
        title: 'Architecture',
        cardClass: 'relative top-[-80px] h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },


    {
        bgColor: 'bg-rose-300',
        imageUrl: image6,
        title: 'Law',
        cardClass: ' relative top-[-20px] h-[168.43px]',
        imageClass: 'w-[120px] h-[120px]',
    },
    {
        bgColor: 'bg-rose-300',
        imageUrl: image7,
        title: 'Life Science & Environment',
        cardClass: 'relative top-[-140px] h-[290px]',
        imageClass: 'w-[120px] h-[120px]',
    },
    {
        bgColor: 'bg-rose-300',
        imageUrl: image8,
        title: 'Physical Science',
        cardClass: 'relative top-[-80px] h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    }
];
const cardData2 = [
    {
        bgColor: 'bg-yellow-100',
        imageUrl: image9,
        title: 'Merchant Navy',
        cardClass: ' h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },
    {
        bgColor: 'bg-yellow-100',
        imageUrl: image10,
        title: 'Food and Agriculture Org.',
        cardClass: ' h-[291.95px]',
        imageClass: 'w-[100px] h-[100px]',
    },
    {
        bgColor: 'bg-yellow-100',
        imageUrl: image11,
        title: 'Aviation',
        cardClass: ' h-[168.43px]',
        imageClass: 'w-[100px] h-[100px]',
    },

    {
        bgColor: 'bg-yellow-100',
        imageUrl: image12,
        title: 'Medicine',
        cardClass: 'h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },


    {
        bgColor: 'bg-orange-200',
        imageUrl: image13,
        title: 'Animation & Graphics',
        cardClass: ' relative top-[-80px] h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },

    {
        bgColor: 'bg-orange-200',
        imageUrl: image14,
        title: 'Design',
        cardClass: 'relative top-[-20px] h-[168.43px]',
        imageClass: 'w-[100px] h-[100px]',
    },

    {
        bgColor: 'bg-orange-200',
        imageUrl: image15,
        title: 'Math\'s & Statistics',
        cardClass: ' relative top-[-140px] h-[290px]',
        imageClass: 'w-[120px] h-[120px]',
    },
    {
        bgColor: 'bg-orange-200',
        imageUrl: image16,
        title: 'Defense',
        cardClass: 'relative top-[-80px] h-[224.58px]',
        imageClass: 'w-[120px] h-[120px]',
    },
];

const CardsHero = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showCards, setShowCards] = useState(true);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };

    const handleSearchClick = () => {
        setShowCards(true);
    };

    const filteredCardData = cardData.filter((card) =>
        card.title.toLowerCase().includes(searchValue)
    );

    const filteredCardData2 = cardData2.filter((card) =>
        card.title.toLowerCase().includes(searchValue)
    );

    return (
        <div className='max-w-[1300px] min-h-[50vh] mx-auto'>
            <div className="flex flex-col m-2 items-center mt-[50px] max-md:mb-10 justify-center">
                <div className='flex max-md:flex-col mb-10 relative  gap-4 items-center  justify-center  z-10  font-medium text-xl '>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearchChange}
                        className=" px-4 py-2 border border-gray-300 w-[90vw] mbl:w-[60vw] rounded-md"
                    />
                    <button onClick={handleSearchClick} className=' btn-primary right-2 absolute bg-[#3E66DF] rounded-md text-white p-[3px] px-10'>Search</button>
                </div>
                {showCards && searchValue.length != 0 ? (
                    <>
                        {(filteredCardData.length === 0 && filteredCardData2.length === 0) ? (
                            <p>No matching cards found.</p>
                        ) : (
                            <div className='min-h-[80vh]  '>
                                <div className=" grid max-md:grid-cols-2 grid-cols-4 gap-1  md:gap-10 justify-center ">
                                    {filteredCardData.map((card, index) => (
                                        <div
                                            key={index}
                                            className={` h-[200px] w-[200px] max-lg:w-[150px]  max-md:w-[40vw] ${card.bgColor} max-md:h-[200px] max-md:top-0 flex text-center m-1 lg:mx-4 flex-col justify-center items-center  rounded-2xl `}
                                        >
                                            <img
                                                className={` max-w-[80px] mb-3 sm:max-w-[70px] rounded-full `}
                                                src={card.imageUrl}
                                                alt={card.title}
                                            />
                                            <div
                                                className="text-black lg:text-2xl mx-4 font-semibold"
                                            >
                                                {card.title.replace('<br />', '\n')}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className=" grid max-md:grid-cols-2 relative mt-10  grid-cols-4  md:gap-10 justify-center ">
                                    {filteredCardData2.map((card, index) => (
                                        <div
                                            key={index}
                                            className={` h-[200px] w-[200px] max-lg:w-[150px]  max-md:w-[40vw] ${card.bgColor} max-md:h-[200px] max-md:top-0 flex text-center m-1 lg:mx-4 flex-col justify-center items-center  rounded-2xl `}
                                        >
                                            <img
                                                className={` max-w-[80px] mb-3 sm:max-w-[70px] rounded-full `}
                                                src={card.imageUrl}
                                                alt={card.title}
                                            />
                                            <div
                                                className="text-black lg:text-2xl mx-4 font-semibold"
                                            >
                                                {card.title.replace('<br />', '\n')}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    searchValue.length === 0 && (
                        <div className='md:mb-[-150px] '>
                            <div className=" grid max-md:grid-cols-2 grid-cols-4 gap-1  md:gap-10 justify-center ">
                                {cardData.map((card, index) => (
                                    <Link to={`${card.title.replace(/ /g, '_')}`}
                                    key={index}
                                        className={`${card.cardClass} ${card.bgColor}  max-md:h-[200px] max-md:top-0 flex text-center m-1 lg:mx-4 flex-col justify-center items-center  rounded-2xl `}
                                    >
                                        <img
                                            className={` max-w-[80px] mb-3 sm:max-w-[150px] rounded-full `}
                                            src={card.imageUrl}
                                            alt={card.title}
                                        />
                                        <div
                                            className="text-black lg:text-2xl mx-4 font-semibold"
                                        >
                                            {card.title.replace('<br />', '\n')}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className=" grid max-md:grid-cols-2 relative max-md:top-0 top-[-120px] grid-cols-4  md:gap-10 justify-center ">
                                {cardData2.map((card, index) => (
                                    <Link to={`${card.title.replace(/ /g, '_')}`}
                                    key={index}
                                        className={`${card.cardClass} ${card.bgColor}  max-md:h-[200px]  max-md:px-[4.6px]  max-md:top-0 flex text-center m-1 lg:mx-4 flex-col justify-center items-center  rounded-2xl `}
                                    >
                                        <img
                                            className={`max-w-[80px] mb-3 sm:max-w-[150px] rounded-full`}
                                            src={card.imageUrl}
                                            alt={card.title}
                                        />
                                        <div
                                            className="text-black lg:text-2xl mx-4 font-semibold"
                                        >
                                            {card.title.replace('<br />', '\n')}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
export default CardsHero;