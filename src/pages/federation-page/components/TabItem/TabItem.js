import React from "react";
import "./TabItem.css"


export default function TabItem({item, isActive, setTab}) {
  const name_of_components = {
    aboutSport: "Об этом спорте",
    federationInKg: "Федерация КР",
    competitionProgram: "Программа соревнований",
    listOfSportPeople: "Список спортсменов",
    news: "Новости",
    gallery: "Галерея"
  }

  return (
    <button
      className={`federation-tab-links__tab-link ${isActive && "federation-tab-links__tab-link--active"}`}
      onClick={setTab}
    >
      {name_of_components[item]}
    </button>
  );
}