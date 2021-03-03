import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Chat from "./components/Chat/Chat";
import JoinRoom from "./components/JoinRoom/JoinRoom";

function App() {
  return (
    <Router>
      <Route path="/joinroom/" component={JoinRoom} />
      <Route path="/chat/" component={Chat} />
    </Router>
  );
}

export default App;
