import React from 'react'
import MainHero from '../components/Secondary/MainHero'
import Secondary2 from '../components/Secondary/Secondary2'
import Hero4 from '../components/ForInstitutes/Hero4'
import FAQ from '../components/FAQ'
import PriceCard from '../components/ForStudents/PriceCard'
import Counselors from '../components/Secondary/Counselors'

const Secondary = () => {
  return (
    <div>
        <MainHero/>
        <Secondary2/>
        <Counselors/>
        <div className='bg-white  relative'>
          <div className='text-center'>
          <h1 className={`relative inline-block md:text-4xl text-[#3E66DF]   text-3xl font-bold mb-10 md:my-20 custom-underline`}>
        Listen From Our Students!
        </h1>
          </div>
        <Hero4 style="hidden" />
      </div> 
      <PriceCard/>
      <FAQ/>  
       </div>
  )
}

export default Secondary