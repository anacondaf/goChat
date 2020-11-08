import React from "react";

//css
import "./dist/App.css";

//import components
import MenuBar from "./components/MenuBar/MenuBarComp";
import FriendList from "./components/FriendList/FriendListComp";
import ChatArea from "./components/ChatArea/ChatAreaComp";
import FriendInfo from "./components/FriendInf/FriendInfComp";

function App() {
    return (
        <div className="AppComponent">
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
