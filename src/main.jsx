import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Routes from "./rotas.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>
);
