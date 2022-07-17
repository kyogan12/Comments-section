import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { CommentsContextProvider } from "./context/CommentsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CommentsContextProvider>
      <App />
    </CommentsContextProvider>
  </React.StrictMode>
);
