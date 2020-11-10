import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import socketClient from "socket.io-client";

//css
import "./dist/ChatArea.style.css";

//import components
import TextFrom from "./TextComponent/TextFrom";
import TextTo from "./TextComponent/TextTo";

//socket.io endpoint
const ENDPOINT = "http://localhost:3001";
var socket;

function ChatArea() {
    //state config
    const [textContent, setTextContent] = useState("");
    const [textFrom, setTextFrom] = useState("");
    const [textTo, setTextTo] = useState("");

    useEffect(() => {
        //effects
        socket = socketClient(ENDPOINT);

        socket.on("user-send-to-user", (data) => {
            setTextTo(data);
        });
    }, []);

    const handleChange = (e) => {
        setTextContent(e.target.value);
    };

    const sendBtnClick = (e) => {
        setTextContent("");
        socket.emit("client-send-data", textContent);
    };

    return (
        <div className="ChatArea">
            <div className="to__user">
                <div className="name__status">
                    <p contenteditable="true">Chris Marina</p>

                    <div className="status">
                        <div></div>
                        <span className="online">online</span>
                    </div>
                </div>

                <div className="calling__zone">
                    <i class="fas fa-phone-alt"></i>
                    <i class="fas fa-video"></i>
                </div>
            </div>

            <hr />

            <SimpleBar
                className="chat__zone"
                style={{ maxHeight: 452 }}
            ></SimpleBar>

            <div className="texting">
                <div className="social">
                    <i class="fas fa-laugh"></i>
                    <i class="fas fa-paperclip"></i>
                </div>

                <div className="send">
                    <input
                        className="input"
                        placeholder="Type something to send"
                        onChange={handleChange}
                        value={textContent}
                    ></input>
                    <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "icons/send.svg"}
                        onClick={sendBtnClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatArea;
