import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { PlayerBodyType } from "../../types";

export default function Sidebar({
  searchInput,
  setSearchInput,
}: PlayerBodyType) {
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
    </div>
  );
}
