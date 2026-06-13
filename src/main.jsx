import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter
} from "react-router-dom";

import App from "./App";

import "./index.css";

import {
  ThemeProvider
} from "./context/ThemeContext";

import {
  Toaster
} from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />

        <App />

      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>
);