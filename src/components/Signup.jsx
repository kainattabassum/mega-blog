import React, { useState } from "react";
import { login } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Logo from "./index";

function Signup() {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm(null);

  const create = async (data) => {
    setError("");
    try {
      const response = await authService.createAccount(data);
      if (response) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch.login(userData);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/signin"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form className="mt-8" onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <InputField
              label="Fullname: "
              placeholder="Enter your Fullname"
              type="email"
              {...register("name", {
                required: true,
              })}
            />

            <InputField
              label="Email: "
              placeholder="Enter your Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <InputField
              label="Passwor0d: "
              placeholder="Enter your Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
