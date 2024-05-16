import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import SidenavContextProvider from "./context/sidenavContext/SidenavContextProvider.jsx";
import CourseContextProvider from "./context/courseConext/CourseContextProvider.jsx";
import {Provider} from "react-redux";
import { store } from "./state/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SidenavContextProvider>
          <App />
        </SidenavContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
