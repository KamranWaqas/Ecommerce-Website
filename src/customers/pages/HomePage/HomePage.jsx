import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HOmeSectionCarousel from '../../components/HomeSectionCarousel/HOmeSectionCarousel'
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Kurta`}/>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Shoes`}/>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Shirts`}/>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Kurta`}/>
        <HOmeSectionCarousel data={mens_kurta} sectionName={`Men's Kurta`}/>
      </div>
    </div>
  )
}

export default HomePage