import React, { useState } from "react";
import styles from './Form.module.css';

const AddCard = (props) => {
    const initialState = {id: null, question: '', answer: ''};
    const [card, setCard] = useState(initialState);
    const [newCard, setNewCard] = useState(false);

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setCard({...card, [name]: value})
    }

    // const handleClick = () => {
    //     setNewCard(!newCard);
    // }

    return(
        <>
        { newCard ? (
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        if (!card.question || !card.answer) return
                        
                        props.addCard(card);
                        setCard(initialState);
                        setNewCard(!newCard);
                    }}
                >
                    <div>
                        <label>Question</label>
                        <input 
                            type="text" 
                            name="question" 
                            value={card.question} 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Answer</label>
                        <input 
                            type="text"
                            name="answer"
                            value={card.answer}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.divBlock}>
                        <button>Add Card</button>
                        <button onClick={() => setNewCard(!newCard)}>Cancel</button>
                    </div>
                </form>
            ) : (
                <button onClick={() => setNewCard(!newCard)}>New Card</button>
            )}
        </>
    )
}

export default AddCard;