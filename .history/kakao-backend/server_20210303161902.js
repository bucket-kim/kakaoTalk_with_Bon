// 1. 서버 생성
const express = require("express");
const socket = require("socket.io");
const http = require("http");
const cors = require("cors");

//users.js
const { addUser, removeUser, getUser, getUsersInRoom } = require("./user");
const PORT = process.env.PORT || 8000;

// 2. 라우터 설정
const router = require("./router");

const app = express();
//const server = http.createServer(app);
const server = app.listen(3000);
//const io = socket(server);
const io = require("socket.io").listen(server);

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

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
      .emit("message", { user: "admin", text: `${user.name}, has joined` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
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

//--------------------------
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Socket.io
// const http = require("http").Server(app);
// const io = require("socket.io")(http);
// io.on("connection", function (socket) {
//   console.log("a user connected");
//   socket.on("disconnect", function () {
//     console.log("User Disconnected");
//   });
//   socket.on("example_message", function (msg) {
//     console.log("message: " + msg);
//   });
// });
// io.listen(8000);
