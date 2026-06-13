import {
  Routes,
  Route
} from "react-router-dom";

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
import Progress from "./pages/Progress";

function App() {

  return (

    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* PROTECTED ROUTES */}

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard/saved"
          element={<SavedWorkouts />}
        />

        <Route
          path="/dashboard/profile"
          element={<Profile />}
        />

        <Route
          path="/exercises"
          element={<Exercises />}
        />

        <Route
          path="/exercise/:id"
          element={<ExerciseDetails />}
        />

        <Route
          path="/workouts"
          element={<Workout />}
        />

        <Route
          path="/progress"
          element={<Progress />}
        />

      </Route>

    </Routes>
  );
}

export default App;