import React, { useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import { MessageBubble } from "./MessageBubble";

export const Chat = () => {
  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">group name</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <MessageBubble content="This is a incoming message" />
      </div>

      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage}>Send</button>
        </form>
        <IconButton>
          <MicNoneIcon className={"mic__name"} />
        </IconButton>

        <IconButton>
          <AttachFileIcon className={"attach__name"} />
        </IconButton>
      </div>
    </div>
  );
};
