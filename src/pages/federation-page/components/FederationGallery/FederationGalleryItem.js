import React from "react";
import { Image } from 'antd';

export default function FederationGalleryItem({item}){
  return(
    <div className="federation-gallery__image-wrapper">
      <div className="federation-gallery__image-box">
        <Image width={287}
               height={185}
               className="federation-gallery__image"
               src={item?.photo}
        />
      </div>
      <div className="federation-gallery__image-desc-wrapper">
        <h4 className="federation-gallery__image-category">{item?.category}</h4>
        <h3 className="federation-gallery__image-tag">{item?.tags}</h3>
        <p className="federation-gallery__image-date">{new Date(item?.dateofadd).toLocaleDateString()}</p>
      </div>
    </div>
  )
}