import React from 'react';
import Card from '../Card';

import './Field.css';

function Field(props) {
    return (
        <div className="field">
            {props.words.map(card => (
                <Card
                key={`${card.word}`}
                word={card.word}
                guessed={card.guessed}
                color={card.color}
                />
            ))}
        </div>
    );
}

export default Field;