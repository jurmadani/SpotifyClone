import React from "react";
import "./Signup.css";
import Header from "../../Components/SignupPage/Header";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Step1Body from "../../Components/SignupPage/Step1Body";
import Footer from "../../Components/SignupPage/Footer";
import Step2Body from "../../Components/SignupPage/Step2Body";
import Step3Body from "../../Components/SignupPage/Step3Body";
import Step4Body from "../../Components/SignupPage/Step4Body";

export default function SignupPage() {
  const [signupStep, setSignupStep] = React.useState(1);
  return (
    <div className="signup">
      {/* Header */}
      <Header />
      {/* Black line */}
      <div className="blackLine" />
      {signupStep === 1 && <Step1Body setStepNumber={setSignupStep} />}
      {signupStep === 2 && <Step2Body setStepNumber={setSignupStep} />}
      {signupStep === 3 && <Step3Body setStepNumber={setSignupStep} />}
      {signupStep === 4 && <Step4Body setStepNumber={setSignupStep} />}
      {/* Signup body */}
      {/* Footer*/}
      <Footer />
    </div>
  );
}
