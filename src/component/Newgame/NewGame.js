import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GameInfo from './GameInfo';

const NewGame = () => {
    const [gameinfo,setgameinfo]=useState([]);
    useEffect(()=>{
        fetch('https://tic-toc-toe-server.vercel.app/gameinfo')
        .then(res=>res.json())
        .then(data=>setgameinfo(data))
    },[])
    return (
        <div className=''>
        <h1 className='text-center mt-3'>Your Games</h1>
        
        <div className='grid grid-cols-1  mb-3 ml-5 gap-1'>
         
         {gameinfo?
            gameinfo.map(game=><GameInfo key={game.id} game={game}></GameInfo>): <p>No Games
Found</p> 
        }  
       
        </div>
        
        <Link to='/gameform'>    <button className="btn btn-warning w-96 mb-2">Start a new game</button></Link>
    
        </div>
    );
};

export default NewGame;