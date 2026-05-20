import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ExerciseCard({
  name,
  category,
  image,
  calories,
  difficulty,
}) {
  const saveWorkout = () => {
    const existingWorkouts =
      JSON.parse(localStorage.getItem("saved-workouts")) || [];

    const newWorkout = {
      name,
      category,
      calories,
      difficulty,
      image,
    };

    const updatedWorkouts = [
      ...existingWorkouts,
      newWorkout,
    ];

    localStorage.setItem(
      "saved-workouts",
      JSON.stringify(updatedWorkouts)
    );

    alert("Workout Saved!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500 hover:-translate-y-2 transition duration-300"
    >

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-red-500">
          {name}
        </h2>

        <p className="text-gray-400 mt-2">
          Category: {category}
        </p>

        <div className="flex justify-between mt-4 text-sm text-gray-300">

          <span>
            🔥 {calories} kcal
          </span>

          <span>
            💪 {difficulty}
          </span>

        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/exercise/${name}`}
            className="flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold transition duration-300 text-center"
          >
            Details
          </Link>

          <button
            onClick={saveWorkout}
            className="flex-1 border border-red-500 hover:bg-red-500 py-3 rounded-lg font-semibold transition duration-300"
          >
            Save
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default ExerciseCard;