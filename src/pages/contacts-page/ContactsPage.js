import React, {useEffect, useState} from "react";
import MainLayout from "../../components/main-layout/MainLayout";
import "./ContactsPage.css"

const getContacts = async () => await new Promise((resolve, reject) => {
  return resolve([
    {
      id: 1,
      title: "Федерации Борьбы КР",
      number: "+996500123456",
      address: "ул. Хуева д Кукуева",
      location: "Бишкек",
      sport: 1
    },
    {
      id: 2,
      title: "Федерации Баскетбола КР",
      number: "+996500123459",
      address: "ул. Хуева д Кукуева",
      location: "Бишкек",
      sport: 2
    },
    {
      id: 3,
      title: "Федерации Бокса КР",
      number: "+996500123450",
      address: "ул. Хуева д Кукуева",
      location: "Бишкек",
      sport: 3
    }
  ])
});

const getFederations = async () => await new Promise((resolve, reject) => {
  return resolve([
    {
      id: 1,
      title: "Олимпийские"
    },
    {
      id: 2,
      title: "Какие-то еще"
    }
  ])
});

const getSports = async () => await new Promise((resolve, reject) => {
  return resolve([
    {
      id: 1,
      title: "Борьба",
      sport: 1
    },
    {
      id: 2,
      title: "Баскетбола",
      sport: 1
    },
    {
      id: 3,
      title: "Бокс",
      sport: 2
    }
  ])
});

export default function ContactsPage() {
  const [federations, setFederations] = useState([]);
  const [sports, setSports] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [selectedFederation, setSelectedFederation] = useState(0);
  const [selectedSport, setSelectedSport] = useState(0);

  const [filteredSports, setFilteredSports] = useState([]);
  const [selectedContact, setSelectedContacts] = useState({});

  useEffect(() => {
    Promise.all([getFederations(), getContacts(), getSports()])
      .then(res => {
        setFederations(res[0])
        setContacts(res[1])
        setSports(res[2])
      })
  }, []);

  useEffect(() => {
    setFilteredSports(
      sports.filter(
        item => item.sport === +selectedFederation
      )
    )
  }, [selectedFederation]);

  useEffect(() => {
    setSelectedContacts(
      contacts.find(
        item => item.sport === +selectedSport
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
                      {item.title}
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
                      {item.title}
                    </option>
                  )
                }
              </select>
            </div>
          </div>
          <div className="contacts-page__contact-info-wrapper">
            <h3 className="contacts-page__contact-title">{selectedContact?.title}</h3>
            <p className="contacts-page__contact-address">Контакты: {selectedContact?.address}</p>
            <p className="contacts-page__contact-address">Номер: {selectedContact?.number}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}