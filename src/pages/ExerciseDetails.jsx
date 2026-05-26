
import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Exercises() {

  const [allExercises, setAllExercises] =
    useState([]);

  const [filteredExercises, setFilteredExercises] =
    useState([]);

  const [selectedCategory, setSelectedCategory] =
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

  const [editingId, setEditingId] =
    useState(null);

  const categories = [
    "All",
    "Chest",
    "Back",
    "Legs",
    "Shoulders",
    "Arms",
    "Abs"
  ];

  const fetchExercises = () => {

    axios
      .get("http://localhost:8080/exercises")

      .then((response) => {

        setAllExercises(response.data);

        setFilteredExercises(response.data);
      })

      .catch((error) => {

        console.log(error);
      });
  };

  useEffect(() => {

    fetchExercises();

  }, []);

  const filterExercises = (category) => {

    setSelectedCategory(category);

    if (category === "All") {

      setFilteredExercises(allExercises);

    } else {

      const filtered =
        allExercises.filter(
          (exercise) =>
            exercise.category === category
        );

      setFilteredExercises(filtered);
    }
  };

  const clearForm = () => {

    setName("");

    setCategory("");

    setDescription("");

    setDifficulty("");

    setSetsReps("");

    setYoutubeUrl("");

    setReelUrl("");

    setEditingId(null);
  };

  const handleAddExercise = () => {

    const newExercise = {

      name,

      category,

      description,

      difficulty,

      setsReps,

      youtubeUrl,

      reelUrl
    };

    axios

      .post(
        "http://localhost:8080/exercises",
        newExercise
      )

      .then(() => {

        fetchExercises();

        clearForm();

        alert("Exercise Added!");
      })

      .catch((error) => {

        console.log(error);
      });
  };

  const handleDeleteExercise = (id) => {

    axios

      .delete(
        `http://localhost:8080/exercises/${id}`
      )

      .then(() => {

        fetchExercises();

        alert("Exercise Deleted!");
      })

      .catch((error) => {

        console.log(error);
      });
  };

  const handleEditClick = (exercise) => {

    setEditingId(exercise.id);

    setName(exercise.name);

    setCategory(exercise.category);

    setDescription(exercise.description);

    setDifficulty(exercise.difficulty);

    setSetsReps(exercise.setsReps);

    setYoutubeUrl(exercise.youtubeUrl);

    setReelUrl(exercise.reelUrl);
  };

  const handleUpdateExercise = () => {

    const updatedExercise = {

      name,

      category,

      description,

      difficulty,

      setsReps,

      youtubeUrl,

      reelUrl
    };

    axios

      .put(
        `http://localhost:8080/exercises/${editingId}`,
        updatedExercise
      )

      .then(() => {

        fetchExercises();

        clearForm();

        alert("Exercise Updated!");
      })

      .catch((error) => {

        console.log(error);
      });
  };

  return (

    <div className="bg-black min-h-screen text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">

          EXERCISE
          <span className="text-red-500">
            {" "}LIBRARY
          </span>

        </h1>

        {/* CATEGORY FILTERS */}

        <div className="flex flex-wrap gap-4 justify-center mb-10">

          {categories.map((cat) => (

            <button
              key={cat}

              onClick={() =>
                filterExercises(cat)
              }

              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-red-500"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* FORM */}

        <div className="bg-zinc-900 rounded-3xl p-8 mb-12">

          <h2 className="text-3xl font-bold mb-8">

            {editingId
              ? "Update Exercise"
              : "Add Exercise"}

          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Exercise Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="bg-black p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="bg-black p-4 rounded-xl"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="bg-black p-4 rounded-xl md:col-span-2"
            />

            <input
              type="text"
              placeholder="Difficulty"
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
              className="bg-black p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Sets/Reps"
              value={setsReps}
              onChange={(e) =>
                setSetsReps(e.target.value)
              }
              className="bg-black p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="YouTube URL"
              value={youtubeUrl}
              onChange={(e) =>
                setYoutubeUrl(e.target.value)
              }
              className="bg-black p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Instagram Reel URL"
              value={reelUrl}
              onChange={(e) =>
                setReelUrl(e.target.value)
              }
              className="bg-black p-4 rounded-xl"
            />

          </div>

          <button

            onClick={
              editingId
                ? handleUpdateExercise
                : handleAddExercise
            }

            className={`mt-8 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
              editingId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >

            {editingId
              ? "Update Exercise"
              : "Add Exercise"}

          </button>

        </div>

        {/* EXERCISE CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          {filteredExercises.map((exercise) => (

            <div
              key={exercise.id}
              className="bg-zinc-900 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-red-500 mb-4">

                {exercise.name}

              </h2>

              <p className="text-gray-400 mb-3">

                Category:
                {" "}
                {exercise.category}

              </p>

              <p className="text-gray-400 mb-3">

                Difficulty:
                {" "}
                {exercise.difficulty}

              </p>

              <p className="text-gray-400 mb-6">

                Sets/Reps:
                {" "}
                {exercise.setsReps}

              </p>

              <div className="flex flex-wrap gap-3">

                <Link
                  to={`/exercise/${exercise.id}`}
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-bold"
                >
                  Details
                </Link>

                <button
                  onClick={() =>
                    handleEditClick(exercise)
                  }
                  className="bg-yellow-500 hover:bg-yellow-600 px-5 py-3 rounded-xl font-bold"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDeleteExercise(exercise.id)
                  }
                  className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-bold"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Exercises;

