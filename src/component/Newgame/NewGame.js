import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GameInfo from './GameInfo';

const NewGame = () => {
    const [gameinfo,setgameinfo]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/gameinfo')
        .then(res=>res.json())
        .then(data=>setgameinfo(data))
    },[])
    return (
        <div>
        <h1>Your Games</h1>
        {
            gameinfo.map(game=><GameInfo key={game.id} game={game}></GameInfo>)
        }
        <Link to='/gameform'>    <button className="btn btn-warning w-96">Start a new game</button></Link>
    
        </div>
    );
};

export default NewGame;