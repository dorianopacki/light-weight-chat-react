import React from "react";
import "./Chat.css";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">group name</span>
        </h4>
        <strong>Details</strong>
      </div>
    </div>
  );
};
