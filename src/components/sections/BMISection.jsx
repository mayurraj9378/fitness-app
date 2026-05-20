
import { useState } from "react";

function BMISection() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = (
      weight / (heightInMeters * heightInMeters)
    ).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus("Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            BMI <span className="text-red-500">CALCULATOR</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Calculate your Body Mass Index and track your fitness journey.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 shadow-2xl border border-white/10">
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <div>
              <label className="block mb-2 text-gray-300">
                Height (cm)
              </label>

              <input
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Weight (kg)
              </label>

              <input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

          </div>

          <button
            onClick={calculateBMI}
            className="mt-8 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-10 bg-black rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold">
                Your BMI: <span className="text-red-500">{bmi}</span>
              </h3>

              <p className="text-gray-300 mt-2">
                Status: {status}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default BMISection;

