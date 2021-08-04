import React from "react";
import {Link} from "react-router-dom";


export default function NewsItem({item, index}){
    return(
        <div className="news-module__item-wrapper">
            <div className="news-module-item__img-side">
                <img className="news-module-item__img" src={item.photo} alt="#"/>
            </div>
            <div className="news-module-item__content-side">
                <h4 className="news-module-item__content-header">{item.sport.name}</h4>
                <h3 className="news-module-item__content-desc">{item.article}</h3>
                <Link to={`/news/${item.id}`} className="news-module-item__content-link" >Подробнее</Link>
            </div>
        </div>
    );
}