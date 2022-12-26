import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className=' '>
            <div className='mt-20'>
                <h1 className='text-xl text-[#000000] text-center'>async</h1>
            <p className='text-[80px] font-[Bilbo] text-center text-[#000000]'>tic tac</p>
            <p className='text-[80px]  font-[Bilbo] text-center text-[#000000]'>toe</p> 
            </div>
           
            <div className='mt-20'>
                       <Link to='/login'> <button className="btn btn-warning w-full lg:w-96">Login </button></Link><br />
            <Link to='/register'><button className="btn bg-blue-500 w-full lg:w-96 text-black mt-5">Register</button></Link>    
            </div>


        </div>
    );
};

export default Home;