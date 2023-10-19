import React from "react";
import "./PlayerBody.css";
import PlayerBodyHeader from "./PlayerBodyHeader";
import { useSelector } from "react-redux";
import { Track, searchSliceType } from "../../types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackComponent, { formatDuration } from "./TrackComponent";
import ExplicitIcon from "@mui/icons-material/Explicit";

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
              <tr key={item.id}>
                <td>{id + 1}</td>
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
