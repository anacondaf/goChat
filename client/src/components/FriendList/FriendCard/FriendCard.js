import React from "react";

//css
import "./dist/FriendCard.style.css";

function FriendCard(props) {
    //state config
    const { images, index } = props;

    return (
        <div className={index === 0 ? "FriendCard active" : "FriendCard"}>
            <div className="photo">
                <img src={process.env.PUBLIC_URL + `/images/${images}`}></img>

                <div className="user__status"></div>
            </div>

            <div className="friend__info">
                <p className="friend__name">Alina Judy</p>
                <p className="text">I miss you, Call me</p>
            </div>

            <div className="notification">
                <div>
                    <span>1</span>
                </div>
            </div>
        </div>
    );
}

export default FriendCard;
