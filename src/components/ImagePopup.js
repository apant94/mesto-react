function ImagePopup(props) {
  return (
    <div className="popup popup_image">
      <div className="popup__image-container">
        <button type="button" className="popup__close"></button>
        <img src="#" alt="#" className="popup__image-item" />
        <p className="popup__image-name">Название</p>
      </div>
    </div>
  );
}

export default ImagePopup;