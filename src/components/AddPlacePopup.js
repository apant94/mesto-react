import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  return (
    <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} onClose={props.onClose}>
    <input id="place-input" type="text" name="name" className="popup__text popup__text_value_place" placeholder="Название" minLength="2" maxLength="30" required />
    <span className="popup__text-error place-input-error"></span>
    <input id="link-input" type="url" name="link" className="popup__text popup__text_value_link" placeholder="Ссылка на картинку" required />
    <span className="popup__text-error link-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;