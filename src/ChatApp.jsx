import { Sidebar } from "./components/Sidebar/Sidebar";
import { Chat } from "./components/Chat/Chat";
import { WidgetMin } from "./components/Widget/WidgetMin";
import { WidgetPop } from "./components/Widget/WidgetPop";
export const ChatApp = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
      {/* <WidgetPop /> */}
      <WidgetMin />
    </div>
  );
};
