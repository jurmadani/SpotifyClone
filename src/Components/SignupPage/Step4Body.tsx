import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Step4Body.css";
import { Waveform } from "@uiball/loaders";
import { useSelector } from "react-redux";
import { signupSliceType } from "../../types";
import { HandleSignUp } from "../../controllers/HandleSignUp";

type Step4BodyType = {
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step4Body({ setStepNumber }: Step4BodyType) {
  const [loading, setLoading] = React.useState(false);
  const signupState: signupSliceType = useSelector(
    (state: any) => state.signup
  );
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
          onClick={async () => {
            setLoading(true);
            await HandleSignUp(
              setLoading,
              signupState.email,
              signupState.password,
              signupState.name,
              signupState.birthDate.month,
              signupState.birthDate.day,
              signupState.birthDate.year
            );
          }}
        >
          {loading && (
            <Waveform size={30} speed={1} lineWeight={3.5} color="#1ed760" />
          )}
          {!loading && <p>Next</p>}
        </a>
      </div>
    </div>
  );
}
