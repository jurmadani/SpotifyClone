import React from "react";
import "./PlayerPageFooter.css";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  VolumeDown,
} from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { Box, Grid, Slider } from "@mui/material";
import { useSelector } from "react-redux";
import { playerSliceType } from "../../types";
import { grey } from "@mui/material/colors";

export default function PlayerPageFooter() {
  const playerState: playerSliceType = useSelector(
    (state: any) => state.player
  );

  return (
    <div className="playerPageFooter">
      <div className="playerPageFooter_left">
        {/* Album Image */}
        {playerState.currentPlayingTrackImage === "" ? (
          <img
            src="https://mynoota.com/api/images/__default.png"
            className="defaultPlaceholder"
          />
        ) : (
          <img
            src={playerState.currentPlayingTrackImage}
            className="albumCover"
          />
        )}
        <div className="trackAndArtistsBody">
          {/* track name */}
          {playerState.currentPlayingTrack === "" ? (
            <p style={{ color: "white", marginLeft: 15 }}>No song playing</p>
          ) : (
            <p className="currentTrackName">{playerState.currentPlayingTrack}</p>
          )}
          {/* Artists */}
          {playerState.currentPlayingTrackArtists.length !== 0 && (
            <div className="currentTrackPlayingArtistsBody">
              {playerState.currentPlayingTrackArtists.map((artist, index) => (
                <p className="artistOfTheTrack" key={artist.id}>
                  {artist.name}
                  {index < playerState.currentPlayingTrackArtists.length - 1
                    ? ", "
                    : ""}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="playerPageFooter_center">
        <Shuffle className="shuffle" />
        <SkipPrevious className="skip_previous" />
        <PlayCircleOutline fontSize="large" className="play" />
        <SkipNext className="skip_next" />
        <Repeat className="repeat" />
      </div>
      <div className="playerPageFooter_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay className="playlistPlay" />
          </Grid>
          <Grid item>
            <VolumeDown className="volumeDown" />
          </Grid>
          <Grid item xs>
            <Slider className="slider" style={{ width: 250 }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
