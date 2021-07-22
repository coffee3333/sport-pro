import React from "react";
import "./FederationNews.css"
import FederationMainNews from "./components/FederationMainNews/FederationMainNews";
import FederationAllNews from "./components/FederationAllNews/FederationAllNews";


export default function FederationNews(){
  const data = {
    header: "Новости баскетбола"
  }


  return(
    <div className="federation-news__wrapper">
      <h3 className="federation-news__main-header">{data.header}</h3>
      <FederationMainNews/>
      <FederationAllNews/>
    </div>
  );
}


