import { useEffect, useState } from "react";

import axios from "axios";
import API_BASE from "../config/api";

import toast from "react-hot-toast";

import { useTheme } from "../context/ThemeContext";

function Profile() {

  const { darkMode } = useTheme();

  const [user, setUser] =
    useState({
      name: "",
      email: "",
      goal: "",
    });

  const [editing, setEditing] =
    useState(false);

  const [savedWorkoutsCount,
    setSavedWorkoutsCount] =
    useState(0);

  const joinedDate =
    "2026";

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const response =
          await axios.get(
            `${API_BASE}/auth/me`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        const backendUser =
          response.data;

        const savedGoal =
          JSON.parse(
            localStorage.getItem(
              "fitness-profile"
            )
          );

        setUser({
          name: backendUser.name,
          email: backendUser.email,
          goal:
            savedGoal?.goal || "",
        });

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to load profile"
        );
      }
    };

    const fetchWorkoutCount =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

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

          setSavedWorkoutsCount(
            response.data.length
          );

        } catch (error) {

          console.log(error);
        }
      };

    fetchUser();

    fetchWorkoutCount();

  }, []);

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]:
        e.target.value,
    });
  };

  const saveProfile = () => {

    localStorage.setItem(
      "fitness-profile",
      JSON.stringify(user)
    );

    setEditing(false);

    toast.success(
      "Profile Updated!"
    );
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

        USER

        <span className="text-red-500">

          {" "}PROFILE

        </span>

      </h1>

      {/* PROFILE STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-8"
              : "bg-gray-100 border border-black/10 rounded-3xl p-8"
          }
        >

          <h2 className="text-4xl font-bold text-red-500 mb-2">

            {savedWorkoutsCount}

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

            {joinedDate}

          </h2>

          <p className="opacity-70">

            Joined Year

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

            Active

          </h2>

          <p className="opacity-70">

            Fitness Journey

          </p>

        </div>

      </div>

      {/* PROFILE CARD */}

      <div
        className={
          darkMode
            ? "bg-zinc-900 border border-white/10 rounded-3xl p-10 max-w-4xl hover:border-red-500 transition-all duration-500"
            : "bg-gray-100 border border-black/10 rounded-3xl p-10 max-w-4xl hover:border-red-500 transition-all duration-500"
        }
      >

        <div className="flex items-center gap-6 mb-10">

          <div className="bg-red-500 w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white">

            {user.name
              ?.charAt(0)
              ?.toUpperCase()}

          </div>

          <div>

            <h2 className="text-4xl font-bold mb-2">

              {user.name}

            </h2>

            <p className="opacity-70 text-lg">

              {user.email}

            </p>

          </div>

        </div>

        <div className="space-y-6">

          {/* NAME */}

          <div>

            <label className="block mb-2 font-semibold">

              Name

            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              disabled
              className={
                darkMode
                  ? "w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none"
                  : "w-full bg-white border border-black/10 rounded-xl px-4 py-4 outline-none"
              }
            />

          </div>

          {/* EMAIL */}

          <div>

            <label className="block mb-2 font-semibold">

              Email

            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              disabled
              className={
                darkMode
                  ? "w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none"
                  : "w-full bg-white border border-black/10 rounded-xl px-4 py-4 outline-none"
              }
            />

          </div>

          {/* GOAL */}

          <div>

            <label className="block mb-2 font-semibold">

              Fitness Goal

            </label>

            <input
              type="text"
              name="goal"
              value={user.goal}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Muscle Gain / Fat Loss / Strength"
              className={
                darkMode
                  ? "w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-red-500"
                  : "w-full bg-white border border-black/10 rounded-xl px-4 py-4 outline-none focus:border-red-500"
              }
            />

          </div>

          {/* BUTTONS */}

          <div className="flex gap-4 pt-4 flex-wrap">

            {!editing ? (

              <button
                onClick={() =>
                  setEditing(true)
                }
                className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-semibold transition duration-300 text-white"
              >

                Edit Goal

              </button>

            ) : (

              <>

                <button
                  onClick={saveProfile}
                  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition duration-300 text-white"
                >

                  Save Goal

                </button>

                <button
                  onClick={() =>
                    setEditing(false)
                  }
                  className="bg-gray-500 hover:bg-gray-600 px-8 py-4 rounded-xl font-semibold transition duration-300 text-white"
                >

                  Cancel

                </button>

              </>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;