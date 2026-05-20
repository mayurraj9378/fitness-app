
function Stats() {
  const statsData = [
    {
      number: "10K+",
      title: "Active Members",
    },
    {
      number: "50+",
      title: "Expert Trainers",
    },
    {
      number: "100+",
      title: "Workout Programs",
    },
    {
      number: "95%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="bg-zinc-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            WHY CHOOSE <span className="text-red-500">FITZONE</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Achieve your fitness goals with professional trainers,
            personalized workouts, and modern fitness tracking.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-red-500 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-red-500">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;

