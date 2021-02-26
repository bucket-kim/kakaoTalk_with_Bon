import React from "react";

function Insert() {
  const message = React.createRef();
  const name = React.createRef();
  const date = React.createRef();
  const url = "http://localhost:8000/message/post";
  const chatDate = Date.now();

  const handleInsert = () => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        message: message.current.value,
        dateStamp: date.current.value,
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
    <div>
      <input type="hidden" value="bon" ref={name} />
      <input type="hidden" value={chatDate} ref={date} />
      <input type="text" ref={message} />
      <button onClick={handleInsert}>보내기</button>
    </div>
  );
}

export default Insert;
