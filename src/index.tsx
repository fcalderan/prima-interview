import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Demo from "./pages/Demo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
