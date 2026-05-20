import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-black/70 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <FaDumbbell className="text-red-500" />
          FitZone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">

          <Link
            to="/"
            className="hover:text-red-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/exercises"
            className="hover:text-red-500 transition duration-300"
          >
            Exercises
          </Link>

          <Link
            to="/workouts"
            className="hover:text-red-500 transition duration-300"
          >
            Workout Plans
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-red-500 transition duration-300"
          >
            Dashboard
          </Link>

          <button
            onClick={toggleTheme}
            className="border border-white px-4 py-2 rounded-lg hover:border-red-500 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <Link
            to="/register"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition duration-300"
          >
            Join Now
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 px-6 py-4 flex flex-col gap-4 text-white">

          <Link
            to="/"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/exercises"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Exercises
          </Link>

          <Link
            to="/workouts"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Workout Plans
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <button
            onClick={toggleTheme}
            className="border border-white px-4 py-2 rounded-lg hover:border-red-500 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <Link
            to="/register"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-center transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;