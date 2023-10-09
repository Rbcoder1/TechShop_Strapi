import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offer = () => {

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
    return (
        <div className="mx-2">
            <Slider
                autoplay={true}
                autoplaySpeed={2000}
                nextArrow={<NextButton />}
                prevArrow={<PrevButton />}
            >
                <div className="carousel-item">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/300/image/1defb861e409319b.jpg?q=50" className="d-block w-100" alt="..." style={{ width: "100%", height: "35vh" }} />
                </div>
                <div className="carousel-item">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/300/image/c1fe2517e0386eb2.jpg?q=50" className="d-block w-100" alt="..." style={{ width: "100%", height: "35vh" }} />
                </div>
                <div className="carousel-item">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/300/image/6bd47b2bdcdc710c.jpg?q=50" className="d-block w-100" alt="..." style={{ width: "100%", height: "35vh" }} />
                </div>
            </Slider>
        </div>
    )
}

export default Offer
