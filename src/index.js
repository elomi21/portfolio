import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./style/index.scss";



createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <App />
    </React.StrictMode>

);

reportWebVitals();
