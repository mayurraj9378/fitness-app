
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { HiEye, HiEyeOff } from "react-icons/hi";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/auth/register",
        formData
      )

      .then(() => {

        setMessage(
          "Registration Successful"
        );

        navigate("/login");

      })

      .catch((error) => {

        console.log(error);

        setMessage(
          "Registration Failed"
        );

      });
  };

  return (

    <div className="bg-black min-h-screen flex items-center justify-center px-6">

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center">
          CREATE ACCOUNT
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Start your fitness journey today
        </p>

        <form onSubmit={handleSubmit} className="mt-10">

          <div className="mb-6">

            <label className="text-gray-300 block mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
            />

          </div>

          <div className="mb-6">

            <label className="text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
            />

          </div>

          <div className="mb-6">

            <label className="text-gray-300 block mb-2">
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
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-gray-400"
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

        <p className="text-center text-gray-400 mt-4">
          {message}
        </p>

        <p className="text-gray-400 text-center mt-6">

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

