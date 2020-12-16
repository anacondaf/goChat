import React, { useEffect, useState } from "react";
import sic from "socket.io-client";
import axios from "axios";
import Cookies from "universal-cookie";
import md5 from "md5";
import uniquid from "uniquid";

//import css
import "./dist/Homepage.style.css";

//import component
import { Redirect } from "react-router-dom";

var socket;
const ENDPOINT = "http://localhost:3001";

//cookies
const cookies = new Cookies();

const Homepage = (props) => {
    //state config
    let [account, setAccount] = useState("");
    let [password, setPassword] = useState("");
    let [changeLocation, setLocation] = useState(false);
    let [wrong, setWrong] = useState(false);

    useEffect(() => {
        socket = sic(ENDPOINT);
    }, []);

    //events
    const accoundHandle = (e) => {
        setAccount(e.target.value);
    };

    const passwordHandle = (e) => {
        setPassword(e.target.value);
    };

    const signInOnClick = async (e) => {
        const response = await axios.post("http://localhost:3001/auth", {
            data: {
                name: account,
                password: password,
            },
        });

        const sessionId = uniquid();

        if (response.data.message === "ok") {
            cookies.set("session-id", sessionId, {
                path: "/",
                maxAge: 60000,
            });

            setLocation(true);
        } else {
            setWrong(true);
        }
    };

    const onEnterPress = (e) => {
        if (e.charCode === 13) {
            return signInOnClick(e);
        }
    };

    return changeLocation ? (
        <Redirect to="/chat" />
    ) : (
        <div className="Homepage">
            <nav>
                <div className="container">
                    <img
                        className="logo"
                        src={process.env.PUBLIC_URL + "/icons/Logo.svg"}
                    />
                    <ul>
                        <li>
                            <a href="">Rooms</a>
                        </li>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">For developer</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header>
                <img
                    className="curve"
                    src={process.env.PUBLIC_URL + "/images/header_bot.svg"}
                />

                <div className="container">
                    <div className="text">
                        <div className="slogan">
                            <h1>GOCHAT</h1>
                            <h4>Relief in work and enjoy better life</h4>
                        </div>

                        <div className="form">
                            <div className="account">
                                <input
                                    type="text"
                                    placeholder="Email or phone number"
                                    onChange={accoundHandle}
                                    onKeyPress={onEnterPress}
                                    value={account}
                                />

                                {wrong ? (
                                    <i className="fas fa-exclamation-triangle sign" />
                                ) : null}
                            </div>

                            {wrong ? (
                                <p className="warning">
                                    Wrong email or phone number
                                </p>
                            ) : null}

                            <input
                                type="password"
                                placeholder="Password"
                                onKeyPress={onEnterPress}
                                onChange={passwordHandle}
                                value={password}
                                className="password"
                            />

                            <div className="regis_wrapper">
                                <div className="signin">
                                    <button onClick={signInOnClick}>
                                        <p>Sign in</p>
                                    </button>

                                    <p>Forgot password?</p>
                                </div>

                                <div className="signup">
                                    <p>Don't have an account?</p>
                                    <a href="signup">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img
                        className="main_background"
                        src={process.env.PUBLIC_URL + "/images/main_idea.png"}
                    ></img>
                </div>
            </header>
        </div>
    );
};

export default Homepage;
