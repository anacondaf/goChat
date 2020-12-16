"use strict";

//SERVER CODE
var express = require("express");

var http = require("http");

var path = require("path");

var bodyParser = require("body-parser");

var cors = require("cors"); //create server


var app = express();
var server = http.createServer(app);
var PORT = 3001 || process.env.PORT;
app.use(cors({
  origin: true
})); // parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: false
})); // parse application/json

app.use(bodyParser.json());

var io = require("socket.io")(server); //login namespace


var login = io.of("/login");
login.on("connection", function (socket) {
  console.log("User logged in " + socket.id);
  socket.on("login", function (data) {
    console.log(data);
  });
});
var usersList = [];
var message = []; //express config

app.use(express["static"](path.join(__dirname, "public"))); //import routes

var root = require("./routes/root"); //routes


app.use("/auth", root);
server.listen(PORT, function () {
  console.log("Server is running at ".concat(PORT));
});