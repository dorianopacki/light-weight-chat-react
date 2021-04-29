import { Avatar, IconButton } from "@material-ui/core";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { SidebarChat } from "../SidebarChat/SidebarChat";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  const [chats, setChats] = useState([
    { id: 1, data: { groupName: "Test", content: "Content", time: "12:00" } },
  ]);

  useEffect(() => {
    //api
    // setChats();
  }, []);

  const addChat = () => {
    const chatName = prompt("Enter a chat name");
    if (chatName) {
      //api
    } else alert("Chat name has to be provided");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input className="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewOutlinedIcon onClick={addChat} />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {chats.map(({ id, data: { groupName, content, time } }) => (
          <SidebarChat groupName={groupName} content={content} time={time} />
        ))}
      </div>
    </div>
  );
};
