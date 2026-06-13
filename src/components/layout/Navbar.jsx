import { Link } from "react-router-dom";

import { FaDumbbell } from "react-icons/fa";

import { useState } from "react";

import {
  HiMenu,
  HiX
} from "react-icons/hi";

import { useTheme } from "../../context/ThemeContext";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const {
    darkMode,
    toggleTheme
  } = useTheme();

  return (

    <nav
      className={
        darkMode
          ? "bg-black/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-lg transition-all duration-300"
          : "bg-white/90 border-b border-black/10 sticky top-0 z-50 backdrop-blur-lg transition-all duration-300"
      }
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >

          <FaDumbbell className="text-red-500" />

          FitZone

        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-8">

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

          {/* THEME BUTTON */}

          <button
            onClick={toggleTheme}
            className={
              darkMode
                ? "border border-white px-4 py-2 rounded-lg hover:border-red-500 transition"
                : "border border-black px-4 py-2 rounded-lg hover:border-red-500 transition"
            }
          >

            {
              darkMode
                ? "Light"
                : "Dark"
            }

          </button>

          {/* JOIN BUTTON */}

          <Link
            to="/register"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition duration-300 text-white"
          >

            Join Now

          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="md:hidden text-3xl"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {
            menuOpen
              ? <HiX />
              : <HiMenu />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className={
            darkMode
              ? "md:hidden bg-zinc-900 px-6 py-4 flex flex-col gap-4 text-white"
              : "md:hidden bg-gray-100 px-6 py-4 flex flex-col gap-4 text-black"
          }
        >

          <Link
            to="/"
            className="hover:text-red-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            Home

          </Link>

          <Link
            to="/exercises"
            className="hover:text-red-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            Exercises

          </Link>

          <Link
            to="/workouts"
            className="hover:text-red-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            Workout Plans

          </Link>

          <Link
            to="/dashboard"
            className="hover:text-red-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            Dashboard

          </Link>

          {/* THEME BUTTON */}

          <button
            onClick={toggleTheme}
            className={
              darkMode
                ? "border border-white px-4 py-2 rounded-lg hover:border-red-500 transition"
                : "border border-black px-4 py-2 rounded-lg hover:border-red-500 transition"
            }
          >

            {
              darkMode
                ? "Light"
                : "Dark"
            }

          </button>

          {/* JOIN BUTTON */}

          <Link
            to="/register"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-center transition duration-300 text-white"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            Join Now

          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;