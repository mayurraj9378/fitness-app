function WorkoutPlans() {
  const plans = [
    {
      title: "Fat Loss",
      description:
        "Burn calories and lose fat with high intensity workouts.",
      level: "Beginner",
    },
    {
      title: "Muscle Gain",
      description:
        "Build lean muscle mass with strength-focused training.",
      level: "Intermediate",
    },
    {
      title: "Strength Training",
      description:
        "Increase your power and overall body strength.",
      level: "Advanced",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            WORKOUT <span className="text-red-500">PLANS</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Choose the perfect workout plan according to your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-red-500">
                {plan.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {plan.description}
              </p>

              <p className="mt-6 text-sm text-gray-300">
                Level: {plan.level}
              </p>

              <button className="mt-8 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
                Join Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkoutPlans;