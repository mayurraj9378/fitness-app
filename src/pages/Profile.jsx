import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    goal: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem("fitness-profile"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "fitness-profile",
      JSON.stringify(user)
    );

    setEditing(false);

    alert("Profile Updated!");
  };

  return (
    <div className="text-white">

      <h1 className="text-5xl font-bold mb-12">
        USER <span className="text-red-500">PROFILE</span>
      </h1>

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 max-w-3xl">

        <div className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-400">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!editing}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          {/* Goal */}
          <div>
            <label className="block mb-2 text-gray-400">
              Fitness Goal
            </label>

            <input
              type="text"
              name="goal"
              value={user.goal}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Muscle Gain / Fat Loss / Strength"
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={saveProfile}
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Save Profile
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;