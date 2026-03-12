import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { StrictMode } from "react";
import "./index.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
