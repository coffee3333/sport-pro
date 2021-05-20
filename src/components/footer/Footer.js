import './Footer-style.css'
import logo from './img/logo.svg'
import email from './img/email.svg'
import map from './img/map.svg'
import phone from './img/phone.svg'
import facebook from './img/Facebook.svg'
import insta from './img/Insta.svg'

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="footer__main-info">
                <div className="footer__logo-wrapper">
                    <img src={logo} alt="main-logo"/>
                </div>
                <div className="footer__about-us">
                    <h3 className="footer__main-info-header">О нас</h3>
                    <a href="#" className="footer__main-info-link">Федерации</a>
                    <a href="#" className="footer__main-info-link">Рейтинги</a>
                    <a href="#" className="footer__main-info-link">Соревнования</a>
                    <a href="#" className="footer__main-info-link">О нас</a>
                    <a href="#" className="footer__main-info-link">Новости</a>
                </div>
                <div className="footer__contacts-header footer__contacts">
                    <h3 className="footer__main-info-header">Контакты</h3>
                    <div className="footer__mail-info-wrapper">
                        <img src={email} alt="mail" className="footer__mail-info-logos"/>
                        <a href="#" className="footer__main-info-link">AIS.kg@gmail.com</a>
                    </div>
                    <div className="footer__geo-info-wrapper">
                        <img src={map} alt="map" className="footer__mail-info-logos"/>
                        <a href="#" className="footer__main-info-link">Г. Бишкек ул. Токтогула 100/1</a>
                    </div>
                    <div className="footer__mail-info-wrapper">
                        <img src={phone} alt="phone" className="footer__mail-info-logos"/>
                        <a href="#" className="footer__main-info-link">0707256789</a>
                    </div>
                </div>
                <div className="footer__social">
                    <h3 className="footer__social-header footer__main-info-header ">Социальные сети</h3>
                    <div className="footer__social-links-wrapper">
                        <a href="#"><img src={facebook} alt="facebook" className="footer__social-links"/></a>
                        <a href="#"><img src={insta} alt="facebook" className="footer__social-links"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}