
import { useEffect, useState } from "react";
import axios from "axios";

function Exercises() {

  const [allExercises, setAllExercises] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/exercises")
      .then((response) => {

        setAllExercises(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div className="bg-black min-h-screen text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          EXERCISE <span className="text-red-500">LIBRARY</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {allExercises.map((exercise) => (

            <div
              key={exercise.id}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-red-500">
                {exercise.name}
              </h2>

              <p className="text-gray-400 mt-4 text-lg">
                Category: {exercise.category}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Exercises;

