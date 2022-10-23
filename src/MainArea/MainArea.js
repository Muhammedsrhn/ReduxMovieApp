import React, { useEffect } from "react";
import "./MainArea.css";
import HeaderArea from '../HeaderArea/HeaderArea';
import logo from "../img/instagram.png";
import post from "../img/post.jpg";
import fb from "../img/facebook.png";
import coffe from "../img/coffee.jpg";
import { FaAngleDown, FaCommentAlt, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaMedrt, FaRegShareSquare, FaRegThumbsUp, FaSearch, FaUserFriends } from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const MainArea = () => {

    return (
        <>
            <HeaderArea />
            <div className="main">
                <div className="rside">
                    <div className="profile">
                        <img src={logo} alt="profil" style={{ height: "35px", padding: "1rem" }} />
                        Muhammed
                    </div>
                    <div className="pro">
                        <FaMedrt color="red" fontSize={"2 rem"} />
                        <div>Covid-19 Information Center</div>
                    </div>
                    <br />
                    <div className="pro">
                        <FaFontAwesomeFlag color="green" fontSize={"1.7rem"} />
                        <div>Page</div>
                    </div>
                    <br />
                    <div className="pro">
                        <FaUserFriends color="blue" fontSize={"1.7rem"} />
                        <div>Friends</div>
                    </div>
                    <br />
                    <div className="pro">
                        <FaFacebookMessenger color="blue" fontSize={"1.7rem"} />
                        <div>Messenger</div>
                    </div>
                    <br />
                    <div className="pro">
                        <FaAngleDown color="blue" fontSize={"1.7rem"} />
                        <div>See More</div>
                    </div>
                    <br />
                    <div className="profiles">
                        <img src={logo} alt="logo1" style={{ height: "35px", padding: "1rem" }} />
                        React Developer
                    </div>
                    <div className="profiles">
                        <img src={logo} alt="logo2" style={{ height: "35px", padding: "1rem" }} />
                        Node Developer
                    </div>
                    <div className="profiles">
                        <img src={logo} alt="logo3" style={{ height: "35px", padding: "1rem" }} />
                        Vue Developer
                    </div>
                    <div className="profiles">
                        <img src={logo} alt="logo4" style={{ height: "35px", padding: "1rem" }} />
                        Angular Developer
                    </div>
                    <div className="profiles">
                        <img src={logo} alt="logo4" style={{ height: "35px", padding: "1rem" }} />
                        Express Developer
                    </div>
                    <div className="pross">
                        <FaAngleDown color="blue" fontSize={"1.7rem"} />See More
                    </div>
                </div>

                <div className="main-area">
                    <div className="addStory" >
                        <div className="story">
                            <img src={logo} alt="story" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                            <br />
                            <br />
                            <br />
                            <br />
                            Muhammed
                        </div>
                        <div className="story">
                            <img src={logo} alt="story" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                            <br />
                            <br />
                            <br />
                            <br />
                            Muhammed
                        </div>
                        <div className="story">
                            <img src={logo} alt="story" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                            <br />
                            <br />
                            <br />
                            <br />
                            Muhammed
                        </div>
                        <div className="story">
                            <img src={logo} alt="story" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                            <br />
                            <br />
                            <br />
                            <br />
                            Muhammed
                        </div>
                        <div className="story">
                            <img src={logo} alt="story" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                            <br />
                            <br />
                            <br />
                            <br />
                            Muhammed
                        </div>
                    </div>
                    <div className="message">
                        <div className="text">
                            <div className="post">
                                <img src={logo} alt="post" />
                                <input type="mind" placeholder="What's on your mind, Muhammed?" />
                            </div>
                            <div className="call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize={"2.2rem"} color="red" />
                                        <div>LiveVideo</div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize={"2.2rem"} color="orange" />
                                        <div>Photo/Galery</div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize={"2.2rem"} color="grey" />
                                        <div>Feeling/Activity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room">
                        <div className="room-link">
                            <div className="rooms">
                                <MdVideoCall fontSize={"2rem"} color="brown" />
                                <div>Rooms</div>
                            </div>
                            <div className="create">
                                <a href="createRooms">Create</a>
                            </div>
                        </div>
                        <div className="images">
                            <div className="imag">
                                <img src={fb} alt="fb" style={{ height: "40px", widht: "40px", borderRadius: "50px" }} />
                            </div>
                            <div className="imag">
                                <img src={fb} alt="fb" style={{ height: "40px", widht: "40px", borderRadius: "50px" }} />
                            </div>
                            <div className="imag">
                                <img src={fb} alt="fb" style={{ height: "40px", widht: "40px", borderRadius: "50px" }} />
                            </div>
                            <div className="imag">
                                <img src={fb} alt="fb" style={{ height: "40px", widht: "40px", borderRadius: "50px" }} />
                            </div>
                            <div className="imag">
                                <img src={fb} alt="fb" style={{ height: "40px", widht: "40px", borderRadius: "50px" }} />
                            </div>
                            <div className="imag">
                                <img src={fb} alt="fb" style={{ height: "40px", widht: "40px", borderRadius: "50px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="posted">
                        <div className="poster">
                            <div className="meer">
                                <img src={logo} alt="fb" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                                Muhammed Sarıhan
                                <br />
                                <pre>
                                    <br />
                                    23/10/2022 16:30
                                </pre>
                            </div>
                            <div className="edit">
                                <MdMoreHoriz fontSize={"1.6rem"} />
                            </div>
                        </div>
                        <div className="qoutation">
                            I Feel half faded away like some figure in the background of an old picture
                            I Feel half faded away like some figure in the background of an old picture
                        </div>
                        <br />
                        <div className="facebook-image">
                            <img src={logo} alt="fb" style={{ height: "60vh", width: "100%", objectFit: "contain" }} />
                        </div>
                        <div className="comment">
                            <div className="like">
                                <FaRegThumbsUp color="grey" /><p>Like</p>
                            </div>
                            <div className="like">
                                <FaCommentAlt color="grey" /><p>Comment</p>
                            </div>
                            <div className="like">
                                <FaRegShareSquare color="grey" /><p>Share</p>
                            </div>
                        </div>
                    </div>
                    <div className="posted">
                        <div className="poster">
                            <div className="meer">
                                <img src={logo} alt="fb" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                                Muhmmed Sarıhan
                                <br />
                                <pre>
                                    <br />
                                    23/10/2022 16:30
                                </pre>
                            </div>
                            <div className="edit">
                                <MdMoreHoriz fontSize={"1.6rem"} />
                            </div>
                        </div>
                        <div className="qoutation">
                            I looking awesome photo
                        </div>
                        <br />
                        <div className="facebook-image">
                            <img src={post} alt="fb" style={{ height: "60vh", width: "100%", objectFit: "cobtain" }} />
                        </div>
                        <div className="comment">
                            <div className="like">
                                <FaRegThumbsUp color="grey" /><p>Like</p>
                            </div>
                            <div className="like">
                                <FaCommentAlt color="grey" /><p>Comment</p>
                            </div>
                            <div className="like">
                                <FaRegShareSquare color="grey" /><p>Share</p>
                            </div>
                        </div>
                    </div>
                    <div className="posted">
                        <div className="poster">
                            <div className="meer">
                                <img src={logo} alt="fb" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                                Muhammed Sarıhan
                                <br />
                                <pre>
                                    <br />
                                    23/10/2022 16:30
                                </pre>
                            </div>
                            <div className="edit">
                                <MdMoreHoriz fontSize={"1.6rem"} />
                            </div>
                        </div>
                        <div className="qoutation">
                            I Feel half faded away like some figure in the background of an old picture
                        </div>
                        <br />
                        <div className="facebook-image">
                            <img src={logo} alt="fb" style={{ height: "60vh", width: "100%", objectFit: "contain" }} />
                        </div>
                        <div className="comment">
                            <div className="like">
                                <FaRegThumbsUp color="grey" /><p>Like</p>
                            </div>
                            <div className="like">
                                <FaCommentAlt color="grey" /><p>Comment</p>
                            </div>
                            <div className="like">
                                <FaRegShareSquare color="grey" /><p>Share</p>
                            </div>
                        </div>
                    </div>
                    <div className="posted">
                        <div className="poster">
                            <div className="meer">
                                <img src={logo} alt="coffe" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                                Muhmmed Sarıhan
                                <br />
                                <pre>
                                    <br />
                                    23/10/2022 16:30
                                </pre>
                            </div>
                            <div className="edit">
                                <MdMoreHoriz fontSize={"1.6rem"} />
                            </div>
                        </div>
                        <div className="qoutation">
                            I looking awesome photo
                        </div>
                        <br />
                        <div className="facebook-image">
                            <img src={coffe} alt="fb" style={{ height: "60vh", width: "100%", objectFit: "contain" }} />
                        </div>
                        <div className="comment">
                            <div className="like">
                                <FaRegThumbsUp color="grey" /><p>Like</p>
                            </div>
                            <div className="like">
                                <FaCommentAlt color="grey" /><p>Comment</p>
                            </div>
                            <div className="like">
                                <FaRegShareSquare color="grey" /><p>Share</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lside">
                    <div className="contact">

                        <div className="contacts">
                            Contacts
                        </div>
                        <div className="chaticon">
                            <div className="icons">
                                <MdVideoCall fontSize={"1.6rem"} />
                            </div>
                            <div className="icons">
                                <FaSearch fontSize={"1.6rem"} />
                            </div>
                            <div className="icons">
                                <MdMoreHoriz fontSize={"1.6rem"} />
                            </div>
                        </div>
                    </div>

                    <div className="concise">
                        <div className="profilee">
                            <img src={logo} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                            Muhammed Sarıhan
                        </div>
                        <div className="profilee">
                            <img src={logo} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                            Muhammed Sarıhan
                        </div>
                        <div className="profilee">
                            <img src={logo} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                            Muhammed Sarıhan
                        </div>
                        <div className="profilee">
                            <img src={logo} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                            Muhammed Sarıhan
                        </div>
                        <div className="profilee">
                            <img src={logo} alt="logo" style={{ height: "35px", padding: "1rem" }} />
                            Muhammed Sarıhan
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainArea;