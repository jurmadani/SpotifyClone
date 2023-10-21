import React from "react";
import Sidebar from "../../Components/PlayerPage/Sidebar";
import "./Player.css";
import PlayerBody from "../../Components/PlayerPage/PlayerBody";
import PlayerPageFooter from "../../Components/PlayerPage/PlayerPageFooter";
import { useSelector } from "react-redux";
import { Grid, Button, SnackbarOrigin, Box, Snackbar } from "@mui/material";
import { State, playerSliceType } from "../../types";

export default function PlayerPage() {
  const player: playerSliceType = useSelector((state: any) => state.player);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.log(player);
    setOpen(player.doesTrackHavePreview  === true ? false : true);
  }, [player.currentPlayingTrack]);

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
        <Sidebar />
        {/* Body */}
        <PlayerBody />
      </div>
      {/* Footer */}
      <PlayerPageFooter />
    </div>
  );
}
