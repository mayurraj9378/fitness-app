import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";

const data = [
  { day: "Mon", calories: 300 },
  { day: "Tue", calories: 450 },
  { day: "Wed", calories: 500 },
  { day: "Thu", calories: 700 },
  { day: "Fri", calories: 650 },
  { day: "Sat", calories: 800 },
  { day: "Sun", calories: 550 },
];

function Dashboard() {
  const stats = [
    {
      title: "Calories Burned",
      value: "1240",
    },
    {
      title: "Workout Hours",
      value: "18h",
    },
    {
      title: "Exercises Done",
      value: "42",
    },
    {
      title: "Current Weight",
      value: "72kg",
    },
  ];

  const [completed, setCompleted] = useState(65);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("workout-history")) || [];

    setHistory(savedHistory);
  }, []);

  const completeWorkout = () => {
    if (completed < 100) {
      const newProgress = completed + 5;

      setCompleted(newProgress);

      const newWorkout = {
        date: new Date().toLocaleDateString(),
        progress: `${newProgress}%`,
      };

      const updatedHistory = [
        newWorkout,
        ...history,
      ];

      setHistory(updatedHistory);

      localStorage.setItem(
        "workout-history",
        JSON.stringify(updatedHistory)
      );
    }
  };

  return (
    <div>

      {/* Heading */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold">
          FITNESS <span className="text-red-500">DASHBOARD</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Track your weekly progress and workouts.
        </p>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-8"
          >

            <h2 className="text-gray-400 text-lg">
              {item.title}
            </h2>

            <h1 className="text-4xl font-bold text-red-500 mt-4">
              {item.value}
            </h1>

          </div>
        ))}

      </div>

      {/* Progress Tracker */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mt-12">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold">
            Workout Progress
          </h2>

          <span className="text-red-500 text-2xl font-bold">
            {completed}%
          </span>

        </div>

        {/* Progress Bar */}
        <div className="w-full bg-black rounded-full h-5 overflow-hidden">

          <div
            className="bg-red-500 h-5 transition-all duration-500"
            style={{ width: `${completed}%` }}
          ></div>

        </div>

        <button
          onClick={completeWorkout}
          className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Complete Workout
        </button>

      </div>

      {/* Workout History */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mt-12">

        <h2 className="text-3xl font-bold mb-8">
          Recent Workout Activity
        </h2>

        {history.length === 0 ? (
          <p className="text-gray-400">
            No workout history yet.
          </p>
        ) : (
          <div className="space-y-4">

            {history.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-xl p-4 flex justify-between"
              >

                <span>
                  Workout Completed
                </span>

                <span className="text-red-500">
                  {item.progress} • {item.date}
                </span>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* Chart */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mt-12">

        <h2 className="text-3xl font-bold mb-8">
          Weekly Calories Burned
        </h2>

        <ResponsiveContainer width="100%" height={350}>

          <LineChart data={data}>

            <XAxis dataKey="day" stroke="#ffffff" />

            <YAxis stroke="#ffffff" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="#ef4444"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Dashboard;