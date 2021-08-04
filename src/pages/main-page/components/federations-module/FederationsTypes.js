import React, {useEffect, useState} from "react";

import FederationsItems from "./FederationsItems"
import "./styless/FederationsTypes.css"
import axios from "axios";



export default function FederationsTypes({sport_type}){

  const [federations, setFederations] = useState([])

  useEffect(() => {
    axios.get(`https://sportproteam2.herokuapp.com/api/sport/?category=${sport_type.id}`)
      .then(res => setFederations(res.data.results))
  }, [])


    return(
      <div className="federations-types__wrapper">
          <h4 className="federations-types__header">{sport_type.name}</h4>
          <div className="federations-types__list">
            {federations.map((sport) =>{
              return <FederationsItems  sport = {sport} key = {sport.id}/>
            })}
          </div>
      </div>
    );
}


