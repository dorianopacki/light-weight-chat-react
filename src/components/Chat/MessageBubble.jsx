import "./MessageBubble.css";

const MessageBubble = ({ content, time }) => {
  return (
    <div className="message">
      <p className="message__content">{content}</p>
      <span className="message__time">{time}</span>
    </div>
  );
};

export { MessageBubble };
