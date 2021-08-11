import React from "react";
import "./FederationMainNews.css"

export default function FederationMainNews({data, showMore}){

  return(
    <div className="federation-main-news__wrapper">
      <div className="federation-main-news__img-wrapper">
        <img src={data.results[0].photo} alt="sport-logo" className="federation-main-news__img"/>
      </div>
      <div className="federation-main-news__news-info-wrapper">
        <div className="federation-main-news__news-date-wrapper">
          <p className="federation-main-news__news-date">{new Date(data?.results[0].dateofadd).toLocaleDateString()}</p>
          <p className="federation-main-news__news-sport">{data.results[0].sport.name}</p>
        </div>
        <div className="federation-main-news__news-desc-wrapper">
          <h3 className="federation-main-news__news-header">{data.results[0].title}</h3>
          <p className="federation-main-news__news-desc">{data.results[0].article}</p>
        </div>
        <div className="federation-main-news__news-link-wrapper">
          <button className="federation-main-news__news-link" onClick={() => showMore(data.results[0])}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}