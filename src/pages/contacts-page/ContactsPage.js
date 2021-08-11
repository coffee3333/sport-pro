import React, {useEffect, useState} from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import "./ContactsPage.css"
import axios from "axios";

const getFederations = () => new Promise((resolve, reject) => {

  axios.get('http://sportproteam2.herokuapp.com/api/sportcategory/')
    .then(res => resolve(res.data))
});

const getSports = async () => await new Promise((resolve, reject) => {

    axios.get('https://sportproteam2.herokuapp.com/api/federation/')
      .then(res => resolve(res.data))
});

export default function ContactsPage() {
  const [federations, setFederations] = useState([]);
  const [sports, setSports] = useState([]);

  const [selectedFederation, setSelectedFederation] = useState(0);
  const [selectedSport, setSelectedSport] = useState(0);

  const [filteredSports, setFilteredSports] = useState([]);
  const [selectedContact, setSelectedContacts] = useState({});

  useEffect(() => {
    Promise.all([getFederations(), getSports()])
      .then(res => {
        setFederations(res[0])
        setSports(res[1])
      })
  }, []);

  useEffect(() => {
    setFilteredSports(
      sports.filter(
        item => item?.sport?.category.id === +selectedFederation
      )
    )
  }, [selectedFederation]);

  useEffect(() => {
    setSelectedContacts(
      sports.find(
        item => item.id === +selectedSport
      )
    )
  }, [selectedSport]);

  const onFederationSelect = (e) => {
    setSelectedFederation(e.target.value)
    setSelectedSport(0)
  };

  const onSportSelect = (e) => setSelectedSport(e.target.value);

  return (
    <MainLayout>
      <div className="contacts__main-box">
        <div className="contacts-page__wrapper">
          <h2 className="contacts__header">Контакты</h2>
          <div className="contacts__drop-downs-wrapper">
            <div className="contacts__drop-down">
              <h4 className="contacts__drop-downs-header">Выберите вид спорта</h4>
              <select className="contacts__drop-down-select" value={selectedFederation} onChange={onFederationSelect}>
                <option value={0} selected disabled> --- </option>
                {
                  federations.map(item =>
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  )
                }
              </select>
            </div>
            <div className="contacts__drop-down">
              <h4 className="contacts__drop-downs-header">Выберите вид спорта</h4>
              <select className="contacts__drop-down-select"  value={selectedSport} onChange={onSportSelect}>
                <option value={0} selected disabled> --- </option>
                {
                  filteredSports.map(item =>
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  )
                }
              </select>
            </div>
          </div>
          <div className="contacts-page__contact-info-wrapper">
            <h3 className="contacts-page__contact-title">{selectedContact?.name}</h3>
            <p className="contacts-page__contact-address">Контакты: {selectedContact?.address}</p>
            <p className="contacts-page__contact-address">Номер: {selectedContact?.contacts}</p>
            <div className="contacts-page__img-wrapper">
              <img src={selectedContact?.logo} alt="logo-federation" className="contacts-page__img"/>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}