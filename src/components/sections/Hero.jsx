import { Link } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

function Hero() {

  const { darkMode } = useTheme();

  return (

    <section
      className={
        darkMode
          ? "bg-black text-white min-h-screen flex items-center transition-all duration-300"
          : "bg-white text-black min-h-screen flex items-center transition-all duration-300"
      }
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <div>

          <p className="text-red-500 font-bold text-lg mb-4">

            BUILD YOUR DREAM BODY

          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">

            Train Hard

            <br />

            Stay

            <span className="text-red-500">

              {" "}Fit

            </span>

          </h1>

          <p className="text-lg opacity-70 leading-8 mb-10">

            Achieve your fitness goals with smart workouts,
            personalized training plans, and powerful progress tracking.

          </p>

          <div className="flex gap-6 flex-wrap">

            <Link
              to="/exercises"
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold text-white transition duration-300"
            >

              Explore Exercises

            </Link>

            <Link
              to="/register"
              className={
                darkMode
                  ? "border border-white px-8 py-4 rounded-2xl font-bold hover:border-red-500 transition duration-300"
                  : "border border-black px-8 py-4 rounded-2xl font-bold hover:border-red-500 transition duration-300"
              }
            >

              Join Now

            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="Fitness"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;