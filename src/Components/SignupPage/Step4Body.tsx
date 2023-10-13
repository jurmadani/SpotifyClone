import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Step4Body.css";

type Step4BodyType = {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step4Body({ setStepNumber }: Step4BodyType) {
  return (
    <div className="step4Body">
      <div className="stepInfoBody">
        {/* Go back icon */}
        <ArrowBackIosIcon
          onClick={() => setStepNumber(3)}
          className="backArrow"
        />
        {/* Step number */}
        <div className="stepInfoBody2">
          <text style={{ color: "gray" }}>Step 3 of 3</text>
          <text style={{ marginTop: 3 }}> Terms & Conditions</text>
        </div>
      </div>
      <div className="centeredFormControl">
        <p>
          By clicking on sign-up, you agree & acknowledge this is a personal
          project and it's made with the purpose of demonstrating the developers
          React.js skills.
        </p>
        <p className="paragraph-2">
          To learn more about Daniel Jurma other projects, please see his{" "}
          <a href="https://github.com/jurmadani">github page.</a>
        </p>
        <a
          className="signupAnchor"
          onClick={() => console.log("Sign-up in process...")}
        >
          Sign up
        </a>
      </div>
    </div>
  );
}
