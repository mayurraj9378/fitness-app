import { useEffect, useState } from "react";

function SavedWorkouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("saved-workouts")) || [];

    setWorkouts(saved);
  }, []);

  const removeWorkout = (indexToRemove) => {
    const updatedWorkouts = workouts.filter(
      (_, index) => index !== indexToRemove
    );

    setWorkouts(updatedWorkouts);

    localStorage.setItem(
      "saved-workouts",
      JSON.stringify(updatedWorkouts)
    );
  };

  return (
    <div className="text-white">

      <h1 className="text-5xl font-bold mb-12">
        SAVED <span className="text-red-500">WORKOUTS</span>
      </h1>

      {workouts.length === 0 ? (
        <p className="text-gray-400">
          No workouts saved yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">

          {workouts.map((workout, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden"
            >

              <img
                src={workout.image}
                alt={workout.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold text-red-500">
                  {workout.name}
                </h2>

                <p className="text-gray-400 mt-2">
                  {workout.category}
                </p>

                <div className="flex justify-between mt-4 text-sm text-gray-300">

                  <span>
                    🔥 {workout.calories} kcal
                  </span>

                  <span>
                    💪 {workout.difficulty}
                  </span>

                </div>

                <button
                  onClick={() => removeWorkout(index)}
                  className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Remove Workout
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SavedWorkouts;