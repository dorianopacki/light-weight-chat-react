import React, { useEffect, useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import { MessageBubble } from "./MessageBubble";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../../features/chatSlice";
import { selectUser } from "../../features/userSlice";

export const Chat = () => {
  // const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //api
  }, [chatId]);

  const sendMessage = (event) => {
    event.preventDefault();
    //api
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        {messages.map(({ id, data }) => (
          <MessageBubble key={id} contents={data} />
        ))}
      </div>

      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message..."
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
