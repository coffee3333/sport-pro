import React from "react";
import "./Header-style.css"
import {Link} from "react-router-dom";

export default function Header(){
    const data = {
        logo: require("../footer/img/logo.svg").default
    }


    return(
        <div className="header__wrapper">
            <div className="header-logo__wrapper">
                <Link to = "/">
                    <img src={data.logo} alt="" className="header-logo"/>
                </Link>
            </div>
            <div className="header-nav-links__wrapper">
                <div className="header-nav-links__localisation-wrapper">
                </div>
                <div className="header-nav-links__links-wrapper">
                    <a href="#" className="header-nav-links__link">Федерации</a>
                    <a href="#" className="header-nav-links__link">Соревнования</a>
                    <Link className="header-nav-links__link" to="/about-us">О нас</Link>
                    <a href="#" className="header-nav-links__link">Контакты</a>
                </div>
            </div>
        </div>
    );
}