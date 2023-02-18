import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
window.addEventListener("blur", () => {
  document.title = "Close me or return";
});
window.addEventListener("focus", () => {
  document.title = "Our WareHouse";
});
