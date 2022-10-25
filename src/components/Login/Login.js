import React, { useState } from "react";
import loginImage from "../../images/login.png";
import loginText from "../../images/login-text.png";
import google from "../../images/google-play.png";
import apple from "../../images/apple-store.png";
import "./Login.css";

const Login = (e) => {
    const id = document.getElementById("passwd");
    const [pass, setPass] = useState(false);
    const [showPassArea, setShowPassArea] = useState(false);

    const showPassword = () => {
        if (pass) {
            setPass(false);
            id.type = "password";
        } else {
            setPass(true)
            id.type = "text";
        }
    }

    const showIcon = (e) => {
        if (e.value.length >= 6) {
            setShowPassArea(true)
        } else {
            setShowPassArea(false)
        }
    }

    return (
        <>
            <div className="login">
                <div className="login-image">
                    <img src={loginImage} alt="login" style={{ height: "590px", width: "400px", objectFit: "cover" }} />
                </div>
                <div className="login-form">
                    <div className="login-text">
                        <img src={loginText} alt="instagram" style={{ width: "170px", height: "50px" }} />
                    </div>
                    <div className="login-area">
                        <input type="email" placeholder="Phone number, username, or email" />
                        <input type="password" placeholder="Password" id="passwd" onChange={(e) => showIcon(e.target)} />

                        {
                            showPassArea ? !pass ? <p onClick={() => showPassword()} >Show</p> : <p onClick={() => showPassword()}>Hide</p> : ""

                        }

                        <div className="login-btn" >
                            Log in
                        </div>
                        <br />
                        <div className="alternative"> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ OR ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
                        <br />
                        <div className="facebook">
                            <i className="fa-brands fa-square-facebook"></i>
                            Log in with facebook
                        </div>
                        <br />
                        <div className="forget-password">
                            Forgot Password?
                        </div>
                    </div>

                </div>

                <div className="sign-up">
                    Don't have an account? <a href=""> Sign Up</a>
                </div>
                <br />

                <div className="get-app">
                    <p>Get the app.</p>
                    <div className="img">
                        <img src={google} alt="google" />
                        <img src={apple} alt="apple" />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Login;