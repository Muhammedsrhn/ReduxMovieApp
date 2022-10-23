import React, { useEffect } from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [pass, setPass] = useState(false);
    const [compPass, setcompPass] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const id = document.getElementById("pass");
    const navigate = useNavigate();


 

    const hidePass = () => {
        if (pass) {
            setPass(false);
            id.type = "password";
        } else {
            setPass(true)
            id.type = "text";
        }
    }

    const showIcon = (e) => {
        if (e.value) {
            setcompPass(true)
        } else {
            setcompPass(false)
        }
    }

    //login 
    const login = () => {
        if (email.trim().value === "" || password.trim().value === "") {
            alert("Please Fill The all Area");
        } else {
            localStorage.setItem("user",JSON.stringify({email,password}))
            navigate("/home");
        }
    }

 

    return (
        <div className="login">
            <div className="facebook">
                <div className="facebooktext">
                    facebook
                </div>
                <div className="title">
                    Facebook help you connect and share
                    <br></br>with the people in your life.
                </div>
            </div>
            <div className="login-container">
                <div className="login-deatil">
                    <form>
                        <input type="email" placeholder="Email Address  or Phone Number" onChange={(e) => setEmail(e.target.value)} autoFocus required />
                        <br></br>
                        <input type="password" placeholder="Password" id="pass" onChange={(e) => { showIcon(e.target); setPassword(e.target.value) }} required />
                    </form>
                    {
                        compPass ? pass ? <i className="fa-regular fa-eye" onClick={() => hidePass()}></i>
                            : <i className="fa-regular fa-eye-slash" onClick={() => hidePass()}></i>
                            :
                            ""
                    }

                </div>
                <div className="btn-login" onClick={() => login()}>
                    Log In
                </div>
                <div className="forget">
                    <a href="forget">Forgotten password?</a>
                    <br></br>
                </div>
                <div className="create">
                    <br></br>
                    <button className="btn-new">
                        Create New Account
                    </button>
                </div>
                <p></p>
                <br></br>
                <div className="page">
                    <a href="createpage">Create a Page </a>
                    for a celebrity, brand or business.
                </div>
            </div>
        </div >
    )
}

export default LoginPage;