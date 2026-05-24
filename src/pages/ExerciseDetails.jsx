
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function ExerciseDetails() {

  const { name } = useParams();

  const [exercise, setExercise] = useState(null);

  useEffect(() => {

    const fetchExercise = async () => {

      try {

        const response =
          await axios.get(
            `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
            {
              headers: {
                "X-RapidAPI-Key":
                  import.meta.env.VITE_RAPID_API_KEY,

                "X-RapidAPI-Host":
                  "exercisedb.p.rapidapi.com",
              },
            }
          );

        setExercise(response.data[0]);

      } catch (error) {

        console.log(error);
      }
    };

    fetchExercise();

  }, [name]);

  const saveWorkout = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(
        "http://localhost:8080/workouts",
        {
          workoutName: exercise.name,
          category: exercise.bodyPart,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Workout Saved!");

    } catch (error) {

      console.log(error);

      alert("Failed to save workout");
    }
  };

  if (!exercise) {

    return (

      <div className="bg-black min-h-screen flex items-center justify-center text-white text-2xl">

        Loading...

      </div>
    );
  }

  return (

    <div className="bg-black min-h-screen text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold capitalize mb-10">

          {exercise.name}

        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="rounded-3xl w-full"
            />

          </div>

          <div className="space-y-6">

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold text-red-500 mb-3">

                Body Part

              </h2>

              <p className="text-gray-300 text-lg capitalize">

                {exercise.bodyPart}

              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold text-red-500 mb-3">

                Target Muscle

              </h2>

              <p className="text-gray-300 text-lg capitalize">

                {exercise.target}

              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold text-red-500 mb-3">

                Equipment

              </h2>

              <p className="text-gray-300 text-lg capitalize">

                {exercise.equipment}

              </p>

            </div>

            <button
              onClick={saveWorkout}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl text-white font-semibold transition duration-300"
            >
              Save Workout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ExerciseDetails;

