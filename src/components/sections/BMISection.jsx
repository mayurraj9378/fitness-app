import { useState } from "react";

import { useTheme } from "../../context/ThemeContext";

function BMISection() {

  const { darkMode } = useTheme();

  const [height, setHeight] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [bmi, setBmi] =
    useState(null);

  const [status, setStatus] =
    useState("");

  const calculateBMI = () => {

    if (!height || !weight) return;

    const heightInMeters =
      height / 100;

    const bmiValue =
      (
        weight /
        (
          heightInMeters *
          heightInMeters
        )
      ).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {

      setStatus("Underweight");

    } else if (bmiValue < 25) {

      setStatus("Normal");

    } else if (bmiValue < 30) {

      setStatus("Overweight");

    } else {

      setStatus("Obese");
    }
  };

  return (

    <section
      className={
        darkMode
          ? "bg-black text-white py-20 transition-all duration-300"
          : "bg-white text-black py-20 transition-all duration-300"
      }
    >

      <div className="max-w-5xl mx-auto px-6">

        <div
          className={
            darkMode
              ? "bg-zinc-900 border border-white/10 rounded-3xl p-10"
              : "bg-gray-100 border border-black/10 rounded-3xl p-10"
          }
        >

          <h1 className="text-5xl font-bold mb-6">

            BMI

            <span className="text-red-500">

              {" "}Calculator

            </span>

          </h1>

          <p className="opacity-70 mb-10 text-lg">

            Calculate your Body Mass Index and know your fitness condition.

          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className={
                darkMode
                  ? "bg-black border border-white/10 rounded-2xl p-4 outline-none focus:border-red-500"
                  : "bg-white border border-black/10 rounded-2xl p-4 outline-none focus:border-red-500"
              }
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              className={
                darkMode
                  ? "bg-black border border-white/10 rounded-2xl p-4 outline-none focus:border-red-500"
                  : "bg-white border border-black/10 rounded-2xl p-4 outline-none focus:border-red-500"
              }
            />

          </div>

          <button
            onClick={calculateBMI}
            className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold text-white transition duration-300"
          >

            Calculate BMI

          </button>

          {bmi && (

            <div
              className={
                darkMode
                  ? "bg-black rounded-2xl p-8 mt-10"
                  : "bg-white rounded-2xl p-8 mt-10"
              }
            >

              <h2 className="text-3xl font-bold mb-4">

                Your BMI:
                {" "}
                <span className="text-red-500">

                  {bmi}

                </span>

              </h2>

              <p className="text-xl">

                Status:
                {" "}
                <span className="font-bold text-green-500">

                  {status}

                </span>

              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default BMISection;