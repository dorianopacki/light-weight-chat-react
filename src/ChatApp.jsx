import { Sidebar } from "./components/Sidebar/Sidebar";
import { Chat } from "./components/Chat/Chat";
export const ChatApp = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
};
