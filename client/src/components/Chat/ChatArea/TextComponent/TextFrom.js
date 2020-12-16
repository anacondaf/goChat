import React from "react";

function TextFrom() {
    return (
        <div className="TextFrom">
            <div className="from__avatar">
                <img src={process.env.PUBLIC_URL + "/images/user_model1.jpg"} />
            </div>

            <div className="text__data">
                <div className="text__content">
                    <div className="curve"></div>
                    <div className="rect"></div>
                    <p>
                        Where are you Where are you Where are you Where are you
                        Where are you
                    </p>
                </div>

                <div className="command__btn">
                    <i class="fas fa-ellipsis-h"></i>
                </div>

                <div className="timing">
                    <p>06-09</p>
                    <p>14:24pm</p>
                </div>
            </div>
        </div>
    );
}

export default TextFrom;
