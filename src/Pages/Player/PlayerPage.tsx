import React from "react";
import Sidebar from "../../Components/PlayerPage/Sidebar";
import "./Player.css"
import PlayerBody from "../../Components/PlayerPage/PlayerBody";
import PlayerPageFooter from "../../Components/PlayerPage/PlayerPageFooter";

export default function PlayerPage() {
  return (
    <div className="player">
      <div className="playerBody">
        {/* Sidebar */}
        <Sidebar/>
        {/* Body */}
        <PlayerBody/>
      </div>
    {/* Footer */}
    <PlayerPageFooter/>
    </div>
  );
}
