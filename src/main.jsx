import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import SidenavContextProvider from "./context/SidenavContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidenavContextProvider>
        <App />
      </SidenavContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
