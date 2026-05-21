
import { useEffect, useState } from "react";
import axios from "axios";

function Exercises() {

  const [allExercises, setAllExercises] = useState([]);

  const [name, setName] = useState("");

  const [category, setCategory] = useState("");

  const [editingId, setEditingId] = useState(null);

  const fetchExercises = () => {

    axios
      .get("http://localhost:8080/exercises")
      .then((response) => {

        setAllExercises(response.data);

      })
      .catch((error) => {

        console.log(error);

      });
  };

  useEffect(() => {

    fetchExercises();

  }, []);

  const handleAddExercise = () => {

    const newExercise = {
      name,
      category
    };

    axios
      .post(
        "http://localhost:8080/add",
        newExercise
      )
      .then(() => {

        fetchExercises();

        setName("");

        setCategory("");

      })
      .catch((error) => {

        console.log(error);

      });
  };

  const handleDeleteExercise = (id) => {

    axios
      .delete(`http://localhost:8080/exercises/${id}`)
      .then(() => {

        fetchExercises();

      })
      .catch((error) => {

        console.log(error);

      });
  };

  const handleEditClick = (exercise) => {

    setEditingId(exercise.id);

    setName(exercise.name);

    setCategory(exercise.category);
  };

  const handleUpdateExercise = () => {

    const updatedExercise = {
      name,
      category
    };

    axios
      .put(
        `http://localhost:8080/exercises/${editingId}`,
        updatedExercise
      )
      .then(() => {

        fetchExercises();

        setName("");

        setCategory("");

        setEditingId(null);

      })
      .catch((error) => {

        console.log(error);

      });
  };

  return (

    <div className="bg-black min-h-screen text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          EXERCISE <span className="text-red-500">LIBRARY</span>
        </h1>

        {/* FORM */}

        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 mb-12">

          <h2 className="text-3xl font-bold mb-8">
            {editingId ? "Update Exercise" : "Add Exercise"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <input
              type="text"
              placeholder="Exercise Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black border border-white/10 rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-black border border-white/10 rounded-xl p-4"
            />

            {editingId ? (

              <button
                onClick={handleUpdateExercise}
                className="bg-yellow-500 hover:bg-yellow-600 rounded-xl p-4 font-bold"
              >
                Update Exercise
              </button>

            ) : (

              <button
                onClick={handleAddExercise}
                className="bg-red-500 hover:bg-red-600 rounded-xl p-4 font-bold"
              >
                Add Exercise
              </button>

            )}

          </div>

        </div>

        {/* EXERCISE LIST */}

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

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => handleEditClick(exercise)}
                  className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-bold"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteExercise(exercise.id)}
                  className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Exercises;

