import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  FaDumbbell,
  FaFire,
  FaWeight,
  FaCalendarWeek
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Dashboard() {

  const { darkMode } = useTheme();

  const [workouts, setWorkouts] = useState([]);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const [workoutsRes, progressRes] =
        await Promise.all([
          axios.get(
            "http://localhost:8080/workouts",
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          ),
          axios.get(
            "http://localhost:8080/progress",
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
        ]);

      setWorkouts(workoutsRes.data);
      setProgress(progressRes.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load dashboard stats");

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const latestWeight =
    progress.length > 0
      ? progress[progress.length - 1].weight
      : null;

  const totalCalories = workouts.reduce(
    (sum, w) => sum + (w.caloriesBurned || 0),
    0
  );

  // Workouts logged in the last 7 days.
  // Dates are stored as toLocaleDateString() strings, so this is a
  // best-effort parse — fine for recently-saved workouts, but any
  // older workouts saved before the date field existed will show
  // "Date not recorded" and won't count here.
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const workoutsThisWeek = workouts.filter((w) => {
    if (!w.date) return false;
    const parsed = new Date(w.date);
    return !isNaN(parsed) && parsed >= oneWeekAgo;
  }).length;

  const stats = [

    {
      title: "Workouts Saved",
      value: loading ? "..." : workouts.length,
      icon: <FaDumbbell />,
      color: "text-red-500",
    },

    {
      title: "This Week",
      value: loading ? "..." : workoutsThisWeek,
      icon: <FaCalendarWeek />,
      color: "text-blue-500",
    },

    {
      title: "Calories Burned",
      value: loading ? "..." : totalCalories,
      icon: <FaFire />,
      color: "text-orange-500",
    },

    {
      title: "Current Weight",
      value: loading
        ? "..."
        : latestWeight !== null
          ? `${latestWeight} kg`
          : "No data yet",
      icon: <FaWeight />,
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