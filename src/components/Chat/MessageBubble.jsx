import "./MessageBubble.css";

const MessageBubble = ({ content }) => {
  return (
    <div className="message">
      <p className="message__content">{content}</p>
      <span className="message__time">16:54</span>
    </div>
  );
};

export { MessageBubble };
