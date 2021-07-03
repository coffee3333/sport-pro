import React, {useState} from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import "./Federation.css"
import AboutUsFederation from "./components/AboutUsFederation";
import TabItem from "./TabItem";
import FederationInKg from "./components/FederationInKg";



export default function Federation(props){
  const data = {
    img: require("../about-us-page/img/1.png").default
  };

  const tab_components = {
    aboutUs: <AboutUsFederation/>,
    aboutUs2: <AboutUsFederation/>,
    federationInKg: <FederationInKg/>
  }

  const [selectedTab, selectTab] = useState(tab_components[Object.keys(tab_components)[0]]);


  return(
    <MainLayout>
      {/*{props.match.params.id}*/}
      <div className="federation__wrapper">
        <div className="federation__hero-wrapper"  style = {{backgroundImage: `url(${data.img})`}} >
          <div className="federation__header-wrapper">
            <h2 className="federation__header">Курош</h2>
          </div>
        </div>

        <div className="federation-tab-links__wrapper">
            {Object.keys(tab_components)
              .map((item) =>{
                return <TabItem setTab={() => selectTab(item)} item/>
              } )}
        </div>

        <div className="federation__component-wrapper" >
          {tab_components[selectedTab]}
        </div>

      </div>

    </MainLayout>
  )
}


