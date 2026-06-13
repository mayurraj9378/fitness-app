import { useTheme } from "../context/ThemeContext";

function Workout() {

  const { darkMode } = useTheme();

  const workoutPlans = [

    {
      title: "Beginner Fat Loss",
      duration: "4 Weeks",
      level: "Beginner",
    },

    {
      title: "Muscle Building",
      duration: "8 Weeks",
      level: "Intermediate",
    },

    {
      title: "Strength Training",
      duration: "12 Weeks",
      level: "Advanced",
    },
  ];

  return (

    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white px-8 py-10 transition-all duration-300"
          : "min-h-screen bg-white text-black px-8 py-10 transition-all duration-300"
      }
    >

      <h1 className="text-5xl font-bold mb-12">

        WORKOUT

        <span className="text-red-500">

          {" "}PLANS

        </span>

      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {workoutPlans.map((plan, index) => (

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

            <p className="mb-6">

              Level:
              {" "}
              {plan.level}

            </p>

            <button
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition duration-300 text-white"
            >

              Start Plan

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Workout;