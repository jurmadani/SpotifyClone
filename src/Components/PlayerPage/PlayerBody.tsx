import React from "react";
import "./PlayerBody.css";
import PlayerBodyHeader from "./PlayerBodyHeader";
import { useDispatch, useSelector } from "react-redux";
import { Track, searchSliceType } from "../../types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { formatDuration } from "./TrackComponent";
import ExplicitIcon from "@mui/icons-material/Explicit";
import { DotSpinner } from "@uiball/loaders";
import { PlayCircle } from "@mui/icons-material";
import { playerSlice } from "../../redux/playerSlice";

export default function PlayerBody() {
  const tracksArray = useSelector(
    (state: any) => state.searchTrack.tracksArray
  );
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = React.useState(-1);
  const [rowHover, setRowHover] = React.useState(-1);
  const [loading, setLoading] = React.useState(false);
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
      <PlayerBodyHeader setLoading={setLoading} />
      {/* Body */}
      {tracksArray.length === 0 ? (
        <div className="defaultBody">
          {/* If user didn't search nothing display the default body */}
          <h1>{greetUserByTime()}</h1>
          <p>start searching for music</p>
        </div>
      ) : loading ? (
        <div className="dotSpinnerDiv">
          <DotSpinner size={40} speed={0.9} color="grey" />
        </div>
      ) : (
        <table className="tracksBody">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>
                <AccessTimeIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {tracksArray.map((item: Track, id: number) => (
              <tr
                key={item.id}
                onMouseOver={() => setRowHover(id)}
                onMouseLeave={() => setRowHover(-1)}
                className={selectedRow === id ? "selected-row" : ""}
                onClick={() => setSelectedRow(id)}
              >
                <td>
                  {rowHover === id ? (
                    <div
                      onClick={() => {
                        // set track name for player
                        dispatch(
                          playerSlice.actions.setCurrentPlayingTrack(item.name)
                        );
                        //set track image
                        dispatch(
                          playerSlice.actions.setCurrentPlayingTrackImage(
                            item.album.images[2].url
                          )
                        );
                        //set track artists
                        dispatch(
                          playerSlice.actions.setCurrentPlayingTrackArtists(
                            item.artists
                          )
                        );
                        //set track is playing to TRUE
                        //... to do
                      }}
                    >
                      <PlayCircle />
                    </div>
                  ) : (
                    id + 1
                  )}
                </td>
                <td className="titleAndNumber">
                  <img src={item.album.images[2].url} />
                  <div className="titleAndArtists">
                    <p>{item.name}</p>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="artistsBody"
                    >
                      {item.explicit === true && (
                        <ExplicitIcon
                          style={{ color: "#A1A1A1", height: 20, width: 20 }}
                        />
                      )}
                      {item.artists.map((artist, index) => (
                        <p
                          className="artistOfTheTrack"
                          key={artist.id}
                          style={{ marginLeft: item.explicit === true ? 4 : 0 }}
                        >
                          {artist.name}
                          {index < item.artists.length - 1 ? ", " : ""}
                        </p>
                      ))}
                    </div>
                  </div>
                </td>
                <td>{item.album.name}</td>
                <td>{formatDuration(item.duration_ms)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
