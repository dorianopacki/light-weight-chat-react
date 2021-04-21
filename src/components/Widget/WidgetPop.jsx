import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { MessageBubble } from "../Chat/MessageBubble";

import "./WidgetPop.css";
import { useState } from "react";

export const WidgetPop = () => {
  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    setInput("");
  };

  return (
    <div className="widget__popup__wrapper">
      <div className="widget__popup__header">
        <Avatar className="widget__popup__header__avatar" />
        <h1 className="widget__popup__header__name">Jason</h1>
      </div>
      <div className="widget__popup_chat">
        <MessageBubble content={"This is a test message"} time={"11:50"} />
      </div>
      <div className="widget__popup__chat__input">
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
