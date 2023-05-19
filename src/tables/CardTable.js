import React from 'react';
import styles from './Table.module.css';

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
                            <td className={styles.w60}>
                                <p>{card.question}</p>
                            </td>
                            <td className={styles.w40}>
                                <button
                                    onClick={() => {
                                        props.editCard(card)
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => props.deleteCard(card.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Cards</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default CardTable;