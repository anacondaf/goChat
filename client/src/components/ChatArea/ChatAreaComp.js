import React, { useState } from "react";
import SimpleBar from "simplebar-react";

//css
import "./dist/ChatArea.style.css";

//import components
import TextFrom from "./TextComponent/TextFrom";
import TextTo from "./TextComponent/TextTo";

function ChatArea() {
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

            <SimpleBar className="chat__zone" style={{ maxHeight: 452 }}>
                <TextFrom />
                <TextTo />
                <TextFrom />
                <TextTo />
                <TextFrom />
                <TextTo />
                <TextFrom />
                <TextTo />
            </SimpleBar>

            <div className="texting">
                <div className="social">
                    <i class="fas fa-laugh"></i>
                    <i class="fas fa-paperclip"></i>
                </div>

                <div className="send">
                    <input
                        className="input"
                        placeholder="Type something to send"
                    ></input>
                    <img
                        className="icon"
                        src={process.env.PUBLIC_URL + "icons/send.svg"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatArea;
