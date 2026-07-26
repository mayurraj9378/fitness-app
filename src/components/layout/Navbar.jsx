import { Link, useLocation } from "react-router-dom";
import {
  FaDumbbell,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { useTheme } from "../../context/ThemeContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/exercises", label: "Exercises" },
  { to: "/workouts", label: "Workouts" },
  { to: "/dashboard", label: "Dashboard" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        darkMode
          ? "bg-black/80 border-b border-white/10"
          : "bg-white/80 border-b border-gray-200"
      } ${scrolled ? "shadow-xl" : ""}`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold group"
        >
          <div className="bg-red-500 p-2 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <FaDumbbell className="text-white text-lg" />
          </div>

          <span>
            FIT<span className="text-red-500">ZONE</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative transition duration-300 hover:text-red-500 ${
                isActive(link.to) ? "text-red-500" : ""
              }`}
            >
              {link.label}

              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                  isActive(link.to) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              darkMode
                ? "bg-zinc-800 hover:bg-zinc-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg transition-transform duration-300 hover:rotate-180" />
            ) : (
              <FaMoon className="text-gray-700 text-lg transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Register */}
          <Link
            to="/register"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white font-semibold transition duration-300 shadow-lg hover:shadow-red-500/40 hover:-translate-y-0.5"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${
          darkMode
            ? "bg-zinc-900 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${
                isActive(link.to)
                  ? "text-red-500 font-semibold"
                  : "hover:text-red-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 transition ${
              darkMode
                ? "bg-zinc-800"
                : "bg-white"
            }`}
          >
            {darkMode ? (
              <>
                <FaSun className="text-yellow-400" />
                Light Mode
              </>
            ) : (
              <>
                <FaMoon />
                Dark Mode
              </>
            )}
          </button>

          <Link
            to="/register"
            className="bg-red-500 hover:bg-red-600 py-3 rounded-xl text-center text-white font-semibold"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;