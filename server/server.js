//SERVER CODE
const express = require("express");
const http = require("http");
const path = require("path");

//create server
const app = express();
const server = http.createServer(app);
const PORT = 3001 || process.env.PORT;

const io = require("socket.io")(server);

const usersList = [];

//express config
app.use(express.static(path.join(__dirname, "public")));

//socket.io
io.on("connection", (socket) => {
    console.log(socket.id + ": connected");
    usersList.push({ id: socket.id });

    socket.on("client-send-data", (data) => {
        io.to("dWFotaBZkFpeGrj3AAAC").emit("user-send-to-user", data);
    });
});

//import routes
const root = require("./routes/root");
//routes
app.use("/", root);

server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
