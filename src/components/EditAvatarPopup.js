import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose}>
    <input id="avatar-input" type="url" name="avatar" className="popup__text popup__text_value_avatar popup__text_type_edit-avatar" placeholder="Ссылка на картинку" required />
    <span className="popup__text-error avatar-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;