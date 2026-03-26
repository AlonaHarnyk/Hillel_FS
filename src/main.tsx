import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { StrictMode } from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
