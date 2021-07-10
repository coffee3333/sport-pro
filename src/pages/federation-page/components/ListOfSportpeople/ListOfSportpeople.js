import React from "react";
import "./ListOfSportpeople.css"
import ListOfSportpeopleItem from "./ListOfSportpeopleItem";

export default function ListOfSportPeople(){


  const data = [
    {
      id: 1,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 2,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 3,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 4,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 5,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 6,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 7,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 8,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 9,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 10,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 11,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 12,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    },
    {
      id: 13,
      name: "Асанов Айбек Асанович",
      img: require("./assets/img.png").default,
      country: "Кыргызстан",
      points: "457,62"
    }
  ]


  return(

    <div className="federation-list-of-sport-people__wrapper">
      <h3 className="federation-list-of-sport-people__main-header">Список спортсменов</h3>
      <div className="federation-list-of-sport-people__list-box">
        <div className="federation-list-of-sport-people__list-headers">
          <p className="federation-list-of-sport-people__header">Номер</p>
          <p className="federation-list-of-sport-people__header">ФИО</p>
          <p className="federation-list-of-sport-people__header">Страна</p>
          <p className="federation-list-of-sport-people__header">Баллы</p>
        </div>
        <div className="federation-list-of-sport-people__list-items">
          {data.map((item, index) =>{
            return <ListOfSportpeopleItem  item = {item} key={item.id}/>
          })}
        </div>
      </div>
    </div>
  );
}