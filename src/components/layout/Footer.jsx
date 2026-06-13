import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function Footer() {

  const { darkMode } = useTheme();

  return (

    <footer
      className={
        darkMode
          ? "bg-zinc-950 border-t border-white/10 mt-20 transition-all duration-300"
          : "bg-gray-100 border-t border-black/10 mt-20 transition-all duration-300"
      }
    >

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* LEFT */}

          <div>

            <h1 className="text-3xl font-bold">

              FIT

              <span className="text-red-500">

                ZONE

              </span>

            </h1>

            <p className="opacity-70 mt-2">

              Transform your body and mind.

            </p>

          </div>

          {/* CENTER */}

          <div className="flex gap-6 text-lg">

            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >

              Home

            </a>

            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >

              Exercises

            </a>

            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >

              Workouts

            </a>

            <a
              href="#"
              className="hover:text-red-500 transition duration-300"
            >

              Contact

            </a>

          </div>

          {/* RIGHT */}

          <div className="flex gap-5 text-2xl">

            <a
              href="#"
              className="hover:text-pink-500 transition duration-300"
            >

              <FaInstagram />

            </a>

            <a
              href="#"
              className="hover:text-gray-500 transition duration-300"
            >

              <FaGithub />

            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition duration-300"
            >

              <FaLinkedin />

            </a>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className={
            darkMode
              ? "border-t border-white/10 mt-8 pt-6 text-center opacity-60"
              : "border-t border-black/10 mt-8 pt-6 text-center opacity-60"
          }
        >

          © 2026 FitZone. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;