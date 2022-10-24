import React from 'react';
import api from '../utils/api';

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
  });

  React.useEffect(() => {
    api.getCards()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      console.log(err);
    })
  })

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
          <template id="element">
          <li className="element">
            <button type="button" className="element__trash"></button>
            <img className="element__photo" src="#" alt="#" />
            <div className="element__title-container">
              <h2 className="element__title">Название</h2>
              <div className="element__column">
                <button type="button" className="element__like"></button> 
                <p className="element__counter"></p>
              </div>
            </div>
          </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;