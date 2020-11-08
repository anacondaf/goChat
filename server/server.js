//SERVER CODE
const express = require("express");
const http = require("http");
const path = require("path");

//create server
const app = express();
const server = http.createServer(app);
const PORT = 3001 || process.env.PORT;

const socketIo = require("socket.io")(server);

//express config
app.use(express.static(path.join(__dirname, "public")));

//socket.io
socketIo.on("connection", (socket) => {
    console.log(socket.id + ": connected");

    socket.on("client-send-data", (msg) => {
        socket.broadcast.emit("server-send-data", msg);
    });
});

//import routes
const root = require("./routes/root");
//routes
app.use("/", root);

server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
