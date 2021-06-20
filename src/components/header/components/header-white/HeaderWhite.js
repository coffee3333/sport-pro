import React from "react";
import "./Header-white-style.css"
import {Link, NavLink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';


export default function HeaderWhite(){
    const data = {
        logo: require("../../assets/logo-white.svg").default,
        facedook: require("../../../footer/img/Facebook.svg").default,
        insta: require("../../../footer/img/Insta.svg").default
    }

    return(
        <div className="header-white__wrapper">
            <div className="header-white-logo__wrapper">
                <Link to = "/">
                    <img src={data.logo} alt="" className="header-logo"/>
                </Link>
            </div>
            <div className="header-white-nav-links__wrapper">
                <div className="header-white-nav-links__empty">
                </div>
                <div className="header-white-nav-links__links-wrapper">
                    <div className="header-white-nav-links__links-side">
                        <NavHashLink to ="/#federations" className="header-white-nav-links__link">Федерации</NavHashLink>
                        <a href="#" className="header-white-nav-links__link">Рейтинг  КР</a>
                        <a href="#" className="header-white-nav-links__link">Соревнования</a>
                        <a href="#" className="header-white-nav-links__link">Новости</a>
                        <NavLink exact className="header-white-nav-links__link" to="/about-us" activeClassName="active">О нас</NavLink>
                        <NavLink exact className="header-white-nav-links__link" to="/contacts" activeClassName="active">Контакты</NavLink>
                    </div>
                    <div className="header-white-nav-links__icon-side">
                        <a href="#">
                            <img src={data.facedook} alt="facebook" className="header-white-nav-links__icon"/>
                        </a>
                        <a href="#">
                            <img src={data.insta} alt="instagram" className="header-white-nav-links__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}