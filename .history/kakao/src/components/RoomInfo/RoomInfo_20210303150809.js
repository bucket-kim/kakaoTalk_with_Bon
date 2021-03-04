import React from "react";
import { Link } from "react-router-dom";
import "./RoomInfo.css";

const RoomInfo = (props) => (
  <div className="roomInfo">
    <div className="leftInfo">
      <h3 className="leftInfo-text">{`Room : Room`}</h3>
    </div>
    <div className="rightInfo">
      <button
        className="infoButton"
        // variant="contained"
        variant="raised"
        href="/lamaChat"
        color="inherit"
      >
        close
      </button>
    </div>
  </div>
);

export default RoomInfo;