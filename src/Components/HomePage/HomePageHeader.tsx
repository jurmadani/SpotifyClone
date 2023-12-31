import React from "react";
import "./HomePageHeader.css";
import { useNavigate } from "react-router-dom";
import { loginURL } from "../../backend/spotify-api";

export default function HomePageHeader() {
  const navigate = useNavigate();
  return (
    <div className="headerBody">
      <img
        className="spotifyLogo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="headerOptions">
        <a href={loginURL} className="playerAnchor">Player</a>
        <a>Profile </a>
        <p>|</p>
        <a className="logoutAnchor">Log out</a>
      </div>
    </div>
  );
}
