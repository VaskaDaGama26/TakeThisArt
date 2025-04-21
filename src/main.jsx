import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { preload } from "react-dom";
preload("/images/mainIMG.jpg", { as: "image" });
preload("/fonts/Fira_Sans_Condensed/FiraSansCondensed-Light.woff2", { as: "font" });
preload("/fonts/Fira_Sans_Condensed/FiraSansCondensed-Medium.woff2", { as: "font" });

import App from "./App.jsx";

import "./reset.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
