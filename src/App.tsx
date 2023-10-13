import React from "react";
import LoginPage from "./Pages/Login/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "./Pages/Signup/SignupPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
