import React from "react";

export default function FederationNewsItem({news, showMore}){
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
          <button className="federation-all-news__news-link" onClick={() => showMore(news)}>Подробнее</button>
        </div>
      </div>
    </div>
  );
}