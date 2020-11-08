import React, { useState } from "react";

//css
import "./dist/FriendInfo.style.css";

function FriendInfo() {
    return (
        <div className="FriendInfo">
            <div className="info__zone">
                <img src={process.env.PUBLIC_URL + "/images/user_model1.jpg"} />

                <div className="info">
                    <p className="header">Chris Marina</p>
                    <p className="title">UI/UX Designer</p>

                    <div className="achievements">
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>Shanghai, China</p>
                            </li>

                            <li>
                                <i class="fas fa-envelope"></i>
                                <p>star666@qq.com</p>
                            </li>

                            <li>
                                <i class="fas fa-birthday-cake"></i>
                                <p>April 25, 1999</p>
                            </li>

                            <li>
                                <i class="fas fa-mobile-alt"></i>
                                <p>(+84) 0768881928</p>
                            </li>

                            <li>
                                <i class="fab fa-instagram"></i>
                                <p>abc.instagram.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="photos__zone"></div>
        </div>
    );
}

export default FriendInfo;
