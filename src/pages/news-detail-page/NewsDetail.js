import React, {useEffect, useState} from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import axios from "axios";
import loadLogo from "../../assets/img/load.gif";
import "./NewsDetail.css"



export default function NewsDetail(props){

  const [loading, setLoading] = useState(false)
  const [newsDeatil, setNewsDetail] = useState({})

  useEffect (() => {
    setLoading(true)
    axios.get(`https://sportproteam2.herokuapp.com/api/news/${props.match.params.id}`)
      .then(res => setNewsDetail(res.data))
      .finally(setLoading(false))
  }, [])



  if (loading) return <MainLayout> <div className = "main-loading-wrapper"><img src = {loadLogo} alt = "loading" className = "main-load-gif"/></div></MainLayout>

  return(
    <MainLayout>
      <div className="news-detail__wrapper">
        <div className="news-detail__news-date-wrapper">
          <h3 className="news-detail__news-header">{newsDeatil.title}</h3>
          <p className="news-detail__news-date">{new Date(newsDeatil.dateofadd).toLocaleDateString()}</p>
        </div>
        <div className="news-detail__img-wrapper">
          <img src={newsDeatil.photo} alt="sport-logo" className="news-detail__img"/>
        </div>
        <div className="news-detail__news-desc-wrapper">
          <p className="news-detail__news-desc">{newsDeatil.article}</p>
        </div>
        <div className="news-detail__back-wrapper">
          <button className="news-detail__back" onClick={() => props.history.goBack()}>Вернуться назад</button>
        </div>
      </div>
    </MainLayout>
  )
}