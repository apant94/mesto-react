import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
    .then((data) => {
      setUserName(data.name);
      setuserDescription(data.about);
      setuserAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  React.useEffect(() => {
    api.getCards()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return(  
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} ></div>
          <div className="profile__edit-avatar" onClick={props.onEditAvatar}></div> 
        </div> 
        <div className="profile__info">
          <div className="profile__first-line">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card 
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            onDeleteClick={props.onDeleteClick}
            card={card}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;