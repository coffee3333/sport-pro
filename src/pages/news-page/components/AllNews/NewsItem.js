import React from "react";
import {Link} from "react-router-dom";

export default function NewsItem({news}){
  return(
    <div className="federation-all-news__item-wrapper">
      <div className="federation-all-news__item-img-wrapper">
        <img src={news.photo} alt="" className="federation-all-news__item-img"/>
      </div>
      <div className="federation-all-news__content-wrapper">
        <div className="federation-all-news__news-date-wrapper">
          <p className="federation-all-news__news-date">{new Date(news?.dateofadd).toLocaleDateString()}</p>
          <p className="federation-all-news__news-sport">{news.sport.name}</p>
        </div>
        <div className="federation-all-news__news-header-wrapper">
          <h3 className="federation-all-news__news-header">{news.title}</h3>
        </div>
        <div className="federation-all-news__news-link-wrapper">
          <Link to  = {`/news/${news.id}`} className="federation-all-news__news-link">Подробнее</Link>
        </div>
      </div>
    </div>
  );
}