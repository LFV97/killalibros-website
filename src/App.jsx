import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
