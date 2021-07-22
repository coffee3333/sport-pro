import React from "react";



export default function FederationNewsItem({news}){
  return(
    <div className="federation-all-news__item-wrapper">
      <div className="federation-all-news__item-img-wrapper">
        <img src={news.img} alt=""/>
      </div>
      <div className="federation-all-news__content-wrapper">
        <div className="federation-all-news__news-date-wrapper">
          <p className="federation-all-news__news-date">{news.date}</p>
          <p className="federation-all-news__news-sport">{news.sport}</p>
        </div>
        <div className="federation-all-news__news-header-wrapper">
          <h3 className="federation-all-news__news-header">{news.header}</h3>
        </div>
        <div className="federation-all-news__news-link-wrapper">
          <a href="#" className="federation-all-news__news-link">Подробнее</a>
        </div>
      </div>
    </div>
  );
}