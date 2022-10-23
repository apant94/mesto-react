function Main() {
  return(  
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div className="profile__avatar"></div>
          <div className="profile__edit-avatar"></div> 
        </div> 
        <div className="profile__info">
          <div className="profile__first-line">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit"></button>
          </div>
          <p className="profile__job"></p>
        </div>
        <button type="button" className="profile__add"></button>
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
  )
}

export default Main;