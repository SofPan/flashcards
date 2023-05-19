import React, {useState} from 'react'
import AddCard from './forms/AddCard';
import EditCard from './forms/EditCard';
import CardTable from './tables/CardTable';

function App() {
  const cardArr = [
    {id: 1, question: "What is the capital of France?", answer: "Paris"},
    {id: 2, question: "What is Canada's national sport?", answer: "Lacrosse"},
    {id: 3, question: "Who is credited for inventing the first computer?", answer: "Charles Babbage"}
  ]

  const [cards, setCards] = useState(cardArr);
  const [editing, setEditing] = useState(false);

  const initialState = {id: null, question:'', answer:''};
  const [currentCard, setCurrentCard] = useState(initialState);

  const addCard = (card) => {
    if(cards.length < 10){
      card.id = cards.length + 1;
      setCards([...cards, card]);
    } else {
      alert('10 card limit for demo version');
    }
  }

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  }

  const editCard = (card) => {
    setEditing(true);
    setCurrentCard({id: card.id, question: card.question, answer: card.answer});
  }

  return (
    <div className="container">
      <h1>Flashcards Study Demo</h1>
      <div className="cards">
        {/* Cards render here */}
        {/* Reset and shuffle buttons */}
        <h2>Deck</h2>
      </div>
      <div className="options">
        <h2>Card Options</h2>
          {editing ? (
            <EditCard 
              currentCard={currentCard}
            />
          ) : (
          <AddCard addCard={addCard} />
        )}
        <CardTable cards={cards} deleteCard={deleteCard} editCard={editCard} />

      </div>
    </div>
  );
}

export default App;
