import React from "react";
import Header from "./Header";
import "./MainChat.css";
import Window from "./Window";
import Insert from "./Insert";

function MainChat({ chat, handleInsert }) {
  return (
    <div className="mainchat">
      <Header />

      {/* window section */}
      <Window chat={chat} />

      {/* insert section */}
      <Insert chat={chat} handleInsert={handleInsert(newChat)} />
    </div>
  );
}
export default MainChat;
