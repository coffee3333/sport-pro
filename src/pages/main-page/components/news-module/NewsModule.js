import React from "react";
import NewsItem from "./NewsItem";
import "./newsModule.css"


export default function NewsModule() {
    const data = [
        {
            id: 1,
            title: 'Бокс',
            desc: 'Контактный вид спорта, единоборство...',
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


    return (
        <div className="news-module__main-box">
            <div className="news-module__wrapper">
                {data.map((item) =>{
                    return <NewsItem  item = {item} key = {item.id}/>
                })}
            </div>
        </div>
    );
}