import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/Style/ScrollingProduct.css'
import SingleProduct from './SingleProduct';

const NextButton = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick} >
      <i className="fa fa-angle-right" style={{ color: "blue", fontSize: "30px" }}></i>

    </div>
  )
}
const PrevButton = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-angle-left" style={{ color: "blue", fontSize: "30px" }}></i>
    </div>
  )
}

const sliderProperties = {
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  responsive:
    [{
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        contentMode: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        contentMode: false
      }
    }]
}

const ScrollingProducts = (props) => {
  return (
    <div className='p-0'>
      <Slider {...sliderProperties}>
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </Slider>
    </div>
  )
}

export default ScrollingProducts
