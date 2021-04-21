import { Avatar, IconButton } from "@material-ui/core";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { SidebarChat } from "../SidebarChat/SidebarChat";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  const [conversations] = useState([
    {
      id: 1,
      groupName: "Jan Kowalski",
      content: "Lorem ipsum",
      time: "12: 00",
    },
    {
      id: 2,
      groupName: "Tomasz Rasiak",
      content: "Lorem ipsum",
      time: "16: 00",
    },
    { id: 3, groupName: "Adam Nowak", content: "Lorem ipsum", time: "10: 00" },
    {
      id: 4,
      groupName: "Roman Zbysiak",
      content: "Lorem ipsum",
      time: "8: 00",
    },
  ]);

  const [filteredValue, setFilteredValue] = useState("");
  const [newData, setNewData] = useState(filteredValue);

  useEffect(() => {
    const data = conversations.filter((conversation) =>
      conversation.groupName.includes(filteredValue)
    );
    setNewData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, filteredValue);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input
            className="Search"
            value={filteredValue}
            onChange={(e) => setFilteredValue(e.target.value)}
          />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {newData === ""
          ? conversations.map(({ id, groupName, content, time }) => (
              <SidebarChat
                groupName={groupName}
                content={content}
                id={id}
                time={time}
              />
            ))
          : newData.map(({ id, groupName, content, time }) => (
              <SidebarChat
                groupName={groupName}
                content={content}
                id={id}
                time={time}
              />
            ))}
      </div>
    </div>
  );
};
