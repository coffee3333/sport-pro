import React, {useEffect, useState} from "react";
import "./FederationNews.css"
import FederationMainNews from "./components/FederationMainNews/FederationMainNews";
import FederationAllNews from "./components/FederationAllNews/FederationAllNews";
import FederationNewsModal from "./components/FederationNewsModal/FederationNewsModal";

export default function FederationNews({data}){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState([])

  const showMore = (news) => {
    setSelectedNews(news)
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return(
    <div className="federation-news__wrapper">
      <h3 className="federation-news__main-header">Новости федерации</h3>
      <FederationMainNews data = {data} showMore = {showMore}/>
      <FederationAllNews data = {data} showMore = {showMore}/>
      <FederationNewsModal isVisible = {isModalVisible} onCancel = {handleCancel} data = {selectedNews}/>
    </div>
  );
}


