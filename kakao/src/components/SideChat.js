import { Component } from "react";
import "./SideChat.css";

class SideChat extends Component {
  // this is where you put functions

  render() {
    return (
      <div className="sidechat">
        <div className="sidechat__header">
          <img className="header__profile" src="" alt="profile" />
          <div className="header__chatStatus">
            <div className="header__chatCount">3</div>
            <i className="fas fa-comment"></i>
          </div>
        </div>
        <div className="sidechat__chatList">
          <ul className="sidechat__chatUl">
            <li>
              <img src="" alt="profile" />
              <div className="sidechat__chatContainer">
                <div className="title">
                  채팅방 이름
                  <p>2</p>
                  <p>10:33pm</p>
                </div>
                <p>채팅 내용</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default SideChat;
