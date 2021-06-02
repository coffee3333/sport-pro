import React from "react";
import "./Header-style.css"

export default function Header(){
    const data = {
        logo: require("../footer/img/logo.svg").default
    }


    return(
        <div className="header__wrapper">
            <div className="header-logo__wrapper">
                <img src={data.logo} alt="" className="header-logo"/>
            </div>
            <div className="header-nav-links__wrapper">
                <div className="header-nav-links__localisation-wrapper">
                </div>
                <div className="header-nav-links__links-wrapper">
                    <a href="#" className="header-nav-links__link">Федерации</a>
                    <a href="#" className="header-nav-links__link">Соревнования</a>
                    <a href="#" className="header-nav-links__link">О нас</a>
                    <a href="#" className="header-nav-links__link">Контакты</a>
                </div>
            </div>
        </div>
    );
}