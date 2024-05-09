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
        <div className='bg-white relative'>
        <h1 className={`text-[1.5rem] font-bold mb-10 md:my-20 mbl:text-4xl text-center text-black relative`}>
        Listen From Our Students!
        </h1>
        <Hero4 style="hidden" />
      </div>  
      <PriceCard/>
      <Higher3/>
      <FAQ/>  
         </div>
  )
}

export default HigherSecondary