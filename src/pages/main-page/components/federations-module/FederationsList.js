import React from "react";

import FederationsTypes from "./FederationsTypes";
import "./styless/FederationsList.css"


export default function FederationsList(){
    const data = [
        {
            id: 1,
            name_of_type: "Национальные виды спорта",
            list: [
                {
                    id : 1,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 2,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 3,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 4,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },                {
                    id : 5,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },                {
                    id : 6,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 7,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                }
            ]
        },
        {
            id: 2,
            name_of_type: "Национальные виды спорта",
            list: [
                {
                    id : 8,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 9,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 10,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 11,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },                {
                    id : 12,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },                {
                    id : 13,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                },
                {
                    id : 14,
                    name_of_sport : "Куреш",
                    desc: "Современное японское боевое искусство",
                    img : require("./img/1.png").default
                }
            ]
        }



    ]



    return (
        <div className="federations-list__main-box">
            <div className="federations-list__wrapper">
                <h3 className="federations-list__header">Виды спорта</h3>
                {data.map((types) =>{
                    return <FederationsTypes  types = {types} key = {types.id}/>
                })}
            </div>
        </div>
    );
}