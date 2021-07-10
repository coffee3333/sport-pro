import React from "react";
import "./ComponentsItem.css"

export default function CompetitionItem(item){
  return(
    <div className="federation-competition-program__item-wrapper">
      <div className="federation-competition-program__item-header-wrapper">
        <h4 className="federation-competition-program__item-header">{item.item.header}</h4>
      </div>
      <div className="federation-competition-program__items-desc-wrapper">
        <div className="federation-competition-program__item-desc-wrapper">
          <p className="federation-competition-program__item-desc-label">Даты проведения:</p>
          <p className="federation-competition-program__item-desc-item">{item.item.date}</p>
        </div>
        <div className="federation-competition-program__item-desc-wrapper">
          <p className="federation-competition-program__item-desc-label">Местоположение:</p>
          <p className="federation-competition-program__item-desc-item">{item.item.location}</p>
        </div>
      </div>
      <div className="federation-competition-program__item-registration-info-wrapper">
        <p className="federation-competition-program__item-registration-info">
          {item.item.registration}
        </p>
      </div>
    </div>
  )
}