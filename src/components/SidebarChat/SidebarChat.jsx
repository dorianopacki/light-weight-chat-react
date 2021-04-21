import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

export const SidebarChat = ({ groupName, content, time }) => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{groupName}</h3>
        <p>{content}</p>
        <small>{time}</small>
      </div>
    </div>
  );
};
