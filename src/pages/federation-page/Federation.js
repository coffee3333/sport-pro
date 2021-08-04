import React, {useEffect, useState} from "react";
import axios from "axios";

import "./Federation.css"
import MainLayout from "../../components/main-layout/MainLayout";
import AboutUsFederation from "./components/AboutUs/AboutUsFederation";
import TabItem from "./components/TabItem/TabItem";
import FederationInKg from "./components/FederationInKg/FederationInKg";
import CompetitionProgram from "./components/CompetitionProgram/CompetitionProgram";
import ListOfSportPeople from "./components/ListOfSportpeople/ListOfSportpeople";
import FederationNews from "./components/FederationNews/FederationNews";
import FederationGallery from "./components/FederationGallery";
import loadLogo from "../../assets/img/load.gif"


export default function Federation(props) {
  const [loading, setLoading] = useState(false)
  const [federationData, setFederationData] = useState([]);


  useEffect( () => {
    setLoading(true)

    axios.get(`https://sportproteam2.herokuapp.com/api/federation/${props.match.params.id}`)
      .then(res => setFederationData(res.data))
      .finally(() => setLoading(false))
  }, [])

  const tab_components = {
    aboutSport: <AboutUsFederation data = {federationData?.sport?.description}/>,
    federationInKg: <FederationInKg data = {federationData}/>,
    competitionProgram: <CompetitionProgram/>,
    listOfSportPeople: <ListOfSportPeople/>,
    news: <FederationNews/>,
    gallery: <FederationGallery/>
  }

  const [selectedTab, selectTab] = useState(Object.keys(tab_components)[0]);


  if (loading) return <MainLayout> <div className = "main-loading-wrapper"><img src = {loadLogo} alt = "loading" className = "main-load-gif"/></div></MainLayout>
  return (
    <MainLayout>
      <div className="federation__wrapper">
        <div className="federation__hero-wrapper" style={{backgroundImage: `url(${federationData?.sport?.photo}`}}>
          <div className="federation__header-wrapper">
            <h2 className="federation__header">{federationData?.sport?.name}</h2>
          </div>
        </div>
        <div className="federation-tab-links__wrapper">
          {Object.keys(tab_components)
            .map((item) => {
              return <TabItem isActive={selectedTab === item} item={item} setTab={() => selectTab(item)}/>
            })}
        </div>
        <div className="federation__component-wrapper">
          {tab_components[selectedTab]}
        </div>
      </div>
    </MainLayout>
  )
}


