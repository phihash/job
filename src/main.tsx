import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RetireProvider } from "./contexts/RetireProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RetireProvider>
      <App />
    </RetireProvider>
  </StrictMode>
);
