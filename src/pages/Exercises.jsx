
import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Exercises() {

  const [exercises, setExercises] =
    useState([]);

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
          "http://localhost:8080/exercises"
        );

      setExercises(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchExercises();

  }, []);

  const handleAddExercise =
    async () => {

      try {

        await axios.post(
          "http://localhost:8080/exercises",
          {
            name,
            category,
            description,
            difficulty,
            setsReps,
            youtubeUrl,
            reelUrl,
            imageUrl
          }
        );

        alert("Exercise Added!");

        setName("");
        setCategory("");
        setDescription("");
        setDifficulty("");
        setSetsReps("");
        setYoutubeUrl("");
        setReelUrl("");
        setImageUrl("");

        fetchExercises();

      } catch (error) {

        console.log(error);

        alert("Failed to add exercise");
      }
    };

  const handleDeleteExercise =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:8080/exercises/${id}`
        );

        fetchExercises();

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div className="bg-black min-h-screen text-white px-8 py-10">

      <h1 className="text-5xl font-bold mb-10">

        Exercise
        <span className="text-red-500">

          {" "}Library

        </span>

      </h1>

      {/* FORM */}

      <div className="bg-zinc-900 p-8 rounded-3xl mb-10">

        <h2 className="text-3xl font-bold mb-8">

          Add Exercise

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Exercise Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl"
          />

          <input
            type="text"
            placeholder="Difficulty"
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl"
          />

          <input
            type="text"
            placeholder="Sets/Reps"
            value={setsReps}
            onChange={(e) =>
              setSetsReps(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl"
          />

          <input
            type="text"
            placeholder="YouTube Embed URL"
            value={youtubeUrl}
            onChange={(e) =>
              setYoutubeUrl(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl md:col-span-2"
          />

          <input
            type="text"
            placeholder="Instagram Reel URL"
            value={reelUrl}
            onChange={(e) =>
              setReelUrl(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl md:col-span-2"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl md:col-span-2"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="bg-black border border-white/10 p-4 rounded-2xl md:col-span-2 min-h-[120px]"
          />

        </div>

        <button
          onClick={handleAddExercise}
          className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-2xl font-bold text-xl mt-8"
        >

          Add Exercise

        </button>

      </div>

      {/* EXERCISES */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {exercises.map((exercise) => (

          <div
            key={exercise.id}
            className="bg-zinc-900 p-8 rounded-3xl border border-white/10"
          >

            {exercise.imageUrl && (

              <img
                src={exercise.imageUrl}
                alt={exercise.name}
                className="w-full h-52 object-cover rounded-2xl mb-6"
              />

            )}

            <h2 className="text-4xl font-bold text-red-500 mb-6">

              {exercise.name}

            </h2>

            <p className="text-gray-300 text-2xl mb-4">

              Category: {exercise.category}

            </p>

            <p className="text-gray-400 mb-4">

              Difficulty:
              {" "}
              {exercise.difficulty || "Not Added"}

            </p>

            <p className="text-gray-400 mb-8">

              Sets/Reps:
              {" "}
              {exercise.setsReps || "Not Added"}

            </p>

            <div className="flex gap-4 flex-wrap">

              <Link
                to={`/exercise/${exercise.id}`}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold"
              >

                Details

              </Link>

              <button
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-bold"
              >

                Edit

              </button>

              <button
                onClick={() =>
                  handleDeleteExercise(
                    exercise.id
                  )
                }
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
              >

                Delete

              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Exercises;

