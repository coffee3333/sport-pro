import React from "react";
import "./FederationAllNews.css"
import FederationNewsItem from "./FederationNewsItem";


export default function FederationAllNews({data, showMore}){
  return(
    <div className="federation-all-news__wrapper">
      {data.results.slice(1).map((news, index) =>{
        return <FederationNewsItem  news = {news} key = {news.id} showMore = {showMore}/>
      })}
    </div>
  );

}