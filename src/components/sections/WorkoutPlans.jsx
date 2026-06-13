import { useTheme } from "../../context/ThemeContext";

function WorkoutPlans() {

  const { darkMode } = useTheme();

  const plans = [

    {
      title: "Beginner Plan",
      duration: "4 Weeks",
      desc: "Perfect for starting your fitness journey.",
    },

    {
      title: "Muscle Gain",
      duration: "8 Weeks",
      desc: "Build muscle with structured workouts.",
    },

    {
      title: "Fat Loss",
      duration: "6 Weeks",
      desc: "Burn calories and lose body fat fast.",
    },
  ];

  return (

    <section
      className={
        darkMode
          ? "bg-black text-white py-20 transition-all duration-300"
          : "bg-white text-black py-20 transition-all duration-300"
      }
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">

            Workout

            <span className="text-red-500">

              {" "}Plans

            </span>

          </h1>

          <p className="text-lg opacity-70">

            Choose a plan that matches your fitness goals.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={
                darkMode
                  ? "bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-300"
                  : "bg-gray-100 border border-black/10 rounded-3xl p-8 hover:border-red-500 transition duration-300"
              }
            >

              <h2 className="text-3xl font-bold text-red-500 mb-4">

                {plan.title}

              </h2>

              <p className="text-lg mb-3">

                Duration:
                {" "}
                {plan.duration}

              </p>

              <p className="opacity-70 mb-8">

                {plan.desc}

              </p>

              <button
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold text-white transition duration-300"
              >

                Start Plan

              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkoutPlans;