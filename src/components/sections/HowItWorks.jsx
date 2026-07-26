import { useTheme } from "../../context/ThemeContext";

function HowItWorks() {
  const { darkMode } = useTheme();

  const steps = [
    "Create Your Account",
    "Browse Exercise Library",
    "Save Your Workouts",
    "Track Your Progress",
    "Achieve Your Fitness Goals",
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          How <span className="text-red-500">FitZone</span> Works
        </h2>

        <p className="text-center opacity-70 mb-14">
          Start your fitness journey in just a few simple steps.
        </p>

        <div className="space-y-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-gray-100"
              }`}
            >
              <div className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;