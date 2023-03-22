import { useState } from 'react';
import Card from "./Card";

const List = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState("");

  const addCard = () => {
    const tempArr = [...cards];
    const card = {title: newCard, id: cards.length};
    tempArr.push(card);
    setCards(tempArr);
    setNewCard('');
  }

  return (
    <div className="list">
      <div className="add-card-form">
        <input type="text" value={newCard} className="new-card-input" onChange={(e) => setNewCard(e.target.value)}/><button onClick={addCard}>New Card</button>
      </div>
      {cards.map((card) => <Card title={card.title} key={card.id} />)}
    </div>
  )
}

export default List;
