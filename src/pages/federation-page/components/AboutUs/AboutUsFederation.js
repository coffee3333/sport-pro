import React from "react";
import "./AboutUsFederation.css"


export default function AboutUsFederation( {data} ){
  return (
    <div className="federation-about-sport__wrapper">
      <h3 className="federation-about-sport__header">Об этом спорте</h3>
      <p className="federation-about-sport__desc">
        {data}
      </p>
    </div>
  );
}