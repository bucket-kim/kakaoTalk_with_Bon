import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";

import React from "react";

function App() {
  <Router>
    <Router path="/main/">
      <JoinRoom />
    </Router>
    <Route path="/chat/" exact>
      <Chat />
    </Route>
  </Router>;
}

export default App;
