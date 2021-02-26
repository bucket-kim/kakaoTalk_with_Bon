import React from "react";
import "./MainChat.css";

function MainChat() {
  return (
    <div className="mainchat">
      <div className="mainchat__header">
        {/* avatar */}
        <div className="header__container">
          {/* name */}
          <div className="name__display">
            <span>이름</span>
            {/* number of chat */}
            <div className="number__display">
              <i className="fas fa-user"></i>
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainchat__window">i'm window</div>
      <div className="mainchat__inputtype">type me in!</div>
    </div>
  );
}

export default MainChat;
