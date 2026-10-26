import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HerooesApp from "./HerooesApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <HerooesApp />
    </div>
  </StrictMode>,
);
