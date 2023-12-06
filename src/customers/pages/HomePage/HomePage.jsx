import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HOmeSectionCarousel from '../../components/HomeSectionCarousel/HOmeSectionCarousel'
import { mens_kurta } from "../../../Data/mens_kurta";
import { mensPantsPage1 } from "../../../Data/shoes";
import { dressPage1 } from "../../../Data/women_dress";

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Kurta`}/>
        <HOmeSectionCarousel data={mensPantsPage1} sectionName={`Men's Pants`}/>
        <HOmeSectionCarousel data={dressPage1} sectionName={`Women Dress`}/>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Kurta`}/>
        <HOmeSectionCarousel data={dressPage1} sectionName={`Women Dress`}/>
      </div>
    </div>
  )
}

export default HomePage