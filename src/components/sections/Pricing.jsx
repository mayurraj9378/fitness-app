import { useTheme } from "../../context/ThemeContext";

function Pricing() {

  const { darkMode } = useTheme();

  const plans = [

    {
      title: "Basic",
      price: "Free",
      features: [
        "Access Exercise Library",
        "Basic Workout Plans",
        "Track Saved Workouts",
      ],
    },

    {
      title: "Pro",
      price: "₹499/month",
      features: [
        "Advanced Workout Plans",
        "Personal Fitness Tracking",
        "Premium Exercises",
      ],
    },

    {
      title: "Elite",
      price: "₹999/month",
      features: [
        "AI Fitness Coach",
        "Diet Recommendations",
        "Priority Support",
      ],
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

            Pricing

            <span className="text-red-500">

              {" "}Plans

            </span>

          </h1>

          <p className="text-lg opacity-70">

            Choose the perfect plan for your fitness journey.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={
                darkMode
                  ? "bg-zinc-900 border border-white/10 rounded-3xl p-10 hover:border-red-500 transition duration-300"
                  : "bg-gray-100 border border-black/10 rounded-3xl p-10 hover:border-red-500 transition duration-300"
              }
            >

              <h2 className="text-3xl font-bold text-red-500 mb-4">

                {plan.title}

              </h2>

              <h3 className="text-4xl font-bold mb-8">

                {plan.price}

              </h3>

              <ul className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (

                  <li
                    key={i}
                    className="opacity-80"
                  >

                    • {feature}

                  </li>

                ))}

              </ul>

              <button
                className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-bold text-white transition duration-300"
              >

                Choose Plan

              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;