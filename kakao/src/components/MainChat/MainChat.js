import React from "react";
import Header from "./Header";
import "./MainChat.css";
import Window from "./Window";
import Insert from "./Insert";

function MainChat() {
  return (
    <div className="mainchat">
      <Header />

      {/* window section */}
      <Window />

      {/* insert section */}
      <Insert />
    </div>
  );
}
export default MainChat;
