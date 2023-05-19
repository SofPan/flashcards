import React, {useState} from "react";

const Card = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentCard, setCurrentCard] = useState(props.cardArr[0]);


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
        </div>
    )
}

export default Card;