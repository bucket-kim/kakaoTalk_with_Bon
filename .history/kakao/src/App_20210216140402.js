import "./App.css";
import MainChat from "./components/MainChat";
import SideChat from "./components/SideChat";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <div className="app">
      {/* sidechat_window */}
      <SideChat />
      {/* main_chat */}
      <MainChat />
    </div>
  );
}

export default App;
