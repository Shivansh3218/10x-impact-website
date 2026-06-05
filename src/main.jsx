import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Use HashRouter when opened directly from disk (file://) so the site works
// by double-clicking the bundle; BrowserRouter when served or deployed.
const isFile =
  typeof window !== "undefined" && window.location.protocol === "file:";
const Router = isFile ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
