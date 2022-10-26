import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="name-input"
        type="text"
        name="name"
        className="popup__text popup__text_value_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__text-error name-input-error"></span>
      <input
        id="job-input"
        type="text"
        name="about"
        className="popup__text popup__text_value_job"
        placeholder="Род деятельности"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__text-error job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
