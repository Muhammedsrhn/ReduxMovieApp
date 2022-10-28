import React from "react";
import "./Header.css";
import logo from "../../img/twitter.png";
import { FiSearch } from "react-icons/fi";


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="tw-first">
                    <div className="tw-logo">
                        <img src={logo} alt="tw-logo" />
                    </div>
                    <div className="tw-text"><strong>Home</strong></div>
                </div>

                <div className="tw-search">
                    <FiSearch fontSize={"1.1rem"} className={"ico"} color="grey"/>
                    <input type="text" placeholder="Searh Twitter" />

                </div>
             
            </div>
        </>
    )
}

export default Header;