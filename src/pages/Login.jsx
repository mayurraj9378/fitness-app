import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  HiEye,
  HiEyeOff
} from "react-icons/hi";

import toast from "react-hot-toast";

import { useTheme } from "../context/ThemeContext";

function Login() {

  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = (e) => {

    e.preventDefault();

    const loginData = {
      email,
      password
    };

    axios
      .post(
        "http://localhost:8080/auth/login",
        loginData
      )

      .then((response) => {

        localStorage.setItem(
          "token",
          response.data
        );

        toast.success(
          "Login Successful"
        );

        navigate("/dashboard");

      })

      .catch((error) => {

        console.log(error);

        toast.error(
          "Invalid Credentials"
        );

      });
  };

  return (

    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white flex items-center justify-center px-6 transition-all duration-300"
          : "min-h-screen bg-white text-black flex items-center justify-center px-6 transition-all duration-300"
      }
    >

      <div
        className={
          darkMode
            ? "bg-zinc-900 border border-white/10 rounded-3xl p-10 w-full max-w-md"
            : "bg-gray-100 border border-black/10 rounded-3xl p-10 w-full max-w-md"
        }
      >

        <h1 className="text-4xl font-bold text-center">

          LOGIN

          <span className="text-red-500">

            {" "}FITZONE

          </span>

        </h1>

        <p className="text-center mt-3 opacity-70">

          Welcome back to your fitness journey

        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6 mt-10"
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className={
              darkMode
                ? "w-full bg-black border border-white/10 rounded-xl p-4 outline-none focus:border-red-500"
                : "w-full bg-white border border-black/10 rounded-xl p-4 outline-none focus:border-red-500"
            }
          />

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className={
                darkMode
                  ? "w-full bg-black border border-white/10 rounded-xl p-4 outline-none focus:border-red-500"
                  : "w-full bg-white border border-black/10 rounded-xl p-4 outline-none focus:border-red-500"
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-xl opacity-70"
            >

              {
                showPassword
                  ? <HiEyeOff />
                  : <HiEye />
              }

            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 rounded-xl p-4 font-bold text-white transition duration-300"
          >

            Login

          </button>

        </form>

        <p className="text-center mt-6 opacity-70">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-red-500 hover:underline"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;