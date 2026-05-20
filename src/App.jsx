import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Workout from "./pages/Workout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ExerciseDetails from "./pages/ExerciseDetails";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import SavedWorkouts from "./pages/SavedWorkouts";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/exercises" element={<Exercises />} />

      <Route path="/workouts" element={<Workout />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/exercise/:name"
        element={<ExerciseDetails />}
      />

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />

        <Route
          path="saved"
          element={<SavedWorkouts />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />
      </Route>

    </Routes>
  );
}

export default App;