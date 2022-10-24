import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
  <body className="root">
    <div className="page">
    <Header />
    <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
    <Footer />
    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
    <ImagePopup />
    

    <div className="popup popup_delete">
      <form action="" className="popup__container">
        <button type="button" className="popup__close"></button>
        <div className="popup__wrapper">
          <h2 className="popup__definition popup__definition_delete">Вы уверены?</h2>
          <button type="submit" className="popup__submit popup__submit_delete">Да</button>
        </div>
      </form>
    </div>
    </div>
  </body>
  );
}

export default App;
