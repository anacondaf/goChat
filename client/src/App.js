import React, { useEffect, useState } from "react";

//css
import "./dist/App.css";

//import components
import Chat from "./components/Chat/Chat";
import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/Register/SignUp";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact>
                    <Homepage />
                </Route>

                <Route path="/signup">
                    <SignUp />
                </Route>

                <Route path="/chat">
                    <Chat />
                </Route>
            </div>
        </Router>
    );
}

export default App;
