import React, {useEffect, useState} from "react";
import "./News.css"
import MainNews from "./components/MainNews/MainNews";
import axios from "axios";
import MainLayout from "../../components/main-layout/MainLayout";
import loadLogo from "../../assets/img/load.gif";
import AllNews from "./components/AllNews/AllNews";



export default function News(){
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState({})

  useEffect (() => {
    setLoading(true)
    axios.get('https://sportproteam2.herokuapp.com/api/news')
      .then(res => setNews(res.data))
      .finally(setLoading(false))
  }, [])


  if (loading || (!news.results || news.results.length === 0))
    return <MainLayout> <div className = "main-loading-wrapper"><img src = {loadLogo} alt = "loading" className = "main-load-gif"/></div></MainLayout>

  return(
    <MainLayout>
      <div className="federation-news__wrapper">
        <h3 className="federation-news__main-header">Новости</h3>
        <MainNews data = {news}/>
        <AllNews data = {news}/>
      </div>
    </MainLayout>
  );
}


