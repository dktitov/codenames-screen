import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    const [idInput, setIdInput] = useState('');
    const handleOnChange = e => setIdInput(e.target.value);
    const handleSubmit = e => {
        props.history.push(`/games/${idInput.trim()}`);

        e.preventDefault();
    };
    const handleOnInvalid = e => e.target.setCustomValidity('Ты шо, тупой? Заполни');

    return (
        <>
            <header>
                <h1>RJDT69 codenames</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label>Введите id игры: </label>
                <input
                    required
                    type="text"
                    placeholder="id"
                    onChange={handleOnChange}
                    onInvalid={handleOnInvalid}
                />
                <input type="submit" value="Найти" />
            </form>
        </>
    );
}

export default withRouter(WelcomeScreen);