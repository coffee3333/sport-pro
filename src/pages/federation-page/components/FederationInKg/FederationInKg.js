import React from "react";
import "./FederationInKg.css"

export default function FederationInKg( {data} ){
  return (
    <div className="federation-in-kg__wrapper">
      <h3 className="federation-in-kg__header">{data.name} Кыргызской Республики</h3>
      <div className="federation-in-kg__desc-wrapper">
        <p className="federation-in-kg__rating">{data.description}</p>
        <p className="federation-in-kg__contacts">Адресс: {data.address}</p>
        <a className="federation-in-kg__mail">{data.contacts}</a>
      </div>
    </div>
  );

}