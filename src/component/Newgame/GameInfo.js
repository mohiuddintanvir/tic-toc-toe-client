import React from 'react';
import { Link } from 'react-router-dom';

const GameInfo = ({game}) => {
    const{gamer_name,date}=game
    return (
        <div>
            <div className=" w-80 bg-[#FFFFFF] shadow-xl">
  <div className="">
    <h2 className="ml-1">Game with {gamer_name} </h2>
    <p>{date}</p>
    <div className="">
    <Link to='/gamepage'><button className=" bg-[#F2C94C] w-full h-8 text-sm">Play!</button></Link>  
    </div>
  </div>
</div>
          
           
        </div>
    );
};

export default GameInfo;