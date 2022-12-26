import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


const GameForm = () => {
  
  
  const navigate=useNavigate()

  
    const { register, handleSubmit } = useForm();


    const handlelogin = (data) => {
        console.log(data);




        fetch('https://tic-toc-toe-server.vercel.app/gameinfo', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })



          .then(res => res.json())
          .then(data => {
              if (data.acknowledged) {
                  alert('Game details add  successfully')
navigate('/gamepage')
                  
              }
              console.log(data)
          })
          .catch(err => console.error(err))
    
    
    }


    return (
        <div>
            <h1>new game form</h1>


            <form onSubmit={handleSubmit(handlelogin)}>
        <label id="">Email</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10 "
          {...register("email", { required:true})}
          placeholder="Type their email here"
        />
        <br />

        <label id="">Player name</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10 "
          {...register("gamer_name", { required: true })}
          placeholder="Type their name here" required
        />
        <br />

        <button className="btn btn-warning h-[56px]  left-[0px] right-[0px] top-[0px] w-[328px] drop-shadow-[ 2px 2px 16px rgba(0, 0, 0, 0.16)] rounded-[8px] mt-3  ">
        Start game
        </button>
        
        
      </form>
       
            
        </div>
    );
};

export default GameForm;
