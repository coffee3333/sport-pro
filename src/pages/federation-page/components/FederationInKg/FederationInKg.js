import React from "react";
import "./FederationInKg.css"

  const data = {
    header : "Федерация баскетбола Кыргызской Республики",
    ratingInfo: "Федерация баскетбола Кыргызской Республики. Основана в 1992 году.\n" +
      "        Место в рейтинге FIBA — 116.\n" +
      "        Место в рейтинге FIBA 3×3 — 35",
    contacts: "Контакты:  г. Бишкек, улица Горького 144. тел. (факс): +996 312 542042\n" +
      "\n" +
      "Генеральный секретарь: Пехов Евгений Анатольевич — (+996) 555 254878\n" +
      "\n" +
      "Председатель судейской коллегии: Быков Дмитрий Васильевич — (+996) 550 277269\n",
    mail: "e-mail: basketfedkg@gmail.com"
  }

export default function FederationInKg(){
  return (
    <div className="federation-in-kg__wrapper">
      <h3 className="federation-in-kg__header">{data.header}</h3>
      <div className="federation-in-kg__desc-wrapper">
        <p className="federation-in-kg__rating">{data.ratingInfo}</p>
        <p className="federation-in-kg__contacts">{data.contacts}</p>
        <a className="federation-in-kg__mail">{data.mail}</a>
      </div>
    </div>
  );

}