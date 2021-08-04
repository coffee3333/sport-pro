import React, {useState, useEffect} from "react";
import axios from 'axios'


import FederationsTypes from "./FederationsTypes";
import "./styless/FederationsList.css"


export default function FederationsList(){
    const [sports, setSports] = useState([]);

    useEffect(() => {

        axios.get('http://sportproteam2.herokuapp.com/api/sportcategory/')
          .then(res =>setSports(res.data.results))
    }, [])

    return (
        <div className="federations-list__main-box" id = "federations">
            <div className="federations-list__wrapper">
                <h3 className="federations-list__header">Виды спорта</h3>
                {sports.map((sport_type) =>{
                    return <FederationsTypes  sport_type = {sport_type} key = {sport_type.id}/>
                })}

            </div>
        </div>
    );
}