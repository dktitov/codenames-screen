import React from 'react';

function Card(props) {
    return (
        <div className="card-container">
            {props.word}
        </div>
    );
}

export default Card;