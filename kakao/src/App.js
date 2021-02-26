import "./App.css";
import MainChat from "./components/MainChat/MainChat";
import SideChat from "./components/SideChat";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //post, get, delete
  const [chat, setChat] = useState([
    {
      name: "bon",
      message: "hi",
      dateStamp: "2020-09-09",
    },
  ]);

  const url = `http://localhost:8000/message/`;

  const handleInsert = () => {
    fetch(`${url}post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newChat.name,
        message: newChat.message,
        dateStamp: newChat.dateStamp,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      {/* sidechat_window */}
      <SideChat chat={chat} />
      {/* main_chat */}
      <MainChat chat={chat} handleInsert={handleInsert} />
    </div>
  );
}

export default App;
