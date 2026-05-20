import { Link, Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("fitness-user");
    navigate("/login");
  };

  return (
    <div className="bg-black min-h-screen text-white flex">

      {/* Sidebar */}
      <div className="w-72 bg-zinc-950 border-r border-white/10 p-8 hidden md:block">

        <h1 className="text-4xl font-bold mb-12">
          Fit<span className="text-red-500">Zone</span>
        </h1>

        <div className="space-y-6 text-lg">

          <Link
            to="/dashboard"
            className="block hover:text-red-500 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/exercises"
            className="block hover:text-red-500 transition"
          >
            Exercises
          </Link>

          <Link
            to="/workouts"
            className="block hover:text-red-500 transition"
          >
            Workouts
          </Link>

          <button
            onClick={handleLogout}
            className="block hover:text-red-500 transition"
          >
            Logout
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;