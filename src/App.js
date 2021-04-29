import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { ChatApp } from "./ChatApp";

function App() {
  // const user = useSelector(selectUser);
  return (
    <>
      <ChatApp />
    </>
  );
}

export default App;
