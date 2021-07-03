import React from "react";
import "./Header-black-style.css"
import {NavLink} from "react-router-dom";

export default function HeaderBlack(){
    const data = {
        logo: require("../../../footer/img/logo.svg").default,
        facedook: require("../../../footer/img/Facebook.svg").default,
        insta: require("../../../footer/img/Insta.svg").default
    }

    return(
        <div className="header__wrapper">
            <div className="header-logo__wrapper">
                <NavLink to = "/">
                    <img src={data.logo} alt="" className="header-logo"/>
                </NavLink>
            </div>
            <div className="header-nav-links__wrapper">
                <div className="header-nav-links__empty">
                </div>
                <div className="header-nav-links__links-wrapper">
                    <div className="header-nav-links__links-side">
                        <a href = {"#federations"} className ="header-nav-links__link">Федерации</a>
                        <a className="header-nav-links__link" >Рейтинг  КР</a>
                        <a href="#" className="header-nav-links__link">Соревнования</a>
                        <a href="#" className="header-nav-links__link">Новости</a>
                        <NavLink className="header-nav-links__link" to="/about-us">О нас</NavLink>
                        <NavLink className="header-nav-links__link" to="/contacts">Контакты</NavLink>
                    </div>
                    <div className="header-nav-links__icon-side">
                        <a href="#">
                            <img src={data.facedook} alt="facebook" className="header-nav-links__icon"/>
                        </a>
                        <a href="#">
                            <img src={data.insta} alt="instagram" className="header-nav-links__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}