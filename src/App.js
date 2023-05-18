import React, {useState} from 'react'
import AddCard from './forms/AddCard';
import CardTable from './tables/CardTable';

function App() {
  const sampleCards = [
    {id: 1, question: "What is the capital of France?", answer: "Paris"},
    {id: 2, question: "What is Canada's national sport?", answer: "Lacrosse"},
    {id: 3, question: "Who is credited for inventing the first computer?", answer: "Charles Babbage"}
  ]

  const [cards, setCards] = useState(sampleCards);

  const addCard = (card) => {
    card.id = cards.length + 1;
    setCards([...cards, card]);
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
        <AddCard addCard={addCard} />
        <CardTable cards={cards}/>
      </div>
    </div>
  );
}

export default App;
