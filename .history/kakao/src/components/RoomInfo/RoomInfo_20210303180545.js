import React from "react";
import { Link } from "react-router-dom";
import "./RoomInfo.css";

const RoomInfo = ({ room }) => (
  <div className="roomInfo">
    <div className="leftInfo">
      <h3 className="leftInfo-text">{`Room : ${room}`}</h3>
    </div>
    <div className="rightInfo">
      <Link to={"/chat/chat"}>
        <button className="infoButton" href="/joinroom/joinroom" color="inherit">
          close
        </button>
      </Link>
    </div>
  </div>
);

export default RoomInfo;
