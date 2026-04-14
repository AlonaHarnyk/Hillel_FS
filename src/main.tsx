import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
);
