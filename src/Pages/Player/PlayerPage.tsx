import React from "react";
import Sidebar from "../../Components/PlayerPage/Sidebar";
import "./Player.css";
import PlayerBody from "../../Components/PlayerPage/PlayerBody";
import PlayerPageFooter from "../../Components/PlayerPage/PlayerPageFooter";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, SnackbarOrigin, Box, Snackbar } from "@mui/material";
import { State, playerSliceType } from "../../types";
import { getTokenFromURL } from "../../backend/spotify-api";
import { accessSlice } from "../../redux/accessSlice";
import SpotifyWebApi from "spotify-web-api-js";
import { spotifyUserSlice } from "../../redux/spotifyUserSlice";

const spotify = new SpotifyWebApi();

export default function PlayerPage() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = React.useState("");
  const player: playerSliceType = useSelector((state: any) => state.player);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(player.doesTrackHavePreview === true ? false : true);
  }, [player.currentPlayingTrack]);

  React.useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";

    //@ts-expect-error
    const token = hash.access_token;
    if (token) {
      dispatch(accessSlice.actions.setAccessTokenForUserInformation(token));
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        dispatch(spotifyUserSlice.actions.setDisplayName(user.display_name));
        if (user.images !== undefined)
          dispatch(spotifyUserSlice.actions.setImageURL(user.images[0].url));
      });
    }
  }, []);

  React.useEffect(() => {
    if (open === true)
      setTimeout(() => {
        setOpen(false);
      }, 2000);
  }, [open]);
  return (
    <div className="player">
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          message="Song doesn't have a audio preview"
        />
      </Box>
      <div className="playerBody">
        {/* Sidebar */}
        <Sidebar searchInput={searchInput} setSearchInput={setSearchInput} />
        {/* Body */}
        <PlayerBody searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      {/* Footer */}
      <PlayerPageFooter />
    </div>
  );
}
