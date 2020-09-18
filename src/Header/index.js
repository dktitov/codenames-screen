import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className="header-container">
            <div>{`${props.hint.word}, ${props.hint.count}`}</div>
            <div>{`${props.score.red}:${props.score.blue}`}</div>
            <div>{`Ход ${props.turn === 'red' ? 'красных' : 'синих' }`}</div>
        </div>
    );
}

export default Header;