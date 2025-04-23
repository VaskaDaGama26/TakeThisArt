import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { preload } from "react-dom";
preload("/TakeThisArt/images/mainIMG.jpg", { as: "image" });
preload("/TakeThisArt/fonts/Fira_Sans_Condensed/FiraSansCondensed-Light.woff2", { as: "font" });
preload("/TakeThisArt/fonts/Fira_Sans_Condensed/FiraSansCondensed-Medium.woff2", { as: "font" });

import App from "./App.jsx";

import "./reset.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/TakeThisArt/">
      <App />
    </Router>
  </StrictMode>
);
