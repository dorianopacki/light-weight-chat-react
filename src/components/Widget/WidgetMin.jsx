import MessageIcon from "@material-ui/icons/Message";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

import "./WidgetMin.css";

export const WidgetMin = () => {
  const [isActive, setIsActice] = useState(true);

  return (
    <div class="widget__circle" onClick={() => setIsActice(!isActive)}>
      {isActive ? <MessageIcon /> : <CloseIcon />}
    </div>
  );
};
