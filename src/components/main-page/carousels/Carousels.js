import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import CarouselSlide from "./CarouselSlide"

export default function Carousels() {
    const data = [
        {
            title: 'Мы едины! Мы за спорт!',
            link: 'link',
            img: require("./img/rect.png").default
        },
        {
            title: 'Мы едины! Мы за спорт!',
            link: 'link',
            img: require("./img/rect.png").default
        },
        {
            title: 'Мы едины! Мы за спорт!',
            link: 'link',
            img: require("./img/rect.png").default
        }];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        pauseOnHover: true,
        slidesToScroll: 1
    };
        return (
            <div>
                <Slider {...settings}>
                    {data.map((slide, index) =>{
                        return <CarouselSlide  slide = {slide} key = {data.id} index = {index}/>
                    })}
                </Slider>
            </div>
        );
}
