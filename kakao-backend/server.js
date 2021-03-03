// 1. 서버 생성
const express = require("express");
const socket = require("socket.io");
const http = require("http");
// const cors = require("cors");

//users.js
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const PORT = process.env.PORT || 8000;

// 2. 라우터 설정
const router = require("./router");

const app = express();

// app.use(cors());
const server = http.createServer(app);
const io = socket(server, {
  cookie: false,
  cors: true,
});

// 3. 소켓 연결 및 이벤트
io.on("connection", (socket) => {
  console.log("socket connected");

  //join 이벤트 발생 시 'on'처리
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    //해당 유저 방 접속 처리
    socket.join(user.room);
    //관리자(서버)에서 소켓으로 보내는 이벤트
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });
  // 유저가 생성한 이벤트에 대한 처리 `on`
  socket.on("sendMessage", (message, callback) => {
    // console.log(socket.id, "socket.id");
    const user = getUser(socket.id);
    // console.log(user); //
    // 해당 방으로 메세지를
    io.to(user.room).emit("message", { user: user.name, text: message });

    //callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    console.log("유저가 떠났습니다.");

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

// 2-1. 라우터 연결
app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));
