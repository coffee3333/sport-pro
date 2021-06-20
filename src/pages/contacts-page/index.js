import React, {useEffect, useState} from "react";
import MainLayout from "../../components/main-layout/MainLayout";

const getContacts = async () => await new Promise((resolve, reject) => {
  return resolve([
    {
      id: 1,
      number: "+996500123456 Олимпийские 1",
      address: "ул. Хуева д Кукуева",
      location: "Бишкек",
      sport: 1
    },
    {
      id: 2,
      number: "+996500123459 Олимпийские 2",
      address: "ул. Хуева д Кукуева",
      location: "Бишкек",
      sport: 2
    },
    {
      id: 3,
      number: "+996500123450 Какие-то еще 1",
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
      title: "Олимпийские 1",
      sport: 1
    },
    {
      id: 2,
      title: "Олимпийские 2",
      sport: 1
    },
    {
      id: 3,
      title: "Какие-то еще 1",
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
      <div className="main-page__wrapper">
        <h1>Контакты</h1>
        <div style={{display: 'flex'}}>
          <select value={selectedFederation} onChange={onFederationSelect}>
            <option value={0} selected disabled> --- </option>
            {
              federations.map(item =>
                <option value={item.id} key={item.id}>
                  {item.title}
                </option>
              )
            }
          </select>
          <select value={selectedSport} onChange={onSportSelect}>
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
        <div>
          <h3>{selectedContact?.number}</h3>
        </div>

      </div>
    </MainLayout>
  );
}