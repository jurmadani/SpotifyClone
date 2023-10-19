import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./PlayerBodyHeader.css";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchTrackSlice } from "../../redux/searchTrackSlice";

export default function PlayerBodyHeader() {
  const [searchInput, setSearchInput] = React.useState("");
  const dispatch = useDispatch();
  const accessToken = useSelector((state: any) => state.access.accessToken);
  const searchFunction = async () => {
    var songParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var trackID = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchInput +
        "&type=track" +
        "&limit=6",
      songParameters
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch(searchTrackSlice.actions.setTracksArray(data.tracks.items))
      );
  };
  return (
    <div className="PlayerBodyHeader">
      <div className="PlayerBodyHeaderLeft">
        <SearchIcon />
        <input
          type="text"
          placeholder="What would you want to listen to?"
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              searchFunction();
            }
          }}
        />
      </div>
      <div className="PlayerBodyHeaderRight">
        <Avatar />
        <h3>Daniel Jurma</h3>
      </div>
    </div>
  );
}
