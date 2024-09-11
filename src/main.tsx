import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/general.css";
import "./styles/utilities.css";
import "./styles/reusable.css";
import "./styles/layouts.css";
import { Provider } from "react-redux";
import { store } from "./state/store.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>,
);
