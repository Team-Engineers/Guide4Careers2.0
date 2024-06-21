import React, { useState } from 'react';
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
  const [selectedPlan, setSelectedPlan] = useState(0);

  const PlanTabs = () => (
    <div className="flex justify-around mb-8">
      {plans.map((plan, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-3xl text-xl font-bold ${selectedPlan === index ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setSelectedPlan(index)}
        >
          {plan.name}
        </button>
      ))}
    </div>
  );

  const PlanDetails = ({ plan }) => (
    <div className="border-dashed border-l-2 border-yellow-500">
      <div className='h-[200px] border-dashed border-b-2 border-yellow-500 flex flex-col justify-between'>
        <div className='text-center'>
          <h2 className="text-3xl max-mbl:text-2xl max-mbl:mb-2 font-bold">{plan.name}</h2>
          <p className="text-sm text-center font-medium mb-4">{plan.title}</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className="text-3xl  max-mbl:text-2xl font-bold mb-4">{plan.price}</p>
          <button className="bg-black transition-all duration-300 hover:bg-slate-400 max-mbl:text-sm hover:text-black text-white py-2 px-4 rounded mb-4">Choose This Plan</button>
        </div>
      </div>
      <ul>
        {plan.features.map((feature, idx) => (
          <li key={idx} className={`flex justify-center h-[110px] items-center py-2 ${idx !== plan.features.length - 1 ? 'border-dashed border-b-2 border-yellow-500' : ''}`}>
            <span>
              {feature.available ? (
                <img src={tick} alt="" />
              ) : (
                <div></div>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-[1280px] px-2 md:px-10 pb-14 mx-auto py-8">
      <div className='text-center'>
        <h1 className='mb-24 relative inline-block custom-underline text-3xl font-bold text-[#3E66DF]'>
          Planning & Pricing
        </h1>
      </div>
      <div className="md:hidden">
          <PlanTabs />
        </div>
      <div className="grid md:grid-cols-4 grid-cols-2">
        <div className="lg:text-sm md:col-span-1">
          <div className='border-dashed h-[200px] max-lg:pt-14 lg:pt-24 p-4 max-mbl:px-2  border-b-2 border-yellow-500'>
            <h3 className="text-lg max-mbl:text-[17px] flex items-center mbl:gap-2 font-bold mb-2">
              <span className='max-lg:leading-[16px]'>Compare plans</span> 
              <span className='border-2 lg:text-[16px] text-xs px-2 p-1 font-medium whitespace-nowrap rounded-3xl'>40% Off</span>
            </h3>
            <p className="text-[#858BA0] text-[13px] mb-2 font-normal">Choose your plan according to your comfort</p>
          </div>
          <div className='border-dashed dash max-lg:leading-[5px] max-mbl:p-2 p-4 h-[110px] border-b-2 border-yellow-500'>
            <h4 className="text-[17px] font-bold max-lg:leading-[16px] mb-2">Stream Treatment</h4>
            <p className="text-black lg:text-base text-xs mb-4 font-normal">4-dimensional stream assessment with top stream recommendations.</p>
          </div>
          <div className='border-dashed max-lg:leading-[5px] h-[110px] border-b-2 max-mbl:p-2 p-4 border-yellow-500'>
            <h4 className="text-[17px] font-bold mb-2 max-lg:leading-[16px]">Career Content</h4>
            <p className="text-black lg:text-base text-xs mb-4 font-normal">Well-researched information on hundreds of career options.</p>
          </div>
          <div className='p-4 max-mbl:p-2 h-[110px] max-lg:leading-[5px]'>
            <h4 className="text-[17px] font-bold mb-2 max-lg:leading-[16px]">Career Counselling</h4>
            <p className="text-black lg:text-base text-xs mb-4 font-normal">Face-to-face counselling sessions and guidance from career experts and online support.</p>
          </div>
        </div>
       
        <div className="md:col-span-3 md:grid md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`${index === selectedPlan ? 'block' : 'hidden md:block'}`}>
              <PlanDetails plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;