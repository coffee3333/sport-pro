import React from "react";
import "./Header-style.css"
import {Link} from "react-router-dom";

export default function Header(){
    const data = {
        logo: require("../footer/img/logo.svg").default,
        facedook: require("../footer/img/Facebook.svg").default,
        insta: require("../footer/img/Insta.svg").default
    }

    console.log(window.location.pathname)


    return(
        <div className="header__wrapper">
            <div className="header-logo__wrapper">
                <Link to = "/">
                    <img src={data.logo} alt="" className="header-logo"/>
                </Link>
            </div>
            <div className="header-nav-links__wrapper">
                <div className="header-nav-links__empty">
                </div>
                <div className="header-nav-links__links-wrapper">
                    <div className="header-nav-links__links-side">
                        <a href="#" className="header-nav-links__link">Федерации</a>
                        <a href="#" className="header-nav-links__link">Рейтинг  КР</a>
                        <a href="#" className="header-nav-links__link">Соревнования</a>
                        <a href="#" className="header-nav-links__link">Новости</a>
                        <Link className="header-nav-links__link" to="/about-us">О нас</Link>
                        <a href="#" className="header-nav-links__link">Контакты</a>
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