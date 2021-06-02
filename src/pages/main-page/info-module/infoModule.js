import React from "react";
import './infoModule.css'


export default function InfoModule(){
    const data = {
        title: "all in sport kyrgyz republic",
        desc: "Развитие цифровых навыков в Кыргызстане. Создание информационного-рейтингового  портала для всех желающих и для повышения Спорта в Кыргызстане. На сайте будут размещены Новости и Рейтинги спортсменов каждой области Спорта в КР. Дальнейшее продвижение продукта и внедрение во все федерации в Министерстве спорта КР."
    };


    return(
        <div className="info-module__main-box">
            <div className="info-module__wrapper">
                <div className="info-module__header-wrapper">
                    <h1 className="info-module__header">{data.title}</h1>
                </div>
                <div className="info-module__desc-wrapper">
                    <p className="info-module__desc">{data.desc}</p>
                </div>
            </div>
        </div>
    );
}