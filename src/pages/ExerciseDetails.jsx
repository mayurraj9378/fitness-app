import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";

// Convert any YouTube URL to Embed URL
const getEmbedUrl = (url) => {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    // Already embed URL
    if (parsed.pathname.includes("/embed/")) {
      return url;
    }

    // youtube.com/watch?v=
    const videoId = parsed.searchParams.get("v");
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // youtu.be/VIDEO_ID
    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsed.pathname.substring(1)}`;
    }

    // youtube.com/shorts/VIDEO_ID
    if (parsed.pathname.includes("/shorts/")) {
      const id = parsed.pathname.split("/shorts/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  } catch (err) {
    return url;
  }
};

function ExerciseDetails() {
  const { id } = useParams();
  const { darkMode } = useTheme();

  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExercise();
  }, [id]);

  const fetchExercise = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:8080/exercises/${id}`
      );

      console.log("Exercise Data:", response.data);
      console.log("YouTube URL:", response.data.youtubeUrl);

      setExercise(response.data);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to load exercise");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveWorkout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8080/workouts",
        {
          workoutName: exercise?.name || "",
          category: exercise?.category || "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Workout Saved!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save workout");
    }
  };

  if (loading) {
    return (
      <div
        className={
          darkMode
            ? "bg-black min-h-screen text-white flex items-center justify-center text-3xl font-bold"
            : "bg-white min-h-screen text-black flex items-center justify-center text-3xl font-bold"
        }
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={
          darkMode
            ? "bg-black min-h-screen text-red-500 flex items-center justify-center text-3xl font-bold"
            : "bg-white min-h-screen text-red-500 flex items-center justify-center text-3xl font-bold"
        }
      >
        {error}
      </div>
    );
  }

  return (
    <div
      className={
        darkMode
          ? "bg-black min-h-screen text-white py-20 px-6"
          : "bg-white min-h-screen text-black py-20 px-6"
      }
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={
            darkMode
              ? "bg-zinc-900 rounded-3xl p-10 border border-white/10"
              : "bg-gray-100 rounded-3xl p-10 border border-black/10"
          }
        >
          <h1 className="text-5xl font-bold text-red-500 mb-8">
            {exercise?.name}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div
              className={
                darkMode
                  ? "bg-black p-6 rounded-2xl"
                  : "bg-white p-6 rounded-2xl"
              }
            >
              <h2 className="text-2xl font-bold mb-4">Category</h2>
              <p>{exercise?.category}</p>
            </div>

            <div
              className={
                darkMode
                  ? "bg-black p-6 rounded-2xl"
                  : "bg-white p-6 rounded-2xl"
              }
            >
              <h2 className="text-2xl font-bold mb-4">Difficulty</h2>
              <p>{exercise?.difficulty}</p>
            </div>

            <div
              className={
                darkMode
                  ? "bg-black p-6 rounded-2xl md:col-span-2"
                  : "bg-white p-6 rounded-2xl md:col-span-2"
              }
            >
              <h2 className="text-2xl font-bold mb-4">Sets / Reps</h2>
              <p>{exercise?.setsReps}</p>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "bg-black p-6 rounded-2xl mb-10"
                : "bg-white p-6 rounded-2xl mb-10"
            }
          >
            <h2 className="text-3xl font-bold mb-6">Description</h2>
            <p className="leading-8">{exercise?.description}</p>
          </div>

          {exercise?.youtubeUrl && (
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-6">Exercise Video</h2>

              <div className="overflow-hidden rounded-2xl">
                <iframe
                  width="100%"
                  height="500"
                  src={getEmbedUrl(exercise.youtubeUrl)}
                  title="Exercise Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {exercise?.reelUrl && (
            <div className="mb-10">
              <a
                href={exercise.reelUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl font-bold inline-block text-white"
              >
                Watch Instagram Reel
              </a>
            </div>
          )}

          <button
            onClick={handleSaveWorkout}
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold text-white"
          >
            Save Workout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;