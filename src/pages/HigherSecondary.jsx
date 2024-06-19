import React from 'react'
import MainHero from '../components/HigherSecondary/MainHero'
import Higher2 from '../components/HigherSecondary/Higher2'
import Counselors from '../components/Secondary/Counselors'
import Hero4 from '../components/ForInstitutes/Hero4'
import PriceCard from '../components/ForStudents/PriceCard'
import FAQ from '../components/FAQ'
import Higher3 from '../components/HigherSecondary/Higher3'

const HigherSecondary = () => {
  return (
    <div>
        <MainHero/>
        <Higher2/>
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
      <Higher3/>
      <FAQ/>  
         </div>
  )
}

export default HigherSecondary