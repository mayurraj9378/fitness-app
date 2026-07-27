import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";

function Progress() {

  const { darkMode } = useTheme();

  const [weight, setWeight] = useState("");

  const [progress, setProgress] = useState([]);

  const fetchProgress = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          `${API_BASE}/progress`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

      setProgress(response.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load progress");
    }
  };

  useEffect(() => {

    fetchProgress();

  }, []);

  const addProgress = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(
        `${API_BASE}/progress`,
        {
          weight: Number(weight),
          date: new Date()
            .toLocaleDateString()
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setWeight("");

      toast.success(
        "Weight Added Successfully"
      );

      fetchProgress();

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to add progress"
      );
    }
  };

  const deleteProgress = async (id) => {

    try {

      await axios.delete(
        `${API_BASE}/progress/${id}`
      );

      toast.success(
        "Entry Deleted"
      );

      fetchProgress();

    } catch (error) {

      console.log(error);

      toast.error(
        "Delete Failed"
      );
    }
  };

  const latestWeight =
    progress.length > 0
      ? progress[progress.length - 1].weight
      : 0;

  const firstWeight =
    progress.length > 0
      ? progress[0].weight
      : 0;

  const difference =
    firstWeight - latestWeight;

  return (

    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white p-10"
          : "min-h-screen bg-white text-black p-10"
      }
    >

      <h1 className="text-5xl font-bold mb-10">

        Progress

        <span className="text-red-500">

          {" "}Tracker

        </span>

      </h1>

      <div
        className={
          darkMode
            ? "bg-zinc-900 p-8 rounded-3xl mb-10"
            : "bg-gray-100 p-8 rounded-3xl mb-10"
        }
      >

        <h2 className="text-2xl font-bold mb-6">

          Add Weight

        </h2>

        <div className="flex gap-4">

          <input
            type="number"
            placeholder="Enter Weight (kg)"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            className={
              darkMode
                ? "bg-black border border-white/10 p-4 rounded-xl w-full"
                : "bg-white border border-black/10 p-4 rounded-xl w-full"
            }
          />

          <button
            onClick={addProgress}
            className="bg-red-500 hover:bg-red-600 px-8 rounded-xl font-bold text-white"
          >

            Save

          </button>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-green-500 p-6 rounded-3xl text-white">

          <h3 className="text-xl font-bold">

            Starting Weight

          </h3>

          <p className="text-4xl mt-3">

            {firstWeight} kg

          </p>

        </div>

        <div className="bg-blue-500 p-6 rounded-3xl text-white">

          <h3 className="text-xl font-bold">

            Current Weight

          </h3>

          <p className="text-4xl mt-3">

            {latestWeight} kg

          </p>

        </div>

        <div className="bg-red-500 p-6 rounded-3xl text-white">

          <h3 className="text-xl font-bold">

            Weight Lost

          </h3>

          <p className="text-4xl mt-3">

            {difference} kg

          </p>

        </div>

      </div>

      <div
        className={
          darkMode
            ? "bg-zinc-900 rounded-3xl p-8"
            : "bg-gray-100 rounded-3xl p-8"
        }
      >

        <h2 className="text-3xl font-bold mb-8">

          Weight History

        </h2>

        <div className="space-y-4">

          {progress.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center bg-black/20 p-5 rounded-2xl"
            >

              <div>

                <h3 className="font-bold text-xl">

                  {item.weight} kg

                </h3>

                <p>

                  {item.date}

                </p>

              </div>

              <button
                onClick={() =>
                  deleteProgress(item.id)
                }
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white font-bold"
              >

                Delete

              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Progress;