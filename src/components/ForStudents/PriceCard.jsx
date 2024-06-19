import React from 'react';
import tick from "../../assets/images/tick.svg"
const plans = [
  {
    name: 'Preview',
    price: 'Free',
    title: 'Orientation Style Assessment',
    features: [
      { available: true },
      { available: false },
      { available: false },
    ],
  },
  {
    name: 'Learn',
    price: 'Rs 2400',
    title: 'Stream Assessment',
    features: [
      { available: true },
      { available: true },
      { available: false },
    ],
  },
  {
    name: 'Explore',
    price: 'Rs 9400',
    title: 'Stream Assessment + Counselling',
    features: [
      { available: true },
      { available: true },
      { available: true },
    ],
  },
];

const PricingTable = () => {
  return (
    <div className="max-w-[1280px] px-2 md:px-10 mx-auto py-8">
      <div className='text-center'>
        <h1 className=' mb-24 relative inline-block  custom-underline text-3xl font-bold text-[#3E66DF]'>
          Planning & Pricing
        </h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 ">
        <div className="lg:text-sm max-md:hidden ">
        <div className='border-dashed h-[200px] max-lg:leading-[2vw] pt-10 lg:pt-24 p-4 border-b-2 border-yellow-500' >
        <h3 className="text-lg flex  items-center gap-2 font-bold mb-2">
             <span>Compare plans</span> 
             <span className='border-2 text-[16px]  px-2 p-1 font-medium  rounded-3xl'>40% Off</span>
              </h3>
            <p1 className="text-[#858BA0] mb-2">Choose your plan according to your comfort</p1>
          </div>
          <div className=' border-dashed dash  p-4 h-[110px] max-lg:leading-[2vw]  border-b-2 border-yellow-500  '>
            <h4 className="text-[17px] font-bold mb-0 lg:mb-2">Stream Treatment</h4>
            <p1 className="text-black lg:text-base text-xs mb-4">4-dimensional stream assessment with top stream recommendations.</p1>
          </div>
          <div className=' border-dashed max-lg:leading-[2vw]  h-[110px] border-b-2 p-4  border-yellow-500  '>
            <h4 className="text-[17px] font-bold mb-2">Career Content</h4>
            <p1 className="text-black  lg:text-base text-[12px] mb-4">Well-researched information on hundreds of career options.</p1>
          </div>
          <div className='p-4 h-[110px] max-lg:leading-[2vw] '>
            <h4 className="text-[17px] font-bold mb-2 ">Career Counselling</h4>
            <p1 className="text-black lg:text-base text-xs  mb-4">Face-to-face counselling sessions and guidance from career experts and online support.</p1>
          </div>

        </div>
        {plans.map((plan, index) => (
          <div key={index} className=" border-dashed border-l-2 border-yellow-500  ">
            <div className='h-[200px] border-dashed border-b-2 border-yellow-500 flex flex-col justify-between'>
              <div className='text-center '>
                <h2 className="text-3xl font-bold ">{plan.name}</h2>
                <p1 className="text-sm font-medium mb-4">{plan.title}</p1>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p1 className="text-3xl font-bold mb-4">{plan.price}</p1>
                <button className="bg-black transition-all duration-300 hover:bg-slate-400 hover:text-black text-white py-2 px-4 rounded mb-4">Choose This Plan</button>
              </div>
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={`flex  justify-center h-[110px] items-center py-2 ${idx !== plan.features.length - 1 ? ' border-dashed border-b-2 border-yellow-500' : ''}`}>
                  <span>
                    {feature.available ? (
                      <img src={tick} alt="" />

                    ) : (
                      <div>

                      </div>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
