import React, { useContext } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  //get useform from react hook form
  const { register, handleSubmit } = useForm();

  const { createUser, updateuser } = useContext(AuthContext);

  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        // Using react hot toast here
        toast.success('Congratulations!!! Account created.')

        const updateUsername = {
          displayName: data.username,
        };
        console.log(updateUsername);
        updateuser(updateUsername)
          // there is no eventhandler thats why we use empty handler here
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <h1 className=" text-4xl mt-5 text-black">
        <Link to='/'><BiChevronLeft /></Link>
        
      </h1>
      <h1 className="text-black w-[114px] h-[14px] font-[Epilogue] font-[700]">Create account</h1>
      <h1 className="w-[255px] h-[64px] font-[Epilogue] font-[700] text-[#333333] text-[28px] ">Let's get to know you better!</h1>
      <form onSubmit={handleSubmit(handleRegister)} className='mt-10'>
        <label className="w-[76px] h-[14px] font-[Epilogue] font-[700] text-[14px] text-[#333333] " id="name "  >
          Your name
        </label>
        <br />
        <input
          id="name"
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-5  bg-[#F4F4F4]"
          {...register("name", { required: true })}
          placeholder="Type your name here"
        />{" "}
        <br />
        <label className="w-[76px] h-[14px] font-[Epilogue] font-[700] text-[14px] text-[#333333]" id="">Username</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10  bg-[#F4F4F4]"
          {...register("username", { required: true })}
          placeholder="Type your username here"
        />
        <br />
        <label className="w-[76px] h-[14px] font-[Epilogue] font-[700] text-[14px] text-[#333333]" id="">Email</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10  bg-[#F4F4F4]"
          {...register("email", { required: true })}
          placeholder="Type your email here"
        />
        <br />
        <label className="w-[76px] h-[14px] font-[Epilogue] font-[700] text-[14px] text-[#333333]" id="">Password</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px] mb-3  bg-[#F4F4F4] "
          {...register("password", { required: true })}
          placeholder="Type your password here"
        />
        <br />
        <button className="btn btn-warning text-[#FFFFFF]  left-[0px] right-[0px]  w-[328px] drop-shadow-[ 2px 2px 16px rgba(0, 0, 0, 0.16)] rounded-[8px]  ">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
