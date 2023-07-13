import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/ScrollingProduct.css'
import TempProduct from './TempProduct'

const NextButton = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick} >
      {/* <ArrowForwardIosIcon  style={{color : "white", fontSize : "30px"}} /> */}
      <i className="fa fa-angle-right" style={{ color: "blue", fontSize: "30px" }}></i>

    </div>
  )
}
const PrevButton = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowBackIosIcon style={{ color: "blue", fontSize: "30px" }} /> */}
      <i className="fa fa-angle-left" style={{ color: "blue", fontSize: "30px" }}></i>
    </div>
  )
}


const ScrollingProducts = (props) => {
  const [Product, setProduct] = useState({ product: [] })
  const url = `http://localhost:5000/product/query-fetch?label=${props.category}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setProduct({ product: data })
      })
  },[])
  // console.log(Product)
  return (
    <div className='container p-0'>
      <Slider
        slidesToShow={5}
        nextArrow={<NextButton />}
        prevArrow={<PrevButton />}
      >
        {Product.product.map((e) => {
          return <TempProduct key={e._id} label={e.label} title={e.title} desc={e.description} price={e.price} />
        })}
      </Slider>
    </div>
  )
}

export default ScrollingProducts
