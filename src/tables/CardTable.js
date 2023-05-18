import React from 'react'

const CardTable = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.cards.length > 0 ? (
                    props.cards.map((card) => (
                        <tr key={card.id}>
                            <td>{card.question}</td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </tr>
                    ))
                ) : props.cards.length === 0 (
                    <tr>
                        <td colSpan={3}>No Cards</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default CardTable;