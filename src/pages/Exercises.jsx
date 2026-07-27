import { useEffect, useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate
} from "react-router-dom";

import toast from "react-hot-toast";

import { useTheme } from "../context/ThemeContext";
import API_BASE from "../config/api";

function Exercises() {

  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const [exercises, setExercises] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedDifficulty, setSelectedDifficulty] =
    useState("All");

  const [name, setName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("");

  const [setsReps, setSetsReps] =
    useState("");

  const [youtubeUrl, setYoutubeUrl] =
    useState("");

  const [reelUrl, setReelUrl] =
    useState("");

  const [imageUrl, setImageUrl] =
    useState("");

  const fetchExercises = async () => {

    try {

      const response =
        await axios.get(
          `${API_BASE}/exercises`
        );

      setExercises(response.data);

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to load exercises"
      );
    }
  };

  useEffect(() => {

    fetchExercises();

  }, []);

  const resetForm = () => {

    setName("");
    setCategory("");
    setDescription("");
    setDifficulty("");
    setSetsReps("");
    setYoutubeUrl("");
    setReelUrl("");
    setImageUrl("");

    setEditingId(null);
  };

  const handleAddOrUpdateExercise =
    async () => {

      try {

        const exerciseData = {

          name,
          category,
          description,
          difficulty,
          setsReps,
          youtubeUrl,
          reelUrl,
          imageUrl
        };

        if (editingId) {

          await axios.put(
            `${API_BASE}/exercises/${editingId}`,
            exerciseData
          );

          toast.success(
            "Exercise Updated Successfully"
          );

        } else {

          await axios.post(
            `${API_BASE}/exercises`,
            exerciseData
          );

          toast.success(
            "Exercise Added Successfully"
          );
        }

        resetForm();

        fetchExercises();

      } catch (error) {

        console.log(error);

        toast.error(
          "Operation Failed"
        );
      }
    };

  const handleEditExercise =
    (exercise) => {

      setEditingId(exercise.id);

      setName(exercise.name);
      setCategory(exercise.category);
      setDescription(exercise.description);
      setDifficulty(exercise.difficulty);
      setSetsReps(exercise.setsReps);
      setYoutubeUrl(exercise.youtubeUrl);
      setReelUrl(exercise.reelUrl);
      setImageUrl(exercise.imageUrl);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      toast.success(
        "Edit Mode Enabled"
      );
    };

  const handleDeleteExercise =
    async (id) => {

      try {

        await axios.delete(
          `${API_BASE}/exercises/${id}`
        );

        toast.success(
          "Exercise Deleted"
        );

        fetchExercises();

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to delete exercise"
        );
      }
    };

  const handleSearchEnter = (e) => {

    if (e.key === "Enter") {

      const foundExercise =
        exercises.find((exercise) => {

          const search =
            searchTerm.toLowerCase();

          return (

            exercise.name
              .toLowerCase()
              .includes(search)

            ||

            exercise.category
              .toLowerCase()
              .includes(search)

          );
        });

      if (foundExercise) {

        navigate(
          `/exercise/${foundExercise.id}`
        );

      } else {

        toast.error(
          "Exercise not found"
        );
      }
    }
  };

  const categories = [
    "All",
    "Chest",
    "Back",
    "Biceps",
    "Triceps",
    "Shoulders",
    "Legs",
    "Core",
    "Cardio"
  ];

  const difficulties = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced"
  ];

  const filteredExercises =
    exercises.filter((exercise) => {

      const search =
        searchTerm.toLowerCase();

      const matchesSearch =

        exercise.name
          .toLowerCase()
          .includes(search)

        ||

        exercise.category
          .toLowerCase()
          .includes(search);

      const matchesCategory =

        selectedCategory === "All"

        ||

        exercise.category
          ?.toLowerCase() ===
        selectedCategory.toLowerCase();

      const matchesDifficulty =

        selectedDifficulty === "All"

        ||

        exercise.difficulty
          ?.toLowerCase() ===
        selectedDifficulty.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty
      );
    });

  return (

    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white px-8 py-10 transition-all duration-300"
          : "min-h-screen bg-white text-black px-8 py-10 transition-all duration-300"
      }
    >

      <h1 className="text-5xl font-bold mb-10">

        Exercise

        <span className="text-red-500">

          {" "}Library

        </span>

      </h1>

      {/* SEARCH + FILTERS */}

      <div
        className={
          darkMode
            ? "bg-zinc-900 p-6 rounded-3xl mb-10"
            : "bg-gray-100 p-6 rounded-3xl mb-10"
        }
      >

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search Exercise or Category..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            onKeyDown={
              handleSearchEnter
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          />

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          >

            {categories.map((cat) => (

              <option
                key={cat}
                value={cat}
              >

                Category:
                {" "}
                {cat}

              </option>

            ))}

          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) =>
              setSelectedDifficulty(
                e.target.value
              )
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          >

            {difficulties.map((diff) => (

              <option
                key={diff}
                value={diff}
              >

                Difficulty:
                {" "}
                {diff}

              </option>

            ))}

          </select>

        </div>

      </div>

      {/* FORM */}

      <div
        className={
          darkMode
            ? "bg-zinc-900 p-8 rounded-3xl mb-10"
            : "bg-gray-100 p-8 rounded-3xl mb-10"
        }
      >

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">

            {editingId
              ? "Edit Exercise"
              : "Add Exercise"}

          </h2>

          {editingId && (

            <span className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold">

              Edit Mode

            </span>
          )}

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Exercise Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          />

          <input
            type="text"
            placeholder="Difficulty"
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          />

          <input
            type="text"
            placeholder="Sets/Reps"
            value={setsReps}
            onChange={(e) =>
              setSetsReps(e.target.value)
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl"
                : "bg-white border border-black/10 p-4 rounded-2xl"
            }
          />

          <input
            type="text"
            placeholder="YouTube Embed URL"
            value={youtubeUrl}
            onChange={(e) =>
              setYoutubeUrl(
                e.target.value
              )
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl md:col-span-2"
                : "bg-white border border-black/10 p-4 rounded-2xl md:col-span-2"
            }
          />

          <input
            type="text"
            placeholder="Instagram Reel URL"
            value={reelUrl}
            onChange={(e) =>
              setReelUrl(
                e.target.value
              )
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl md:col-span-2"
                : "bg-white border border-black/10 p-4 rounded-2xl md:col-span-2"
            }
          />

          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(
                e.target.value
              )
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl md:col-span-2"
                : "bg-white border border-black/10 p-4 rounded-2xl md:col-span-2"
            }
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-2xl md:col-span-2 min-h-[120px]"
                : "bg-white border border-black/10 p-4 rounded-2xl md:col-span-2 min-h-[120px]"
            }
          />

        </div>

        <div className="flex gap-4 mt-8 flex-wrap">

          <button
            onClick={
              handleAddOrUpdateExercise
            }
            className={
              editingId
                ? "bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-2xl font-bold text-xl text-white transition duration-300"
                : "bg-red-500 hover:bg-red-600 px-10 py-4 rounded-2xl font-bold text-xl text-white transition duration-300"
            }
          >

            {editingId
              ? "Update Exercise"
              : "Add Exercise"}

          </button>

          {editingId && (

            <button
              onClick={resetForm}
              className="bg-gray-500 hover:bg-gray-600 px-10 py-4 rounded-2xl font-bold text-xl text-white transition duration-300"
            >

              Cancel

            </button>
          )}

        </div>

      </div>

      {/* EXERCISE CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredExercises.map((exercise) => (

          <div
            key={exercise.id}
            className={
              darkMode
                ? "bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden hover:scale-105 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
                : "bg-gray-100 rounded-3xl border border-black/10 overflow-hidden hover:scale-105 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
            }
          >

            {exercise.imageUrl && (

              <div className="overflow-hidden">

                <img
                  src={exercise.imageUrl}
                  alt={exercise.name}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                />

              </div>
            )}

            <div className="p-8">

              <div className="flex justify-between items-center mb-4">

                <span className="bg-red-500 px-4 py-2 rounded-xl text-sm font-bold text-white">

                  {exercise.category}

                </span>

                <span className="bg-blue-500 px-4 py-2 rounded-xl text-sm font-bold text-white">

                  {exercise.difficulty || "N/A"}

                </span>

              </div>

              <h2 className="text-4xl font-bold text-red-500 mb-6">

                {exercise.name}

              </h2>

              <p className="opacity-70 mb-6 leading-7">

                {
                  exercise.description
                    ?.slice(0, 120)
                }

                ...

              </p>

              <p className="mb-8 font-semibold">

                Sets/Reps:
                {" "}
                {exercise.setsReps || "Not Added"}

              </p>

              <div className="flex gap-3 flex-wrap">

                <Link
                  to={`/exercise/${exercise.id}`}
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-bold text-white transition duration-300"
                >

                  Details

                </Link>

                <button
                  onClick={() =>
                    handleEditExercise(
                      exercise
                    )
                  }
                  className="bg-yellow-500 hover:bg-yellow-600 px-5 py-3 rounded-xl font-bold text-white transition duration-300"
                >

                  Edit

                </button>

                <button
                  onClick={() =>
                    handleDeleteExercise(
                      exercise.id
                    )
                  }
                  className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-bold text-white transition duration-300"
                >

                  Delete

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Exercises;