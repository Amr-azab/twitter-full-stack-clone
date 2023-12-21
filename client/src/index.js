import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import webVitals from "./webVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
webVitals();
