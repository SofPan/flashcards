import React, {useState, useEffect} from "react";
import styles from "./Card.styles.module.css";

const Card = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentCard, setCurrentCard] = useState(props.showing);


    const handlePrev = (event) => {
        event.preventDefault();
        const newId = currentCard.id - 1;
        if (newId < 0){
            alert('there is no previous card');
            setCurrentCard(currentCard);
        }
        props.showCard(newId);
    }

    const handleNext = (event) => {
        event.preventDefault();
        const newId = currentCard.id + 1;
        if (newId >= props.cards.length){
            alert('there is no next card');
            setCurrentCard(currentCard);
        }
        props.showCard(newId);
    }
    
    useEffect(() => {
        setCurrentCard(props.showing);
    }, [props])

    return(
        <div className="flashcard">
            <button className="btn-flip" onClick={() => setShowAnswer(!showAnswer)}>
                <span className="flip-icon"></span>
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