import React from "react";
import "./HeaderArea.css";
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaBell, FaCaretDown, FaFacebookMessenger, FaPlusCircle, FaRegFlag, FaUsers } from "react-icons/fa";
import logo from "../img/instagram.png";
import fbicon from "../img/facebook.png";

const HeaderArea = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="first-header">
                    <div className="logo">
                        <img src={fbicon} alt="fb-logo" style={{ height: "40px", padding: "1rem" }} />
                    </div>
                    <div className="search">
                        <AiOutlineSearch style={{ height: "4rem" }} />
                        <input type="search" placeholder="Search Facebook" />
                    </div>
                </div>

                <div className="middle-header">
                    <div className="Icon">
                        <AiFillHome fontSize={"2.1rem"} color={"#1877F2"} />
                    </div>
                    <div className="Icon">
                        <FaRegFlag fontSize={"1.8rem"} />
                    </div>
                    <div className="Icon">
                        <MdOndemandVideo fontSize={"1.8rem"} />
                    </div>
                    <div className="Icon">
                        <FaUsers fontSize={"1.8rem"} />
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet fontSize={"1.8rem"} />
                    </div>
                </div>

                <div className="third-header">
                    <div className="pluss">
                        <img src={logo} alt="profil" style={{ height: "35px" }} />
                        <div>Muhammed</div>
                    </div>
                    <div className="plus">
                        <FaPlusCircle fontSize={"1.3rem"} />
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontSize={"1.3rem"} />
                    </div>
                    <div className="plus">
                        <FaBell fontSize={"1.3rem"} />
                    </div>
                    <div className="plus">
                        <FaCaretDown fontSize={"1.3rem"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderArea;
