import React from 'react'

import Product from '../../Components/Product/Product'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from '../../Components/Category/Category'
function Landing() {
  return (
    <LayOut>
      <CarouselEffect/>
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
