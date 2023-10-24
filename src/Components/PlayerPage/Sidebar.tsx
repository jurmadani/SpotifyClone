import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { PlayerBodyType, spotifyUserSliceType } from "../../types";
import { useSelector } from "react-redux";

export default function Sidebar({
  searchInput,
  setSearchInput,
}: PlayerBodyType) {
  const spotifyUser: spotifyUserSliceType = useSelector(
    (state: any) => state.spotifyUser
  );
  return (
    <div className="sidebarBody">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="logo"
      />
      <div onClick={() => setSearchInput("")}>
        <SidebarOption title="Home" Icon={HomeIcon} />
      </div>
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your library" Icon={LibraryMusicIcon} />
      <strong>PLAYLISTS</strong>
      <hr />
      {spotifyUser?.playlists?.map((playlist) => (
        //@ts-ignore
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}
