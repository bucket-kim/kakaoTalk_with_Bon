import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinRoom.css";

function JoinRoom() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <form>
        <input className="name" onChange={(e) => setName(e.target.value)} />
        <input className="room" onChange={(e) => setRoom(e.target.value)} />
        <Link
          onClick={(e) => (!name || !room ? e.preventDefaoult() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}

export default JoinRoom;
