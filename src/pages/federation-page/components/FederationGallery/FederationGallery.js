import React from "react";
import 'antd/dist/antd.css';
import { Image } from 'antd';
import "./FederationGallery.css"
import Slider from "react-slick";
import arrow from "../../../main-page/components/carousels/img/arrow.svg";
import FederationGalleryItem from "./FederationGalleryItem";


export default function FederationGallery({data}){
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " next-right-item"}
        // style={{ ...style, display: "block", background: "red"}}
        onClick={onClick}>
        <img src={arrow} alt="arrow"/>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
      <div
        className={className + " next-left-item"}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}>
        <img src={arrow} style={
          {
            transform: "rotate(180deg)"
          }
        } alt="arrow"/>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return(
    <Image.PreviewGroup>
      <div className="federation-gallery__wrapper">
        <div className="federation-gallery__box">
          <div className="federation-gallery__header-wrapper">
            <h3 className="federation-gallery__header">Галерея</h3>
          </div>
            <div className="federation-gallery__main-image">
              <Image width={1128} height={500} src={data[0].photo}/>
              <div className="federation-gallery__image-desc-wrapper">
                <h4 className="federation-gallery__image-category">{data[0]?.category}</h4>
                <h3 className="federation-gallery__image-tag">{data[0]?.tags}</h3>
                <p className="federation-gallery__image-date">{new Date(data[0]?.dateofadd).toLocaleDateString()}</p>
              </div>
            </div>
          <div className="federation-gallery__images-wrapper">
            <Slider {...settings}>
              {data.slice(1).map((item, index) =>{
                return <FederationGalleryItem  item = {item} key = {item.id}/>
              })}
            </Slider>
          </div>
        </div>
      </div>
    </Image.PreviewGroup>
  );
}
