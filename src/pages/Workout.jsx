import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  FaDumbbell,
  FaTrash,
  FaFire,
  FaClipboardList,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Workout() {
  const { darkMode } = useTheme();

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkouts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/workouts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWorkouts(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load workouts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleDeleteWorkout = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this workout?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:8080/workouts/${id}`
      );

      toast.success("Workout Deleted");

      setWorkouts((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete workout");
    }
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white px-8 py-10 transition-all duration-300"
          : "min-h-screen bg-white text-black px-8 py-10 transition-all duration-300"
      }
    >
      {/* HEADER */}

      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">
          MY
          <span className="text-red-500">
            {" "}
            WORKOUTS
          </span>
        </h1>

        <p className="text-lg opacity-70">
          View and manage your saved workouts.
        </p>
      </div>

      {/* SUMMARY */}

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
              : "bg-gray-100 border border-black/10 rounded-3xl p-8"
          }
        >
          <FaClipboardList className="text-5xl text-red-500 mb-5" />

          <h2 className="text-4xl font-bold">
            {loading ? "..." : workouts.length}
          </h2>

          <p className="opacity-70 mt-2">
            Saved Workouts
          </p>
        </div>

        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
              : "bg-gray-100 border border-black/10 rounded-3xl p-8"
          }
        >
          <FaDumbbell className="text-5xl text-blue-500 mb-5" />

          <h2 className="text-4xl font-bold">
            {loading
              ? "..."
              : [...new Set(workouts.map((w) => w.category))]
                  .length}
          </h2>

          <p className="opacity-70 mt-2">
            Categories
          </p>
        </div>

        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
              : "bg-gray-100 border border-black/10 rounded-3xl p-8"
          }
        >
          <FaFire className="text-5xl text-orange-500 mb-5" />

          <h2 className="text-4xl font-bold">
            {loading ? "..." : workouts.length}
          </h2>

          <p className="opacity-70 mt-2">
            Exercises Saved
          </p>
        </div>
      </div>

      {/* LOADING */}

      {loading && (
        <div className="text-center text-2xl font-bold py-20">
          Loading Workouts...
        </div>
      )}

      {/* EMPTY */}

      {!loading && workouts.length === 0 && (
        <div
          className={
            darkMode
              ? "bg-zinc-900 rounded-3xl border border-white/10 p-16 text-center"
              : "bg-gray-100 rounded-3xl border border-black/10 p-16 text-center"
          }
        >
          <FaDumbbell className="text-7xl mx-auto text-red-500 mb-6" />

          <h2 className="text-4xl font-bold mb-4">
            No Workouts Saved
          </h2>

          <p className="opacity-70 text-lg">
            Visit the Exercise Library and save
            your favorite workouts.
          </p>
        </div>
      )}

      {/* WORKOUT CARDS */}

      {!loading && workouts.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className={
                darkMode
                  ? "bg-zinc-900 rounded-3xl border border-white/10 p-8 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
                  : "bg-gray-100 rounded-3xl border border-black/10 p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
              }
            >
              <div className="flex justify-between items-center mb-6">
                <span className="bg-red-500 px-4 py-2 rounded-xl text-sm font-bold text-white">
                  {workout.category}
                </span>

                <FaDumbbell className="text-3xl text-red-500" />
              </div>

              <h2 className="text-3xl font-bold text-red-500 mb-5">
                {workout.workoutName}
              </h2>

              <p className="opacity-70 mb-8">
                Category : {workout.category}
              </p>

              <button
                onClick={() =>
                  handleDeleteWorkout(workout.id)
                }
                className="flex items-center gap-3 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold text-white transition duration-300"
              >
                <FaTrash />

                Delete Workout
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Workout;