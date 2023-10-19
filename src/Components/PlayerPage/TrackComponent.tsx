import React from "react";
import { useSelector } from "react-redux";
import { TrackComponentType } from "../../types";
import "./TrackComponent.css";

export function formatDuration(durationMs: number) {
  const durationInSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;
  const formattedDuration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return formattedDuration;
}

export default function TrackComponent({ track, id }: TrackComponentType) {
  return (
    <div className="TrackComponentBody">
      <div className="numberAndTitleBody">
        {/* Number of the song */}
        <p>{id + 1}</p>
        {/* Title of the song + image of the album */}
        <img src={track.album.images[2].url} />
        <p>{track.name}</p>
      </div>

      {/*  Album */}
      <p>{track.album.name}</p>
      {/* Duration */}
      <p>{formatDuration(track.duration_ms)} </p>
    </div>
  );
}
