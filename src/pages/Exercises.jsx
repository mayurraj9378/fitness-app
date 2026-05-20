import { useState } from "react";

function Exercises() {
  const allExercises = [
    { name: "Push Ups", category: "Chest" },
    { name: "Bench Press", category: "Chest" },
    { name: "Squats", category: "Legs" },
    { name: "Lunges", category: "Legs" },
    { name: "Pull Ups", category: "Back" },
    { name: "Deadlift", category: "Back" },
    { name: "Shoulder Press", category: "Shoulders" },
    { name: "Lateral Raises", category: "Shoulders" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredExercises = allExercises.filter((exercise) => {
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
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-red-500">
                {exercise.name}
              </h2>

              <p className="text-gray-400 mt-3">
                Category: {exercise.category}
              </p>

              <button className="mt-6 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition duration-300">
                View Details
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Exercises;