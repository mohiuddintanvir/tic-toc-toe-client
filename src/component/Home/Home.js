import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className=' '>
            <div className='mt-20'>
                <h1 className='text-xl'>async</h1>
            <p className='text-[80px] font-[Bilbo]'>tic tac</p>
            <p className='text-[80px]'>toe</p> 
            </div>
           
            <div className='mt-60'>
                       <Link to='/login'> <button className="btn btn-warning w-full lg:w-96">Login </button></Link><br />
            <Link to='/register'><button className="btn bg-blue-500 w-full lg:w-96 text-black mt-5">Register</button></Link>    
            </div>


        </div>
    );
};

export default Home;