import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    reset();
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center h-[90vh] max-w-[25rem] mx-auto"
        >
          <h1 className="heading-2 uppercase">LOGIN</h1>
          <div className="border w-full  pl-4 py-3 mt-5 focus-within:border-[#1C1B1B]">
            <input
              type="email"
              className="w-full h-full outline-none"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Enter a valid email",
                },
              })}
            />
          </div>
          <small className="text-red-600">{errors.email?.message}</small>
          <div className="flex justify-between border w-full  px-4 py-3 mt-5 focus-within:border-[#1C1B1B]">
            <input
              type="password"
              className=" h-full min-w-[120px] sm:w-[235px] outline-none "
              placeholder="Password"
              maxLength={16}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 16,
                  message: "Password cannot exceed 16 characters",
                },
                validate: (value) =>
                  value.includes(" ") ? "Password cannot contain spaces" : true,
              })}
            />
            {/* <span className="min-w-[128px] text-[#6A6A6A]">
              {" "}
              Forgot Password?
            </span> */}
          </div>
          <small className="text-red-600">{errors.password?.message}</small>

          <button type="submit" className="btn primary-btn w-full mt-10">
            LOGIN
          </button>
          <p className="mt-5 font-light text-[#6A6A6A]">
            Don't have an account?
            <span className="text-[#1C1B1B]">
              <Link to={"/Signup"}> Create one</Link>
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
