import React from "react";
import "./FederationMainNews.css"

export default function FederationMainNews(){

  const data = {
    id: 1,
    sport: "Баскетбол",
    img: require("../../assets/main-news.png").default,
    date: "14.04.2020",
    header: "«Байер» снизит стоимость Кая Хаверца.",
    desc: "Новая модель организационной деятельности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.Значимость этих проблем настолько "
  }

  return(
    <div className="federation-main-news__wrapper">
      <div className="federation-main-news__img-wrapper">
        <img src={data.img} alt="sport-logo"/>
      </div>
      <div className="federation-main-news__news-info-wrapper">
        <div className="federation-main-news__news-date-wrapper">
          <p className="federation-main-news__news-date">{data.date}</p>
          <p className="federation-main-news__news-sport">{data.sport}</p>
        </div>
        <div className="federation-main-news__news-desc-wrapper">
          <h3 className="federation-main-news__news-header">{data.header}</h3>
          <p className="federation-main-news__news-desc">{data.desc}</p>
        </div>
        <a href="#" className="federation-main-news__news-link">Подробнее</a>
      </div>
    </div>
  )
}