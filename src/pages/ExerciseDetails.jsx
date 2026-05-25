
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

function ExerciseDetails() {

  const { id } = useParams();

  const [exercise, setExercise] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    fetchExercise();

  }, []);

  const fetchExercise = async () => {

    try {

      const response =
        await axios.get(
          `http://localhost:8080/exercises/${id}`
        );

      console.log(response.data);

      setExercise(response.data);

    } catch (err) {

      console.log(err);

      setError("Failed to load exercise");

    } finally {

      setLoading(false);
    }
  };

  const handleSaveWorkout = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(

        "http://localhost:8080/workouts",

        {
          workoutName: exercise.name,

          category: exercise.category
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert("Workout Saved!");

    } catch (error) {

      console.log(error);

      alert("Failed to save workout");
    }
  };

  if (loading) {

    return (

      <div className="bg-black min-h-screen text-white flex items-center justify-center text-2xl">

        Loading...

      </div>
    );
  }

  if (error) {

    return (

      <div className="bg-black min-h-screen text-red-500 flex items-center justify-center text-2xl">

        {error}

      </div>
    );
  }

  return (

    <div className="bg-black min-h-screen text-white py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-zinc-900 rounded-3xl p-10">

          <h1 className="text-5xl font-bold text-red-500 mb-8">

            {exercise.name}

          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <div className="bg-black p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-4">

                Category

              </h2>

              <p className="text-gray-400 text-lg">

                {exercise.category}

              </p>

            </div>

            <div className="bg-black p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-4">

                Difficulty

              </h2>

              <p className="text-gray-400 text-lg">

                {exercise.difficulty}

              </p>

            </div>

            <div className="bg-black p-6 rounded-2xl md:col-span-2">

              <h2 className="text-2xl font-bold mb-4">

                Sets / Reps

              </h2>

              <p className="text-gray-400 text-lg">

                {exercise.setsReps}

              </p>

            </div>

          </div>

          <div className="bg-black p-6 rounded-2xl mb-10">

            <h2 className="text-3xl font-bold mb-6">

              Description

            </h2>

            <p className="text-gray-400 text-lg leading-8">

              {exercise.description}

            </p>

          </div>

          {exercise.youtubeUrl && (

            <div className="mb-10">

              <h2 className="text-3xl font-bold mb-6">

                Exercise Video

              </h2>

              <div className="overflow-hidden rounded-2xl">

                <iframe
                  width="100%"
                  height="500"
                  src={exercise.youtubeUrl}
                  title="Exercise Video"
                  allowFullScreen
                />

              </div>

            </div>
          )}

          {exercise.reelUrl && (

            <div className="mb-10">

              <a
                href={exercise.reelUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl font-bold inline-block"
              >

                Watch Instagram Reel

              </a>

            </div>
          )}

          <button

            onClick={handleSaveWorkout}

            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold text-lg"
          >

            Save Workout

          </button>

        </div>

      </div>

    </div>
  );
}

export default ExerciseDetails;

