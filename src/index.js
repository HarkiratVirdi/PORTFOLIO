import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ThemeContextProvider from "./components/Context/Context";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./HOC/ScrollTop";

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ThemeContextProvider>
  </Router>,
  document.getElementById("root")
);
