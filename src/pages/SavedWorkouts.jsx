
import { useEffect, useState } from "react";
import axios from "axios";

function SavedWorkouts() {

  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
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

      alert("Failed to load workouts");
    }
  };

  useEffect(() => {

    fetchWorkouts();

  }, []);

  const handleDeleteWorkout = async (id) => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.delete(
        `http://localhost:8080/workouts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchWorkouts();

      alert("Workout Deleted!");

    } catch (error) {

      console.log(error);

      alert("Failed to delete workout");
    }
  };

  return (

    <div className="text-white">

      <h1 className="text-5xl font-bold mb-12">

        SAVED <span className="text-red-500">WORKOUTS</span>

      </h1>

      {workouts.length === 0 ? (

        <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10">

          <p className="text-gray-400 text-lg">

            No workouts saved yet.

          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {workouts.map((workout) => (

            <div
              key={workout.id}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-red-500 mb-4">

                {workout.workoutName}

              </h2>

              <p className="text-gray-300 text-lg mb-6">

                Category: {workout.category}

              </p>

              <button
                onClick={() =>
                  handleDeleteWorkout(workout.id)
                }
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition duration-300 hover:scale-105"
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

