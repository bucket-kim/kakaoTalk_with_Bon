import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./JoinRoom.module.css";

function JoinRoom() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={styles.joinRoom}>
      <form className={styles.joinForm}>
        <input className={styles.input} onChange={(e) => setName(e.target.value)} />
        <input className={styles.input} onChange={(e) => setRoom(e.target.value)} />
        <Link
          onClick={(e) => (!name || !room ? e.preventDefaoult() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={styles.button} type="submit">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}

export default JoinRoom;
