import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6">
      
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 w-full max-w-md">
        
        <h1 className="text-4xl font-bold text-white text-center">
          LOGIN
        </h1>

        <form onSubmit={handleSubmit} className="mt-10">

          <div className="mb-6">
            <label className="text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg text-white font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;