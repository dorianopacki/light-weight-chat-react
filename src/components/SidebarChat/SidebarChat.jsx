import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>Tytuł grupy</h3>
        <p>Lorem ipsum dolor, sit amet consectetur...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};
