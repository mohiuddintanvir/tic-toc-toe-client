import React from 'react';

const GameInfo = ({game}) => {
    const{gamer_name,email}=game
    return (
        <div>
            <h1>{email}</h1>
            <h1>{gamer_name}</h1>
        </div>
    );
};

export default GameInfo;