import React from "react";
import "./PlayerBody.css";
import PlayerBodyHeader from "./PlayerBodyHeader";
import { useSelector } from "react-redux";
import { Track, searchSliceType } from "../../types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackComponent from "./TrackComponent";

export default function PlayerBody() {
  const tracksArray = useSelector(
    (state: any) => state.searchTrack.tracksArray
  );
  const greetUserByTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return `Good morning, Daniel`;
    } else if (currentHour < 18) {
      return `Good day, Daniel`;
    } else {
      return `Good afternoon, Daniel`;
    }
  };

  return (
    <div className="playerPageBody">
      {/* Header */}
      <PlayerBodyHeader />
      {/* Body */}
      {tracksArray.length === 0 ? (
        <div className="defaultBody">
          {/* If user didn't search nothing display the default body */}
          <h1>{greetUserByTime()}</h1>
          <p>start searching for music</p>
        </div>
      ) : (
        <div className="tracksBody">
          {/* If user searched something, display the searched items */}
          <div className="tracksBodyHeader">
            <div className="numberTitleBody">
              {/* Number  */}
              <p>#</p>
              {/* Title */}
              <p>Title</p>
            </div>

            {/* Album */}
            <p>Album</p>
            {/* Duration time of the song */}
            <AccessTimeIcon />
          </div>
          <hr />
          {tracksArray.map((item: Track) => {
            <TrackComponent />;
          })}
        </div>
      )}
    </div>
  );
}
