import { useEffect, useState } from "react";

import axios from "axios";
import API_BASE from "../config/api";

import toast from "react-hot-toast";

import { useTheme } from "../context/ThemeContext";

function SavedWorkouts() {

  const { darkMode } = useTheme();

  const [workouts, setWorkouts] =
    useState([]);

  const totalCalories = workouts.reduce(
    (sum, w) => sum + (w.caloriesBurned || 0),
    0
  );

  const totalMinutes = workouts.reduce(
    (sum, w) => sum + (w.durationMinutes || 0),
    0
  );

  const fetchWorkouts = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          `${API_BASE}/workouts`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setWorkouts(response.data);

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to load workouts"
      );
    }
  };

  useEffect(() => {

    fetchWorkouts();

  }, []);

  const handleDeleteWorkout =
    async (id) => {

      try {

        const token =
          localStorage.getItem("token");

        await axios.delete(
          `${API_BASE}/workouts/${id}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        fetchWorkouts();

        toast.success(
          "Workout Deleted!"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to delete workout"
        );
      }
    };

  return (

    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white transition-all duration-300"
          : "min-h-screen bg-white text-black transition-all duration-300"
      }
    >

      <h1 className="text-5xl font-bold mb-12">

        SAVED

        <span className="text-red-500">

          {" "}WORKOUTS

        </span>

      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
              : "bg-gray-100 border border-black/10 rounded-3xl p-8"
          }
        >

          <h2 className="text-4xl font-bold text-red-500 mb-2">

            {workouts.length}

          </h2>

          <p className="opacity-70">

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

          <h2 className="text-4xl font-bold text-blue-500 mb-2">

            {totalCalories}

          </h2>

          <p className="opacity-70">

            Total Calories Burned

          </p>

        </div>

        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
              : "bg-gray-100 border border-black/10 rounded-3xl p-8"
          }
        >

          <h2 className="text-4xl font-bold text-green-500 mb-2">

            {totalMinutes}

          </h2>

          <p className="opacity-70">

            Total Minutes Trained

          </p>

        </div>

      </div>

      {/* EMPTY STATE */}

      {workouts.length === 0 ? (

        <div
          className={
            darkMode
              ? "bg-zinc-900 p-12 rounded-3xl border border-white/10 text-center"
              : "bg-gray-100 p-12 rounded-3xl border border-black/10 text-center"
          }
        >

          <h2 className="text-3xl font-bold mb-4">

            No Workouts Saved

          </h2>

          <p className="opacity-70 text-lg">

            Save workouts from the exercise page
            to build your fitness routine.

          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {workouts.map((workout) => (

            <div
              key={workout.id}
              className={
                darkMode
                  ? "bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-500"
                  : "bg-gray-100 border border-black/10 rounded-3xl p-8 hover:border-red-500 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              }
            >

              <div className="flex justify-between items-center mb-6">

                <span className="bg-red-500 px-4 py-2 rounded-xl text-sm font-bold text-white">

                  {workout.category}

                </span>

                <span className="bg-green-500 px-4 py-2 rounded-xl text-sm font-bold text-white">

                  Active

                </span>

              </div>

              <h2 className="text-3xl font-bold text-red-500 mb-4">

                {workout.workoutName}

              </h2>

              <p className="opacity-70 mb-2">

                {workout.date || "Date not recorded"}

              </p>

              <p className="opacity-70 mb-8 leading-7">

                {workout.durationMinutes || 0} min
                {" "}&middot;{" "}
                {workout.caloriesBurned || 0} cal

              </p>

              <button
                onClick={() =>
                  handleDeleteWorkout(
                    workout.id
                  )
                }
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition duration-300 hover:scale-105 text-white"
              >

                Delete Workout

              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SavedWorkouts;