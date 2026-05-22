
import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleLogin = () => {

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

        setMessage("Login Successful");

        console.log(response.data);

        // REDIRECT
        navigate("/dashboard");

      })

      .catch((error) => {

        console.log(error);

        setMessage("Invalid Credentials");

      });
  };

  return (

    <div className="bg-black min-h-screen flex items-center justify-center px-6">

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-8">

          LOGIN <span className="text-red-500">FITZONE</span>

        </h1>

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-black border border-white/10 rounded-xl p-4 text-white"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-black border border-white/10 rounded-xl p-4 text-white"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 rounded-xl p-4 font-bold text-white"
          >

            Login

          </button>

          <p className="text-center text-gray-400">

            {message}

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;

