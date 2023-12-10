import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HOmeSectionCarousel from '../../components/HomeSectionCarousel/HOmeSectionCarousel'
import { useSelector } from 'react-redux';

const HomePage = () => {

  const products = useSelector((state)=>state.allProducts.products);
  const jewelryProducts = products.filter(product => product.category === 'jewelery');
  const electronicsProducts = products.filter(product => product.category === 'electronics');
  const menProducts = products.filter(product => product.category === `men's clothing`);
  const womenProducts = products.filter(product => product.category === `women's clothing`);
  

  return (
    <div>
      <MainCarousel/>
      <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
        <HOmeSectionCarousel data={products} sectionName={`Best Products`}/>
        <HOmeSectionCarousel data={electronicsProducts} sectionName={`Electronics Products`}/>
        <HOmeSectionCarousel data={jewelryProducts} sectionName={`Jewelery Products`}/>
        <HOmeSectionCarousel data={menProducts} sectionName={`Men's Clothing`}/>
        <HOmeSectionCarousel data={womenProducts} sectionName={`Women's Clothing`}/>
        
      </div>
    </div>
  )
}

export default HomePage