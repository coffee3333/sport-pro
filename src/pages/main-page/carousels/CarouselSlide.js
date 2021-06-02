import PropTypes  from 'prop-types'
import "./CarouselSlide.css"

import dot from './img/dot.svg'


export default function CarouselSlide({slide, index}) {

    return(
        <div className="slide-item__wrapper" style = {{backgroundImage: `url(${slide.img})`}}>
            <div className="slide-item__info-box">
                <div className="slide-item__time-wrapper">
                    <img src={dot} alt="." className="slide-item__time-dot"/>
                    <p className="slide-item__time">{slide.time}</p>
                </div>
                <h2 className="slide-item__header">{slide.title}</h2>
                <a href={slide.link} className="slide-item__button">Перейти на соревнования</a>
            </div>
        </div>
    );
}

CarouselSlide.propTypes = {
    slide: PropTypes.object.isRequired,
    index: PropTypes.number
}