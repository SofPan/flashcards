import React, {useState} from 'react'
import CardTable from './tables/CardTable';

function App() {
  const sampleCards = [
    {id: 1, question: "What is the capital of France?", answer: "Paris"},
    {id: 2, question: "What is Canada's national sport?", answer: "Lacrosse"},
    {id: 3, question: "Who is credited for inventing the first computer?", answer: "Charles Babbage"}
  ]

  const [cards, setCard] = useState(sampleCards);

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
        <CardTable cards={cards}/>
      </div>
    </div>
  );
}

export default App;
