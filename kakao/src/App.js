import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Route } from "react-router-dom";

import React from "react";

function App() {
  <Router>
    <Router path="/main/">
      <MainRoom />
    </Router>
    <Route path="/chat/" exact>
      <Chat />
    </Route>
  </Router>;
}

export default App;
