import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Grab the root div
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
