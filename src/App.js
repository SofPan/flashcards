import React, {useState} from 'react'
import AddCard from './forms/AddCard';
import EditCard from './forms/EditCard';
import CardTable from './tables/CardTable';
import Card from './cards/Card';

function App() {
  const cardArr = [
    {id: 0, question: "What is the capital of France?", answer: "Paris"},
    {id: 1, question: "What is Canada's national sport?", answer: "Lacrosse"},
    {id: 2, question: "Who is credited for inventing the first computer?", answer: "Charles Babbage"}
  ]

  const [cards, setCards] = useState(cardArr);
  const [editing, setEditing] = useState(false);

  const initialState = {id: null, question:'', answer:''};
  const [currentCard, setCurrentCard] = useState(initialState);

  const [showing, setShowing] = useState(cardArr[0]);

  const addCard = (card) => {
    if(cards.length < 10){
      card.id = cards.length + 1;
      setCards([...cards, card]);
    } else {
      alert('10 card limit for demo version');
    }
  }

  const deleteCard = (id) => {
    setEditing(false);
    setCards(cards.filter((card) => card.id !== id));
  }

  const editCard = (card) => {
    setEditing(true);
    setCurrentCard({id: card.id, question: card.question, answer: card.answer});
  }

  const updateCard = (id, updatedCard) => {
    setEditing(false);

    setCards(cards.map((card) => (card.id === id ? updatedCard : card)));
  }

  const showCard = (id) => {
    setShowing(cards[id]);
  }

  return (
    <>
      <main>
        <h1>Flashcards Study Demo</h1>
        <div className="main-container flex">
          <div className="inner cards-container flex">
            <h2>Deck</h2>
            <Card 
              showing={showing}
              showCard={showCard} 
              cards={cards}
            />
          </div>
          <div className="inner options-container">
            <h2>Card Options</h2>
              {editing ? (
                <EditCard 
                  currentCard={currentCard}
                  setEditing={setEditing}
                  updateCard={updateCard}
                />
              ) : (
              <AddCard addCard={addCard} />
            )}
            <CardTable cards={cards} deleteCard={deleteCard} editCard={editCard} />

          </div>
        </div>
      </main>
      <footer>
        <p>View this project on <a target="_blank" rel="noreferrer" href="https://github.com/SofPan/flashcards.git">GitHub</a></p>
        <p>Return to <a target="_blank" rel="noreferrer" href="https://sofiapanchaud.com">sofiapanchaud.com</a></p>
      </footer>
    </>
  );
}

export default App;
