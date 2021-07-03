import React, {useState} from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import "./Federation.css"
import AboutUsFederation from "./components/AboutUs/AboutUsFederation";
import TabItem from "./components/TabItem/TabItem";
import FederationInKg from "./components/FederationInKg/FederationInKg";
import CompetitionProgram from "./components/CompetitionProgram";
import ListOfSportPeople from "./components/ListOfSportpeople";
import FederationNews from "./components/FederationNews";
import FederationGallery from "./components/FederationGallery";



export default function Federation(props){
  const data = {
    id: 3,
    title: "Курош",
    bgImg: require("../about-us-page/img/1.png").default
  };

  const tab_components = {
    aboutSport: <AboutUsFederation/>,
    federationInKg: <FederationInKg/>,
    competitionProgram: <CompetitionProgram/>,
    listOfSportPeople: <ListOfSportPeople/>,
    news: <FederationNews/>,
    gallery: <FederationGallery/>
  }

  const [selectedTab, selectTab] = useState([Object.keys(tab_components)[0]]);


  return(
    <MainLayout>
      {/*{props.match.params.id}*/}
      <div className="federation__wrapper">
        <div className="federation__hero-wrapper"  style = {{backgroundImage: `url(${data.bgImg})`}} >
          <div className="federation__header-wrapper">
            <h2 className="federation__header">{data.title}</h2>
          </div>
        </div>
        <div className="federation-tab-links__wrapper">
            {Object.keys(tab_components)
              .map((item) =>{
                return <TabItem item = {item} setTab={() => selectTab(item)}/>
              } )}
        </div>
        <div className="federation__component-wrapper" >
          {tab_components[selectedTab]}
        </div>
      </div>
    </MainLayout>
  )
}


