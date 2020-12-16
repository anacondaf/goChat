import React from "react";

//import css
import "./dist/SignUp.style.css";

function SignUp() {
    return (
        <div className="SignUp">
            <div className="form_wrapper">
                <div className="information">
                    <h1>information</h1>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="form">
                    <h1>register form</h1>

                    <div className="data_frame">
                        <div className="name">
                            <div className="input_wrapper">
                                <label for="first_name">First Name</label>
                                <input id="first_name" type="text"></input>
                            </div>

                            <div className="input_wrapper">
                                <label for="last_name">Last Name</label>
                                <input id="last_name" type="text"></input>
                            </div>
                        </div>

                        <div className="input_wrapper">
                            <label for="email">Your Email</label>
                            <input id="email" type="email"></input>
                        </div>

                        <div className="security">
                            <div className="input_wrapper">
                                <label for="password">Password</label>
                                <input id="password" type="password"></input>
                            </div>

                            <div className="input_wrapper">
                                <label for="confirm_password">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirm_password"
                                    type="password"
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="agreement">
                        <input type="checkbox" />
                        <blockquote>
                            I agree to the <a href="/">Terms and Conditions</a>
                        </blockquote>
                    </div>

                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
