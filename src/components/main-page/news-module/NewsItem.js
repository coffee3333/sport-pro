import React from "react";


export default function NewsItem({item, index}){
    return(
        <div className="news-module__item-wrapper">
            <div className="news-module-item__img-side">
                <img src={item.img} alt=""/>
            </div>
        </div>
    );
}