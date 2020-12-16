//SERVER CODE
const express = require("express");
const http = require("http");
const path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");

//create server
const app = express();
const server = http.createServer(app);
const PORT = 3001 || process.env.PORT;

app.use(cors({ origin: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const io = require("socket.io")(server);

//login namespace
var login = io.of("/login");

login.on("connection", (socket) => {
    console.log("User logged in " + socket.id);

    socket.on("login", (data) => {
        console.log(data);
    });
});

const usersList = [];
let message = [];

//express config
app.use(express.static(path.join(__dirname, "public")));

//import routes
const root = require("./routes/root");
//routes
app.use("/auth", root);

server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
