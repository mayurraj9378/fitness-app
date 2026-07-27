import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import axios from "axios";
import API_BASE from "../config/api";

import {
  HiEye,
  HiEyeOff
} from "react-icons/hi";

import toast from "react-hot-toast";

import { useTheme } from "../context/ThemeContext";

function Register() {

  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .post(
        `${API_BASE}/auth/register`,
        formData
      )

      .then(() => {

        toast.success(
          "Registration Successful"
        );

        navigate("/login");

      })

      .catch((error) => {

        console.log(error);

        toast.error(
          error.response?.data?.message ||
          "Registration Failed"
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

          CREATE ACCOUNT

        </h1>

        <p className="text-center mt-3 opacity-70">

          Start your fitness journey today

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10"
        >

          <div className="mb-6">

            <label className="block mb-2">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className={
                darkMode
                  ? "w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
                  : "w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              }
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2">

              Email

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className={
                darkMode
                  ? "w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
                  : "w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              }
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2">

              Password

            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className={
                  darkMode
                    ? "w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
                    : "w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 opacity-70"
              >

                {
                  showPassword
                    ? <HiEyeOff />
                    : <HiEye />
                }

              </button>

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg text-white font-semibold transition duration-300"
          >

            Register

          </button>

        </form>

        <p className="text-center mt-6 opacity-70">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-red-500 hover:underline"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;