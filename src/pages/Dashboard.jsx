import {
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaRunning
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Dashboard() {

  const { darkMode } = useTheme();

  const stats = [

    {
      title: "Calories Burned",
      value: "1240",
      icon: <FaFire />,
      color: "text-orange-500",
    },

    {
      title: "Workouts Done",
      value: "18",
      icon: <FaDumbbell />,
      color: "text-red-500",
    },

    {
      title: "Heart Rate",
      value: "92 BPM",
      icon: <FaHeartbeat />,
      color: "text-pink-500",
    },

    {
      title: "Steps Today",
      value: "8,421",
      icon: <FaRunning />,
      color: "text-green-500",
    },
  ];

  return (

    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white transition-all duration-300"
          : "min-h-screen bg-white text-black transition-all duration-300"
      }
    >

      {/* HEADER */}

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-4">

          FITNESS

          <span className="text-red-500">

            {" "}DASHBOARD

          </span>

        </h1>

        <p className="text-lg opacity-70">

          Track your fitness progress and performance.

        </p>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

        {stats.map((item, index) => (

          <div
            key={index}
            className={
              darkMode
                ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
                : "bg-gray-100 border border-black/10 rounded-3xl p-8"
            }
          >

            <div
              className={`text-5xl mb-6 ${item.color}`}
            >

              {item.icon}

            </div>

            <h2 className="text-2xl font-bold mb-2">

              {item.value}

            </h2>

            <p className="opacity-70">

              {item.title}

            </p>

          </div>
        ))}

      </div>

      {/* QUICK ACTIONS */}

      <div
        className={
          darkMode
            ? "bg-zinc-900 border border-white/10 rounded-3xl p-10"
            : "bg-gray-100 border border-black/10 rounded-3xl p-10"
        }
      >

        <h2 className="text-3xl font-bold mb-8">

          Quick Actions

        </h2>

        <div className="flex flex-wrap gap-6">

          <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold text-white transition duration-300">

            Start Workout

          </button>

          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold text-white transition duration-300">

            View Exercises

          </button>

          <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-white transition duration-300">

            Track Progress

          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;