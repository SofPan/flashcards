import React, {useState} from "react"

const EditCard = (props) => {
    const [card, setCard] = useState(props.currentCard);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCard({...card, [name]: value});
    }

    return(
        <form
            onSubmit={event => {
                event.preventDefault();
                
                props.updateCard(card.id, card);
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
            <button>Update Card</button>
            <button
                onClick={() => props.setEditing(false)}
            >
                Cancel
            </button>

        </form>
    )
}

export default EditCard;