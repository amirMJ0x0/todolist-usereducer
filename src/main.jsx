import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { TodoProvider } from "./context/TodoProvider.jsx";
import { MemoProvider } from "./context/MemoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <MemoProvider>
          <App />
        </MemoProvider>
      </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
