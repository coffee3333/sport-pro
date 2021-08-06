import React from "react";
import "./AllNews.css"
import NewsItem from "./NewsItem";


export default function AllNews({data}){
  return(
    <div className="federation-all-news__wrapper">
      {data.results.slice(1).map((news, index) =>{
        return <NewsItem news = {news} key = {news.id}/>
      })}
    </div>
  );
}