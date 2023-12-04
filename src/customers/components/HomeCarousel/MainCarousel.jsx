import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer' role="presentation" src={item.image} alt='' />);

  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={1500}
    />
  )
}

export default MainCarousel
