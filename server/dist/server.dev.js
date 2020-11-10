"use strict";

//SERVER CODE
var express = require("express");

var http = require("http");

var path = require("path"); //create server


var app = express();
var server = http.createServer(app);
var PORT = 3001 || process.env.PORT;

var io = require("socket.io")(server);

var usersList = []; //express config

app.use(express["static"](path.join(__dirname, "public"))); //socket.io

io.on("connection", function (socket) {
  console.log(socket.id + ": connected");
  usersList.push({
    id: socket.id
  });
  socket.on("client-send-data", function (data) {
    io.to("").emit("user-send-to-user", data);
  });
}); //import routes

var root = require("./routes/root"); //routes


app.use("/", root);
server.listen(PORT, function () {
  console.log("Server is running at ".concat(PORT));
});