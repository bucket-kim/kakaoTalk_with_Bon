import React from "react";
import { Link } from "react-router-dom";
import styles from "./RoomInfo.module.css";

const RoomInfo = ({ room }) => (
  <div className="roomInfo">
    <div className="leftInfo">
      <h3 className="leftInfo-text">{`Room : ${room}`}</h3>
    </div>
    <div className="rightInfo">
      <Link to={"/joinroom"}>
        <button className="infoButton" color="inherit">
          close
        </button>
      </Link>
    </div>
  </div>
);

export default RoomInfo;
