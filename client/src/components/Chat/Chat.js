import React, { useEffect } from "react";
//import css
import "./dist/Chat.style.css";

//import components
import MenuBar from "./MenuBar/MenuBarComp";
import FriendList from "./FriendList/FriendListComp";
import ChatArea from "./ChatArea/ChatAreaComp";
import FriendInfo from "./FriendInf/FriendInfComp";

function App() {
    return (
        <div className="ChatComponent">
            <MenuBar />

            <div className="ContentComponent">
                <FriendList />
                <ChatArea />
                <FriendInfo />
            </div>
        </div>
    );
}

export default App;
