import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./data"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Carousel.module.css'

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => (
          <img src={imageItemLink} />
        ))}
      </Carousel>
      <div className={styles.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
