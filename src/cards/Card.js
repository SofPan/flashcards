import React, {useState} from "react";

const Card = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentCard, setCurrentCard] = useState(props.showing);
    const handlePrev = (event) => {
        event.preventDefault();
        const newId = currentCard.id - 1;
        if (newId <= 1){
            alert('there is no previous card');
            setCurrentCard(currentCard);
        }
        setCurrentCard(props.cards.map((card) => (card.id === newId)));
    }

    const handleNext = (event) => {
        event.preventDefault();
        const newId = currentCard.id + 1;
        if (newId >= props.cards.length){
            alert('there is no next card');
            setCurrentCard(currentCard);
        }
        setCurrentCard(props.cards.id === newId);
    }

    return(
        <div className="flashcard">
            <button onClick={() => setShowAnswer(!showAnswer)}>
                <span className="flip"></span>
            </button>
            <div>
                {showAnswer ? (
                    <p className="card-answer">{currentCard.answer}</p>
                ) : (
                    <h3>{currentCard.question}</h3>
                )}
            </div>
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Card;