import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
  <body className="root">
    <div className="page">
    <Header />
    <Main />
    <Footer />

    <div className="popup popup_edit">
      <form name="popup-edit" id="popup-edit" className="popup__container popup__container_edit" novalidate>
        <button type="button" className="popup__close"></button>
        <div className="popup__wrapper">
          <h2 className="popup__definition">Редактировать профиль</h2>
          <input id="name-input" type="text" name="name" class="popup__text popup__text_value_name" placeholder="Имя" minlength="2" maxlength="40" required />
          <span className="popup__text-error name-input-error"></span>
          <input id="job-input" type="text" name="about" className="popup__text popup__text_value_job" placeholder="Род деятельности" minlength="2" maxlength="200" required />
          <span class="popup__text-error job-input-error"></span>
          <button type="submit" class="popup__submit">Сохранить</button>
        </div>
      </form>
    </div>

    <div className="popup popup_edit-avatar">
      <form name="popup-edit-avatar" id="popup-edit-avatar" className="popup__container popup__container_edit-avatar" novalidate>
        <button type="button" className="popup__close"></button>
        <div className="popup__wrapper">
          <h2 className="popup__definition">Обновить аватар</h2>
          <input id="avatar-input" type="url" name="avatar" className="popup__text popup__text_value_avatar popup__text_type_edit-avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__text-error avatar-input-error"></span>
          <button type="submit" className="popup__submit">Сохранить</button>
        </div>
      </form>
    </div>

    <div className="popup popup_add">
      <form name="popup-add" id="popup-add" className="popup__container popup__container_add" novalidate>
        <button type="button" className="popup__close"></button>
        <div className="popup__wrapper">
          <h2 className="popup__definition">Новое место</h2>
          <input id="place-input" type="text" name="name" className="popup__text popup__text_value_place" placeholder="Название" minlength="2" maxlength="30" required />
          <span className="popup__text-error place-input-error"></span>
          <input id="link-input" type="url" name="link" className="popup__text popup__text_value_link" placeholder="Ссылка на картинку" required />
          <span className="popup__text-error link-input-error"></span>
          <button type="submit" className="popup__submit popup__submit-add">Создать</button>
        </div>
      </form>
    </div>

    <div className="popup popup_delete">
      <form action="" className="popup__container">
        <button type="button" className="popup__close"></button>
        <div className="popup__wrapper">
          <h2 className="popup__definition popup__definition_delete">Вы уверены?</h2>
          <button type="submit" className="popup__submit popup__submit_delete">Да</button>
        </div>
      </form>
    </div>

    <div className="popup popup_image">
      <div className="popup__image-container">
        <button type="button" className="popup__close"></button>
        <img src="#" alt="#" className="popup__image-item" />
        <p className="popup__image-name">Название</p>
      </div>
    </div>
    </div>
  </body>
  );
}

export default App;
