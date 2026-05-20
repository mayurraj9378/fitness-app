import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  return (
    <div>

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