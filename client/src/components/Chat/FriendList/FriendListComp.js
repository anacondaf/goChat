import React, { useState } from "react";
import SimpleBar from "simplebar-react";

//css
import "./dist/FriendList.style.css";

//import other component
import FriendCard from "./FriendCard/FriendCard";

const userData = [
    "user_model1.jpg",
    "user_model2.jpg",
    "user_model3.jpg",
    "user_model4.jpg",
];

function FriendListComponent(props) {
    return (
        <div className="FriendList">
            {/* include 2 components: search-box & friend-cards */}
            <div className="container">
                <div className="search__box">
                    <div>
                        <i class="fas fa-search"></i>
                        <input placeholder="Search" />
                    </div>
                </div>

                <hr />

                <SimpleBar style={{ maxHeight: "100vh" }}>
                    {userData.map((data, i) => {
                        return <FriendCard key={i} images={data} index={i} />;
                    })}
                </SimpleBar>
            </div>
        </div>
    );
}

export default FriendListComponent;
