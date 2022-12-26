import React, { useContext } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

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
      <h1 className=" text-4xl mt-5">
        <BiChevronLeft />
      </h1>
      <h1>Create account</h1>
      <h1>Let's get to know you better!</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label id="name " className="">
          Your name
        </label>
        <br />
        <input
          id="name"
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-5 "
          {...register("name", { required: true })}
          placeholder="Type your name here"
        />{" "}
        <br />
        <label id="">Your name</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10 "
          {...register("username", { required: true })}
          placeholder="Type your username here"
        />
        <br />
        <label id="">Your name</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10 "
          {...register("email", { required: true })}
          placeholder="Type your email here"
        />
        <br />
        <label id="">Your name</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10  "
          {...register("password", { required: true })}
          placeholder="Type your password here"
        />
        <br />
        <button className="btn btn-warning h-[56px]  left-[0px] right-[0px] top-[0px] w-[328px] drop-shadow-[ 2px 2px 16px rgba(0, 0, 0, 0.16)] rounded-[8px] mt-3  ">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
