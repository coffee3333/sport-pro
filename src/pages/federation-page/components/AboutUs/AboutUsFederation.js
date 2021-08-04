import React from "react";
import "./AboutUsFederation.css"


export default function AboutUsFederation( {data} ){
  return (
    <div>
      <h3 className="federation-about-sport__header">Об этом спорте</h3>
      <p className="federation-about-sport__desc">
        {data}
      </p>
    </div>
  );
}