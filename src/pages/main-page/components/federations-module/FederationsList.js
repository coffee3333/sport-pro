import React, {useState, useEffect} from "react";
import axios from 'axios'


import FederationsTypes from "./FederationsTypes";
import "./styless/FederationsList.css"
import loadLogo from "../../../../assets/img/load.gif";


export default function FederationsList(){
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)

        axios.get('http://sportproteam2.herokuapp.com/api/sportcategory/')
          .then(res =>setSports(res.data))
          .finally(setLoading(false))
    }, [])


  if (loading) return <div className = "main-loading-wrapper"><img src = {loadLogo} alt = "loading" className = "main-load-gif"/></div>
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