import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// wrapping it in curly brackets to avoid the default export but the component function instead!
// importing named exports it is javascript standard to do with curly brackets
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  // wrapping FavoritesContextProvider provides functionality to all enclosed items.
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
