import React from "react";
import { Modal, Button } from 'antd';
import "./FederationNewsModal.css"



export default function FederationNewsModal({isVisible, onCancel, data}){
  return (
      <Modal visible={isVisible} onCancel={onCancel} centered footer = {null} width={900}>
        <div className="federation-modal-news__wrapper">
          <div className="federation-modal-news__news-date-wrapper">
            <h3 className="federation-modal-news__news-header">{data.title}</h3>
            <p className="federation-modal-news__news-date">{new Date(data.dateofadd).toLocaleDateString()}</p>
          </div>
          <div className="federation-modal-news__img-wrapper">
            <img src={data.photo} alt="sport-logo" className="federation-modal-news__img"/>
          </div>
          <div className="federation-modal-news__news-desc-wrapper">
            <p className="federation-modal-news__news-desc">{data.article}</p>
          </div>
        </div>
      </Modal>
  );
}

