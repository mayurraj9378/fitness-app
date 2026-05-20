import { useParams } from "react-router-dom";

function ExerciseDetails() {
  const { name } = useParams();

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 max-w-2xl w-full">

        <h1 className="text-5xl font-bold text-red-500 mb-6">
          {name}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          This exercise helps improve your strength, endurance,
          and overall fitness level. Practice consistently with
          proper form for best results.
        </p>

        <div className="mt-8 space-y-4">

          <div className="bg-black p-4 rounded-xl">
            🔥 Calories Burn: 250 kcal
          </div>

          <div className="bg-black p-4 rounded-xl">
            💪 Difficulty: Intermediate
          </div>

          <div className="bg-black p-4 rounded-xl">
            ⏱ Duration: 20 mins
          </div>

        </div>

      </div>

    </div>
  );
}

export default ExerciseDetails;