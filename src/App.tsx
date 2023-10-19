import React from "react";
import LoginPage from "./Pages/Login/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "./Pages/Signup/SignupPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomePage from "./Pages/Home/HomePage";
import PlayerPage from "./Pages/Player/PlayerPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/player" element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
