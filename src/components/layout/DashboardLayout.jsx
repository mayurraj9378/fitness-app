
import {
  Outlet,
  Link,
  useNavigate
} from "react-router-dom";

function DashboardLayout() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("fitness-user");

    localStorage.removeItem("fitness-profile");

    localStorage.removeItem("saved-workouts");

    localStorage.removeItem("workout-history");

    alert("Logged out successfully");

    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}

      <div className="flex justify-between items-center px-10 py-6 border-b border-white/10">

        <h1 className="text-3xl font-bold">

          FIT<span className="text-red-500">ZONE</span>

        </h1>

        <div className="flex gap-6 items-center">

          <Link
            to="/dashboard"
            className="hover:text-red-500 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard/saved"
            className="hover:text-red-500 transition duration-300"
          >
            Saved
          </Link>

          <Link
            to="/dashboard/profile"
            className="hover:text-red-500 transition duration-300"
          >
            Profile
          </Link>

          <Link
            to="/exercises"
            className="hover:text-red-500 transition duration-300"
          >
            Exercises
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-bold transition duration-300 hover:scale-105"
          >
            Logout
          </button>

        </div>

      </div>

      {/* Page Content */}

      <div className="p-10">

        <Outlet />

      </div>

    </div>
  );
}

export default DashboardLayout;

