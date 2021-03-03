import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Chat from "./components/Chat/Chat";
import JoinRoom from "./components/JoinRoom/JoinRoom";

function App() {
  return (
    <Router>
      <Route path="/kakao/" component={JoinRoom} />
      <Route path="/kakao/chat" component={Chat} />
    </Router>
  );
}

export default App;
