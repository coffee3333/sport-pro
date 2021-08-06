import React from "react";
import "./MainNews.css"
import {Link} from "react-router-dom";

export default function MainNews({data}){

  return(
    <div className="federation-main-news__wrapper">
      <div className="federation-main-news__img-wrapper">
        <img src={data.results[0].photo} alt="sport-logo" className="main-news__img"/>
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
          <Link to  = {`/news/${data.results[0].id}`} className="federation-main-news__news-link">Подробнее</Link>
        </div>
      </div>
    </div>
  )
}