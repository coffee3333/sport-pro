import React from "react";



export default function ListOfSportpeopleItem({item}){


  return (
    <div className="federation-list-of-sport-people__list-item">
      <p className="federation-list-of-sport-people__item-number">{item.id}</p>
      <div className="federation-list-of-sport-people__item-name-wrapper">
        <img className="federation-list-of-sport-people__item-img" src={item.img} alt=""/>
        <p className="federation-list-of-sport-people__item-name">{item.name}</p>
      </div>
      <p className="federation-list-of-sport-people__item-country">{item.country}</p>
      <p className="federation-list-of-sport-people__item-points">{item.points}</p>
    </div>
  )
}