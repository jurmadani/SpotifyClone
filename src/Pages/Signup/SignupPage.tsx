import React from "react";
import "./Signup.css";
import Header from "../../Components/SignupPage/Header";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Body from "../../Components/SignupPage/Body";
import Footer from "../../Components/SignupPage/Footer";

export default function SignupPage() {
  return (
    <div className="signup">
      {/* Header */}
      <Header />
      {/* Black line */}
      <div className="blackLine" />
      {/* Signup body */}
      <Body />
      {/* Email adress */}
      <Footer/>
    </div>
  );
}
