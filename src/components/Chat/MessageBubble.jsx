import "./MessageBubble.css";

const MessageBubble = ({ content, time }) => {
  return (
    <div className="message">
      <p className="message__content">{content}</p>
      <small className="message__time">{time}</small>
    </div>
  );
};

export { MessageBubble };
