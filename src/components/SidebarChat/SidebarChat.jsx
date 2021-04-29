import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";
import "./SidebarChat.css";

export const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  // const
  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="sidebarChat"
    >
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>Content</p>
        <small>12:03</small>
      </div>
    </div>
  );
};
