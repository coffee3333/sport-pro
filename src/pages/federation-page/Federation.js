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
import FederationGallery from "./components/FederationGallery/FederationGallery";
import loadLogo from "../../assets/img/load.gif"


export default function Federation(props) {
  const [loading, setLoading] = useState(false)
  const [federationData, setFederationData] = useState([]);
  const [federationNewsData, setFederationNewsData] = useState([]);


  useEffect( () => {
    setLoading(true)

    axios.all([
      axios.get(`http://sportproteam2.herokuapp.com/api/gallery/${props.match.params.id}`),
      axios.get(`https://sportproteam2.herokuapp.com/api/news/?sport=${props.match.params.id}`)
    ])
      .then(axios.spread((resultGallery, resultNews) => {
        setFederationData(resultGallery.data);
        setFederationNewsData(resultNews.data);
      }))
      .finally(() => setLoading(false))

  }, [])

  const tab_components = {
    aboutSport: <AboutUsFederation data = {federationData?.federation?.sport?.description}/>,
    federationInKg: <FederationInKg data = {federationData?.federation}/>,
    competitionProgram: <CompetitionProgram/>,
    listOfSportPeople: <ListOfSportPeople/>,
    news: <FederationNews data = {federationNewsData}/>,
    gallery: <FederationGallery data = {federationData?.photo}/>
  }

  const [selectedTab, selectTab] = useState(Object.keys(tab_components)[0]);


  if (loading) return <MainLayout> <div className = "main-loading-wrapper"><img src = {loadLogo} alt = "loading" className = "main-load-gif"/></div></MainLayout>
  return (
    <MainLayout>
      <div className="federation__wrapper">
        <div className="federation__hero-wrapper" style={{backgroundImage: `url(${federationData?.federation?.sport?.photo}`}}>
          <div className="federation__header-wrapper">
            <h2 className="federation__header">{federationData?.federation?.sport?.name}</h2>
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


