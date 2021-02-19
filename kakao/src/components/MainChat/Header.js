import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* avatar */}
      <div className="header__container">
        {/* name */}
        <div className="header__name">
          <span>이름</span>
          {/* number of chat */}
          <div className="number__display">
            <i className="fas fa-user"></i>
            <span>2</span>
            "3:44 AM"
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
