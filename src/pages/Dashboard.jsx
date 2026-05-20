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
    <div className="bg-black min-h-screen text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <h1 className="text-5xl font-bold">
            FITNESS <span className="text-red-500">DASHBOARD</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Track your fitness progress and daily activities.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-300"
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

        {/* Progress Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Today's Goal
            </h2>

            <div className="space-y-4">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Workout</span>
                  <span>80%</span>
                </div>

                <div className="w-full bg-black rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Calories</span>
                  <span>65%</span>
                </div>

                <div className="w-full bg-black rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[65%]"></div>
                </div>
              </div>

            </div>

          </div>

          {/* Recent Activity */}
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <div className="bg-black p-4 rounded-xl">
                Completed Chest Workout
              </div>

              <div className="bg-black p-4 rounded-xl">
                Burned 450 Calories
              </div>

              <div className="bg-black p-4 rounded-xl">
                Updated Weight Progress
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;