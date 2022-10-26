export default function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onDeleteClick(props.card);
  }

  return (
    <li className="element">
      <button
        type="button"
        className="element__trash"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="element__title-container">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__column">
          <button type="button" className="element__like"></button>
          <p className="element__counter">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}
