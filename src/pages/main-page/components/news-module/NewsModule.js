import React from "react";
import NewsItem from "./NewsItem";
import "./newsModule.css"

import Slider from "react-slick";
import arrow from "../carousels/img/arrow.svg";


export default function NewsModule() {
    const data = [
        {
            id: 1,
            title: 'Бокс',
            desc: 'Японское боевое искусство без оружия',
            link: './',
            img: require("./img/1.png").default
        },
        {
            id: 2,
            title: 'Дзюдо',
            desc: 'Японское боевое искусство без оружия',
            link: './',
            img: require("./img/2.png").default
        },
        {
            id: 3,
            title: 'Ушу',
            desc: 'Комплекс традиционных китайских искуств',
            link: './',
            img: require("./img/3.png").default
        },
        {
            id: 1,
            title: 'Бокс',
            desc: 'Японское боевое искусство без оружия',
            link: './',
            img: require("./img/1.png").default
        },
        {
            id: 2,
            title: 'Дзюдо',
            desc: 'Японское боевое искусство без оружия',
            link: './',
            img: require("./img/2.png").default
        },
        {
            id: 3,
            title: 'Ушу',
            desc: 'Комплекс традиционных китайских искуств',
            link: './',
            img: require("./img/3.png").default
        },
        {
            id: 1,
            title: 'Бокс',
            desc: 'Японское боевое искусство без оружия',
            link: './',
            img: require("./img/1.png").default
        },
        {
            id: 2,
            title: 'Дзюдо',
            desc: 'Японское боевое искусство без оружия',
            link: './',
            img: require("./img/2.png").default
        },
        {
            id: 3,
            title: 'Ушу',
            desc: 'Комплекс традиционных китайских искуств',
            link: './',
            img: require("./img/3.png").default
        }

    ];




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


    return (
        <div className="news-module__main-box">
            <div className="news-module__wrapper">
                <Slider {...settings}>
                    {data.map((item, index) =>{
                        return <NewsItem  item = {item} key = {item.id}/>
                    })}
                </Slider>
            </div>
        </div>
    );
}