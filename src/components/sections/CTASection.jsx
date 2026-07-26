import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function CTASection() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <section className="py-20 px-6">
      <div
        className={`max-w-5xl mx-auto rounded-3xl p-12 text-center shadow-xl ${
          darkMode
            ? "bg-zinc-900 border border-zinc-800"
            : "bg-white border border-gray-200"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Start Tracking Your
          <span className="text-red-500"> Fitness Today</span>
        </h2>

        <p className="mt-6 text-lg opacity-80 max-w-3xl mx-auto">
          Create your free FitZone account to explore hundreds of exercises,
          calculate your BMI, build personalized workouts, and monitor your
          fitness progress—all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <button
            onClick={() => navigate("/register")}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Create Free Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className={`px-8 py-4 rounded-xl font-semibold border transition-all duration-300 ${
              darkMode
                ? "border-white/20 hover:bg-white/10"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            Login
          </button>
        </div>

        <div className="mt-10">
          <p className="text-sm opacity-70 mb-4">
            Designed & Developed by
          </p>

          <h3 className="text-2xl font-bold text-red-500">
            Mayur Rajgude
          </h3>

          <div className="flex justify-center gap-8 mt-6 text-4xl">
            <a
              href="https://www.instagram.com/fit.mayurrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-125"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/mayurraj9378"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-all duration-300 hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mayurrajgude/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;