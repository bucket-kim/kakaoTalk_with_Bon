import React, { useState } from "react";

function Insert({ chat, handleInsert }) {
  const messages = React.createRef();
  const names = React.createRef();
  const dateStamps = Date.now();

  const [input, setInput] = useState(...chat);
  sendNewChat(() => {
    let newChat = {
      name: names.current.value(),
      message: messages.current.value(),
      dateStamp: dateStamps,
    };
    handleInsert(newChat);
  });

  return (
    <div>
      <input type="hidden" value="bon" ref={names} />
      <input type="text" ref={messages} />
      <button onClick={sendNewChat}>보내기</button>
    </div>
  );
}
export default Insert;
