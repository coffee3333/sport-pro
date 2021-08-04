import React from "react";
import {Link} from "react-router-dom"

import "./styless/FederationsItems.css"


export default function FederationsItems({sport}){

    return(
      <Link to  = {`/federations/${sport.id}`} className="federations-sport__wrapper">
        <img className="federations-sport__img" src={sport.photo} alt="sport image"/>
        <div className="federations-sport__desc-wrapper">
          <h4 className="federations-sport__header" >{sport.name}</h4>
          <p className="federations-sport__desc">{sport.short_desc}</p>
        </div>
      </Link>
    );
}