import PropTypes  from 'prop-types'


export default function CarouselSlide({slide, index}) {
    return(
        <div>
            <h2>{slide.title}</h2>
            <img src={slide.img} alt="#"/>
        </div>
    );
}


CarouselSlide.propTypes = {
    slide: PropTypes.object.isRequired,
    index: PropTypes.number
}