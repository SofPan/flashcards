import React, {useState} from "react";

const Card = (props) => {
    // const [showAnswer, setShowAnswer] = useState(false);
    const testReturn = props.cardArr[0];
    return(
        <div className="flashcard">
            <h2>{testReturn.question}</h2>
            <p>{testReturn.answer}</p>
        </div>
    )
}

export default Card;