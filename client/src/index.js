import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import { NotificationProvider } from "./context/NotificationContext";

import "normalize.css";

import App from "./App";
import { AppProvider } from "./context/GlobalContext";

reactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
