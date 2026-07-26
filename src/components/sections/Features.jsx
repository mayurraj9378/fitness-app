import { FaDumbbell, FaChartLine, FaHeartbeat, FaCalculator } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

function Features() {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: <MdDashboard size={40} className="text-red-500" />,
      title: "Dashboard",
      description: "Monitor your workouts and fitness progress from one place.",
    },
    {
      icon: <FaDumbbell size={40} className="text-red-500" />,
      title: "Exercise Library",
      description: "Browse exercises with descriptions and video demonstrations.",
    },
    {
      icon: <FaHeartbeat size={40} className="text-red-500" />,
      title: "Workout Tracker",
      description: "Save and manage your personalized workout routines.",
    },
    {
      icon: <FaChartLine size={40} className="text-red-500" />,
      title: "Progress Tracker",
      description: "Track your weight journey and stay motivated.",
    },
    {
      icon: <FaCalculator size={40} className="text-red-500" />,
      title: "BMI Calculator",
      description: "Instantly calculate your Body Mass Index.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose <span className="text-red-500">FitZone?</span>
        </h2>

        <p className="text-center opacity-70 mb-12">
          Everything you need to begin and maintain your fitness journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition hover:scale-105 ${
                darkMode
                  ? "bg-zinc-900 border border-zinc-800"
                  : "bg-gray-100"
              }`}
            >
              {feature.icon}

              <h3 className="text-2xl font-bold mt-5">
                {feature.title}
              </h3>

              <p className="mt-3 opacity-70">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;