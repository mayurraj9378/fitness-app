import {
  FaUsers,
  FaDumbbell,
  FaFire,
  FaTrophy
} from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function Stats() {

  const { darkMode } = useTheme();

  const stats = [

    {
      icon: <FaUsers />,
      value: "10K+",
      title: "Active Users",
      color: "text-blue-500",
    },

    {
      icon: <FaDumbbell />,
      value: "500+",
      title: "Exercises",
      color: "text-red-500",
    },

    {
      icon: <FaFire />,
      value: "50K+",
      title: "Calories Burned",
      color: "text-orange-500",
    },

    {
      icon: <FaTrophy />,
      value: "1K+",
      title: "Goals Achieved",
      color: "text-yellow-500",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className={
                darkMode
                  ? "bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center hover:border-red-500 transition duration-300"
                  : "bg-gray-100 border border-black/10 rounded-3xl p-8 text-center hover:border-red-500 transition duration-300"
              }
            >

              <div
                className={`text-5xl mb-6 flex justify-center ${item.color}`}
              >

                {item.icon}

              </div>

              <h2 className="text-4xl font-bold mb-3">

                {item.value}

              </h2>

              <p className="opacity-70 text-lg">

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