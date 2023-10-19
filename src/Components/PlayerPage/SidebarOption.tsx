import React from "react";
import "./SidebarOption.css";
import { SidebarOptionType } from "../../types";

export default function SidebarOption({ title, Icon }: SidebarOptionType) {
  return (
    <div className="sidebarOptionBody">
     {Icon && <Icon className="sidebarOptionIcon"/>}
     {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
