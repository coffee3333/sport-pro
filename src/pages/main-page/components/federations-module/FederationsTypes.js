import React from "react";

import FederationsItems from "./FederationsItems"
import "./styless/FederationsTypes.css"



export default function FederationsTypes({types}){
    return(
      <div className="federations-types__wrapper">
          <h4 className="federations-types__header">{types.name_of_type}</h4>
          <div className="federations-types__list">
              {types.list.map((sport) =>{
                  return <FederationsItems  sport = {sport} key = {sport.id}/>
              })}
          </div>
      </div>
    );
}


