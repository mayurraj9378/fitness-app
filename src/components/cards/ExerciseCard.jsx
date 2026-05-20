import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ExerciseCard({ name, category, image, calories, difficulty }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500 hover:-translate-y-2 transition duration-300"
    >
      <img src={image} alt={name} className="w-full h-52 object-cover" />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-500">{name}</h2>

        <p className="text-gray-400 mt-2">Category: {category}</p>

        <div className="flex justify-between mt-4 text-sm text-gray-300">
          <span>🔥 {calories} kcal</span>

          <span>💪 {difficulty}</span>
        </div>

        <Link
          to={`/exercise/${name}`}
          className="block mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold transition duration-300 text-center"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default ExerciseCard;
