import React from "react";
import LoginPage from "./Pages/Login/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "./Pages/Signup/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
