import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./PlayerBodyHeader.css";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchTrackSlice } from "../../redux/searchTrackSlice";
import { PlayerBodyHeaderType } from "../../types";

export default function PlayerBodyHeader({ setLoading }: PlayerBodyHeaderType) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();
  const accessToken = useSelector((state: any) => state.access.accessToken);
  const searchFunction = async (text: string) => {
    var songParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var trackID = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        text +
        "&type=track" +
        "&limit=25",
      songParameters
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.tracks && data.tracks.items) {
          dispatch(searchTrackSlice.actions.setTracksArray(data.tracks.items));
        } else {
          dispatch(searchTrackSlice.actions.setTracksArray([])); // Set an empty array if no tracks are found.
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error or display a message to the user.
        setLoading(false);
      });
  };

  React.useEffect(() => {
    // This effect will run whenever searchTerm changes.
    const delay = 500; // Delay in milliseconds

    // Clear any existing timeout whenever searchTerm changes.
    const timeoutId = setTimeout(() => {
      if (searchTerm !== "") {
        setLoading(true);
        searchFunction(searchTerm);
      } else {
        dispatch(searchTrackSlice.actions.setTracksArray([]));
      }
    }, delay);

    return () => {
      // Cleanup the previous timeout to prevent multiple searches.
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="PlayerBodyHeader">
      <div className="PlayerBodyHeaderLeft">
        <SearchIcon />
        <input
          type="text"
          placeholder="What would you want to listen to?"
          onChange={handleInputChange}
        />
      </div>
      <div className="PlayerBodyHeaderRight">
        <Avatar />
        <h3>Daniel Jurma</h3>
      </div>
    </div>
  );
}
