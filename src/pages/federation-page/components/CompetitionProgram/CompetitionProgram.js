import React from "react";
import "./CompetitionProgram.css"
import CompetitionItem from "./components/CompetitionItem";

export default function CompetitionProgram(){

  const data = [
    {
      header: "Чемпионат мира по баскетболу среди юниоров 2020 года1",
      date: "14 октября 2020 г. - 18 октября 2020 г.",
      location: "София, Болгария",
      registration: "Срок регистрации еще не открыт"
    },
    {
      header: "Чемпионат мира по баскетболу среди юниоров 2020 года2",
      date: "14 октября 2020 г. - 18 октября 2020 г.",
      location: "София, Болгария",
      registration: "Срок регистрации еще не открыт"
    },
    {
      header: "Чемпионат мира по баскетболу среди юниоров 2020 года3",
      date: "14 октября 2020 г. - 18 октября 2020 г.",
      location: "София, Болгария",
      registration: "Срок регистрации еще не открыт"
    },
  ]

  return(
    <div className="federation-competition-program__wrapper">
      <h3 className="federation-competition-program__header">Программа соревнований</h3>
      <div className="federation-competition-program__items-wrapper">
        {data.map((item, index) =>{
          return <CompetitionItem  item = {item}/>
        })}
      </div>
    </div>
  );
}