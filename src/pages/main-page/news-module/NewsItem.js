import React from "react";

export default function NewsItem({item, index}){
    return(
        <div className="news-module__item-wrapper">
            <div className="news-module-item__img-side">
                <img src={item.img} alt="#"/>
            </div>
            <div className="news-module-item__content-side">
                <h4 className="news-module-item__content-header">{item.title}</h4>
                <h3 className="news-module-item__content-desc">{item.desc}</h3>
                <a href={item.link} className="news-module-item__content-link">Подробнее</a>
            </div>
        </div>
    );
}