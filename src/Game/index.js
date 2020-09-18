import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socketIO from 'socket.io-client';
import './Game.css';
import Header from '../Header';
import Field from '../Field';

const ENDPOINT = 'http://localhost:4001';

function Game() {

    const  [game, setGame ] = useState(null);
    const { gameId } = useParams();

    useEffect(() => {
        if (gameId !== '123') { //REMOVE WHEN FETCH WILL BE ADDED
            return;
        }

        const words = new Array(25).fill({ word: 'word', guessed: 'false', color: 'red' });
        const hint = {word: 'Подсказка', count: '3' };
        const score = { red: 0, blue: 0 };
        const turn = 'red';

        setGame({ words, hint, score, turn });

        const socket = socketIO(ENDPOINT);

        socket.on('FillThis', game => {
            setGame(game);
        });

        return () => socket.disconnect();
    }, [gameId]);

    if (!game) {
        return (
            <div>NOT FOUND</div>
        );
    }

    return (
        <div className="game-container">
            <Header
                hint={game.hint}
                score={game.score}
                turn={game.turn}
            />
            <Field words={game.words} />
        </div>
    )
}

export default Game;