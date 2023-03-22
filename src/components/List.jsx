import { useState } from 'react';
import Card from "./Card";

const List = (props) => {
  const [cards, setCards] = useState([{title: "Card 1", id: 1}, {title: "Card 2", id: 2}, {title: "Card 3", id: 3}]);

  return (
    <div className="list">
      {cards.map((card) => <Card title={card.title} key={card.id} />)}
    </div>
  )
}

export default List;
