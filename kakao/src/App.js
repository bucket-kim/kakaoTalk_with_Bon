import "./App.css";
import MainChat from "./components/MainChat/MainChat";
import SideChat from "./components/SideChat";
import "@fortawesome/fontawesome-free/js/all.js";

//get 하기 (Window)
//user 정보 받아오기 (soket.id)
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
