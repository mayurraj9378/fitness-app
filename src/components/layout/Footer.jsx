import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDumbbell,
} from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden mt-20 border-t transition-all duration-500 ${
        darkMode
          ? "bg-zinc-950 border-white/10"
          : "bg-gray-100 border-black/10"
      }`}
    >
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-red-500/10 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-red-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">

          {/* Logo */}

          <div className="text-center md:text-left">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="bg-red-500 p-3 rounded-xl shadow-lg transition duration-300 group-hover:rotate-12">

                <FaDumbbell className="text-white text-lg" />

              </div>

              <div>

                <h2 className="text-3xl font-extrabold tracking-wide">

                  FIT
                  <span className="text-red-500">ZONE</span>

                </h2>

                <p className="text-sm opacity-70">

                  Fitness • Progress • Strength

                </p>

              </div>

            </Link>

            <p className="mt-5 max-w-sm leading-7 opacity-70">

              Build workouts, explore exercises,
              calculate BMI, and monitor your
              progress with FitZone.

            </p>

          </div>

          {/* Get Started */}

          <div className="flex justify-center">

            <Link
              to="/register"
              className="group relative overflow-hidden rounded-2xl bg-red-500 px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/50"
            >

              <span className="relative z-10">

                Get Started

              </span>

              <span className="absolute inset-0 origin-left scale-x-0 rounded-2xl bg-red-600 transition-transform duration-500 group-hover:scale-x-100" />

            </Link>

          </div>

          {/* Social Icons */}

          <div className="flex justify-center gap-5 md:justify-end">

            <a
              href="https://www.instagram.com/fit.mayurrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/10 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-pink-500"
            >
              <FaInstagram className="text-2xl group-hover:text-white" />
            </a>

            <a
              href="https://github.com/mayurraj9378"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gray-700"
            >
              <FaGithub className="text-2xl group-hover:text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/mayurrajgude/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-blue-600"
            >
              <FaLinkedin className="text-2xl group-hover:text-white" />
            </a>

          </div>

        </div>

        {/* ===== Divider starts in Part 2 ===== */}
                {/* Divider */}

        <div
          className={`mt-12 h-px w-full ${
            darkMode
              ? "bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
              : "bg-gradient-to-r from-transparent via-red-400 to-transparent"
          }`}
        />

        {/* Bottom Section */}

        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Copyright */}

          <div className="text-center md:text-left">

            <p className="text-sm opacity-80">

              © 2026 <span className="font-semibold">FitZone</span>. All Rights Reserved.

            </p>

            

          </div>

          {/* Developer */}

          <div className="text-center">

            <p className="text-sm opacity-70">

              Designed & Developed by

            </p>

            <a
              href="https://www.linkedin.com/in/mayurrajgude/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-red-500 transition duration-300 hover:text-red-400"
            >
              Mayur Rajgude
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;