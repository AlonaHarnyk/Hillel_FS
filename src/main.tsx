import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { StrictMode } from "react";
import "./index.css";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
