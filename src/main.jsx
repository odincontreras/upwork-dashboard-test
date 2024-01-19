import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import theme from "./libs/muiTheme.js";
import App from "./App.jsx";
import AppLayout from "./components/AppLayout/index.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppLayout>
        <App />
      </AppLayout>
    </ThemeProvider>
  </React.StrictMode>
);
