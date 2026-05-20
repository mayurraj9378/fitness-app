import { useState } from "react";
import ExerciseCard from "../components/cards/ExerciseCard";
import exercises from "../data/exercises";
function Exercises() {
  

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || exercise.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-black min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          EXERCISE <span className="text-red-500">LIBRARY</span>
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">

          <input
            type="text"
            placeholder="Search exercise..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
          >
            <option>All</option>
            <option>Chest</option>
            <option>Legs</option>
            <option>Back</option>
            <option>Shoulders</option>
          </select>

        </div>

        {/* Exercise Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {filteredExercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              name={exercise.name}
              category={exercise.category}
              image={exercise.image}
              calories={exercise.calories}
              difficulty={exercise.difficulty}
            />
          ))}

        </div>

      </div>
    </div>
  );
}

export default Exercises;