import React from "react";
import "./HomePageBody1.css";
import { useNavigate } from "react-router-dom";

export default function HomePageBody1() {
  const navigate = useNavigate()
  return (
    <div className="homepage1Body">
      <h1 className="title">Spotify Clone</h1>
      <p className="paragraph1">
        A React.js project made by{" "}
        <a
          className="linkedinAnchor"
          href="https://www.linkedin.com/in/daniel-jurma/"
        >
          Jurma Daniel
        </a>
      </p>
      <div className="buttonsBody">
        <a className="getStartedAnchor" onClick={() => navigate("/player")}>GET STARTED</a>
        <a className="otherProjectsAnchor" href="https://github.com/jurmadani">SEE OTHER PROJECTS</a>
      </div>
    </div>
  );
}
