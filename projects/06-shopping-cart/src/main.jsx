import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import { FiltersProvider } from "./context/filters.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>
);
