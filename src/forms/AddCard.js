import React, { useState } from "react";

const AddCard = (props) => {
    const initialState = {id: null, question: '', answer: ''};
    const [card, setCard] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setCard({...card, [name]: value})
    }

    return(
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!card.question || !card.answer) return
                
                setCard(initialState);
            }}
        >
            <label>Question</label>
            <input 
                type="text" 
                name="question" 
                value={card.question} 
                onChange={handleInputChange}
            />
            <label>Answer</label>
            <input 
                type="text"
                name="answer"
                value={card.answer}
                onChange={handleInputChange}
            />
            <button>Add Card</button>

        </form>
    )
}

export default AddCard;