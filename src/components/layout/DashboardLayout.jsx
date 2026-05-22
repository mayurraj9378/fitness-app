
import { Outlet, Link, useNavigate } from "react-router-dom";

function DashboardLayout() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

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
            className="hover:text-red-500"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard/saved"
            className="hover:text-red-500"
          >
            Saved
          </Link>

          <Link
            to="/dashboard/profile"
            className="hover:text-red-500"
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"
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

