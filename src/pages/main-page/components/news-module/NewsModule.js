import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import "./newsModule.css"

import Slider from "react-slick";
import arrow from "../carousels/img/arrow.svg";
import axios from "axios";


export default function NewsModule() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className + " next-right-item"}
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
                className={className + " next-left-item"}
                // style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}>
                <img src={arrow} style={
                    {
                        transform: "rotate(180deg)"
                    }
                } alt="arrow"/>
            </div>
        );
    }


    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const [news, setNews] = useState([]);

    useEffect(() => {

        axios.get('https://sportproteam2.herokuapp.com/api/news/')
          .then(res =>setNews(res.data.results))
    }, [])


    return (
        <div className="news-module__main-box">
            <div className="news-module__wrapper">
                <Slider {...settings}>
                    {news.map((item, index) =>{
                        return <NewsItem  item = {item} key = {item.id}/>
                    })}
                </Slider>
            </div>
        </div>
    );
}