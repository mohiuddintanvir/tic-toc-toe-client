import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { BiChevronLeft } from "react-icons/bi";

const Login = () => {
  //get useform from react hook form to easily get the data from inputs

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //
  const { signin } = useContext(AuthContext);

  // After login location set
  const location = useLocation();

  // navigate system set
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/newgame";

  // error state set
  const [loginError, SetloginError] = useState("");

  // diclier a call back function for onsubmit
  const handlelogin = (data) => {
    console.log(data);
    SetloginError("");
    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        SetloginError("Enter correct details.");
      });
  };

  return (
    <div >
      {/* page title code  */}
      <h1 className=" text-4xl mt-5 text-black">
        <Link to="/register">
          <BiChevronLeft />
        </Link>
      </h1>

      <h1 className="w-[39px] h-[ 14px] font-[Epilogue] font-[700] text-[14px] text-[#333333]">Login</h1>
      <h1 className="w-[255px] h-[64px] font-[Epilogue] font-[700] text-[#333333] text-[28px]">Please enter your details</h1>

      {/*    _____________________________ */}

      {/* login form  */}
      <form onSubmit={handleSubmit(handlelogin)} className='mt-10'>
        <label className="w-[76px] h-[14px] font-[Epilogue] font-[700] text-[14px] text-[#333333] " id=""> Email</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10  bg-[#F4F4F4]"
          {...register("email", { required: "username is required " })}
          placeholder="Type your username here"
        />
        <br />

        <label className="w-[76px] h-[14px] font-[Epilogue] font-[700] text-[14px] text-[#333333] " id="">Password</label>
        <br />
        <input
          className="w-[312px] h-[56px] top-[521px] left-[24px] rounded-[8px] p-[20px,16px,16px,16px]  mb-10  bg-[#F4F4F4]"
          {...register("password", { required: true })}
          placeholder="Type your password here"
        />
        <br />

        {/* Error massage show code */}
        {/* {errors.email?.type === 'required' && <p className="" role="alert">Enter correct details.</p>}
        {errors.password?.type === 'required' && <p className="" role="alert">Enter correct details.</p>} */}
        {
          loginError?<p className="w-[328px] h-[74px] bg-[#EB5757] rounded-[8px] py-6 pl-2 text-[#FFFFFF]">{loginError}</p>:<p className="bg-white"></p>
        }
        

        {/* Register button code */}

        <button className="btn btn-warning h-[56px]  left-[0px] right-[0px] top-[0px] w-[328px] drop-shadow-[ 2px 2px 16px rgba(0, 0, 0, 0.16)] rounded-[8px] mt-3  ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
