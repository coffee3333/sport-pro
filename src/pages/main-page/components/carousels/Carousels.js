import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousels.css"

import React from "react";
import Slider from "react-slick";
import CarouselSlide from "./CarouselSlide"


import arrow from './img/arrow.svg'


export default function Carousels() {
    const data = [
        {
            id: 1,
            title: 'Мы едины! Мы за спорт! 1',
            time: '12.05.2021 - 18.05.2021',
            link: 'link',
            img: require("./img/rect.png").default
        },
        {
            id: 2,
            title: 'Мы едины! Мы за спорт! 2',
            time: '12.05.2021 - 18.05.2021',
            link: 'link',
            img: require("./img/rect2.jpeg").default
        },
        {
            id: 3,
            title: 'Мы едины! Мы за спорт! 3',
            time: '12.05.2021 - 18.05.2021',
            link: 'link',
            img: require("./img/rect3.jpeg").default
        }];

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "red"}}
                onClick={onClick}>
                <img src={arrow} alt="arrow"/>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}>
                <img src={arrow} style={{transform: "rotate(180deg)"}} alt="arrow"/>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
        return (
            <div className="carousel__wrapper">
                <Slider {...settings}>
                    {data.map((slide, index) =>{
                        return <CarouselSlide  slide = {slide} key = {slide.id}/>
                    })}
                </Slider>
            </div>
        );
}
