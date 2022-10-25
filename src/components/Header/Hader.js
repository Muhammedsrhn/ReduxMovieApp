import React, { useState } from "react";
import "./Header.css";
import textImage from "../../images/login-text.png";
import { IoIosSearch } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import user from "../../images/instagram.png";

const Header = () => {
    const [icon, setIcon] = useState(false);
    const hideSearchIcons = () => {
        setIcon(true)
        document.getElementById("search").style.width = "95%";
    }
    const showSearchIcon = () => {
        setIcon(false)
    }
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <img src={textImage} alt="instagram" />
                    <FiChevronDown fontSize={"1.2rem"} style={{marginBottom:"10px"}}/>
                </div>
                <div className="search-bar" >
                    {!icon ? <IoIosSearch fontSize={"1.5rem"} color="grey" className="search-icon" /> : ""}
                    <input id="search" type="search" placeholder="Search" onFocus={() => hideSearchIcons()} onBlur={() => showSearchIcon()} />
                </div>
                <div className="header-icons">
                    <BsFillHouseDoorFill fontSize={"22px"} className={"icon"} />
                    <RiMessengerLine fontSize={"24px"} className={"icon"} />
                    <FaRegPlusSquare fontSize={"23px"} className={"icon"} />
                    <MdOutlineExplore fontSize={"25px"} className={"icon"} />
                    <AiOutlineHeart fontSize={"25px"} className={"icon"} />
                    <img src={user} alt="muhammed" className={"icon"} />
                </div>
            </div>
        </>
    )
}

export default Header;