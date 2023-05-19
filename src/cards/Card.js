import React, {useState, useEffect} from "react";
import styles from "./Card.module.css";

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
        <div className={styles.flashcard}>
            <button className={styles.btnFlip} onClick={() => setShowAnswer(!showAnswer)}>
                <div className={styles.flipIcon}></div>
            </button>
            <div className={styles.cardText}>
                {showAnswer ? (
                        <p>{currentCard.answer}</p>
                ) : (
                        <h3>{currentCard.question}</h3>
                )}
            </div>
            <div className={styles.btnContainer}>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Card;