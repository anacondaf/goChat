import React, { useState } from "react";

//css
import "./dist/MenuBar.style.css";

function MenuBarComponent() {
    return (
        <div className="MenuBarComponent">
            <div className="container">
                <div className="user__avatar">
                    {/* Make the things bigger later. Contains the hovered submenu */}
                    <img
                        src={process.env.PUBLIC_URL + "/images/user_model1.jpg"}
                    />

                    <div className="avatar__bound bound__status" />

                    <div className="user__submenu submenu__hidden">
                        <ul>
                            <li>
                                <img
                                    id="icon"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "icons/user.svg"
                                    }
                                />
                                <a href="">view profile</a>
                            </li>
                            <li>
                                <img
                                    id="icon"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "icons/exchange.svg"
                                    }
                                />
                                <a href="">change avatar</a>
                            </li>
                            <li>
                                <img
                                    id="icon"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "icons/settings.svg"
                                    }
                                />
                                <a href="">setting</a>
                            </li>
                            <li className="log__out">
                                <a href="">log out</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="big__main__title">
                    <p>gochat</p>
                </div>

                <div className="download__app">
                    <a href="">download app</a>
                    <a href="">add friend</a>
                </div>
            </div>
        </div>
    );
}

export default MenuBarComponent;
