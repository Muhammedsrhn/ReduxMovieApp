import React, { useState } from "react";
import instagram from "../../images/instagram.png";
import instagram1 from "../../images/instagram1.png";
import instagram2 from "../../images/instagram2.png";
import { FiChevronLeft, FiHeart, FiChevronRight } from "react-icons/fi";
import { TbMessageCircle2, TbSend } from "react-icons/tb";
import { HiOutlineDotsHorizontal, HiOutlineBookmark, HiOutlineEmojiHappy } from "react-icons/hi";
import "./Home.css";
import Header from "../Header/Hader";

const Home = () => {
    const [show, setShow] = useState(false);

    const next = () => {
        document.getElementById("storys").scrollLeft += 500;
        if (document.getElementsByClassName('storys')[0].scrollLeft < 1) {
            setShow(false);
        } else if (document.getElementsByClassName('storys')[0].scrollLeft > 0) {
            setShow(true);
        }
    }


    const back = () => {
        document.getElementById("storys").scrollLeft -= 500;
        if (document.getElementsByClassName('storys')[0].scrollLeft < 1) {
            setShow(false);
        } else if (document.getElementsByClassName('storys')[0].scrollLeft > 0) {
            setShow(true);
        }
    }
    return (
        <>
            <Header />
            <div className="nav-head">
                <div className="home">
                    <div className="storys" id="storys">
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram} alt="story" />
                            </div>
                            <div className="story-name">
                                story 1
                            </div>
                        </div>

                        <div className="story-item">
                            <div className="story">
                                <img src={instagram} alt="story" />
                            </div>
                            <div className="story-name">
                                story 2
                            </div>
                        </div>

                        <div className="story-item">
                            <div className="story">
                                <img src={instagram} alt="story" />
                            </div>
                            <div className="story-name">
                                story 3
                            </div>
                        </div>

                        <div className="story-item">
                            <div className="story">
                                <img src={instagram} alt="story" />
                            </div>
                            <div className="story-name">
                                story 4
                            </div>
                        </div>

                        <div className="story-item">
                            <div className="story">
                                <img src={instagram} alt="story" />
                            </div>
                            <div className="story-name">
                                story 5
                            </div>
                        </div>

                        <div className="story-item">
                            <div className="story">
                                <img src={instagram} alt="story" />
                            </div>
                            <div className="story-name">
                                story 6
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram1} alt="story" />
                            </div>
                            <div className="story-name">
                                story 7
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram1} alt="story" />
                            </div>
                            <div className="story-name">
                                story 8
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram1} alt="story" />
                            </div>
                            <div className="story-name">
                                story 9
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram1} alt="story" />
                            </div>
                            <div className="story-name">
                                story 10
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram1} alt="story" />
                            </div>
                            <div className="story-name">
                                story 11
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram1} alt="story" />
                            </div>
                            <div className="story-name">
                                story 12
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram2} alt="story" />
                            </div>
                            <div className="story-name">
                                story 13
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram2} alt="story" />
                            </div>
                            <div className="story-name">
                                story 14
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram2} alt="story" />
                            </div>
                            <div className="story-name">
                                story 15
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram2} alt="story" />
                            </div>
                            <div className="story-name">
                                story 16
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram2} alt="story" />
                            </div>
                            <div className="story-name">
                                story 17
                            </div>
                        </div>
                        <div className="story-item">
                            <div className="story">
                                <img src={instagram2} alt="story" />
                            </div>
                            <div className="story-name">
                                story 18
                            </div>
                        </div>




                        <div className="right" onClick={() => next()} >
                            <FiChevronRight fontSize={"1.5rem"} className={"next-btn"} />
                        </div>

                        {
                            show && <div className="left" onClick={() => back()}>
                                <FiChevronLeft fontSize={"1.5rem"} className={"back-btn"} />
                            </div>
                        }
                    </div>
                </div>

                <div className="contact">
                    <div className="my-profile">
                        <img src={instagram} alt="profil-img" style={{ width: "58px", height: "58px" }} />
                        <div className="user-area">
                            <div className="username">
                                <span className={"user"}>muhammed.10line</span>
                                <span className={"user-tag"}>Farkımı_Farket</span>
                                <a href="#">Switch</a>
                            </div>
                        </div>
                    </div>
                    <div className="suggest">
                        <div className="suggest-area">
                            <span className={"spn1"}>Suggestions For You</span>
                            <span className={"spn2"}>See All</span>
                        </div>

                        <div className="suggest-user">
                            <img src={instagram} style={{ height: "33px", widht: "33px" }} />
                            <div className="suggest-text">
                                <span className={"suggest-username"}>muhammed</span>
                                <span className="follow">Followed by miracxozr04</span>
                            </div>
                            <div className="follow-link">
                                <a href="#">Follow</a>
                            </div>
                        </div>
                        <div className="suggest-user">
                            <img src={instagram} style={{ height: "33px", widht: "33px" }} />
                            <div className="suggest-text">
                                <span className={"suggest-username"}>muhammed</span>
                                <span className="follow">Followed by miracxozr04</span>
                            </div>
                            <div className="follow-link">
                                <a href="#">Follow</a>
                            </div>
                        </div>
                        <div className="suggest-user">
                            <img src={instagram} style={{ height: "33px", widht: "33px" }} />
                            <div className="suggest-text">
                                <span className={"suggest-username"}>muhammed</span>
                                <span className="follow">Followed by miracxozr04</span>
                            </div>
                            <div className="follow-link">
                                <a href="#">Follow</a>
                            </div>
                        </div>
                        <div className="suggest-user">
                            <img src={instagram} style={{ height: "33px", widht: "33px" }} />
                            <div className="suggest-text">
                                <span className={"suggest-username"}>muhammed</span>
                                <span className="follow">Followed by miracxozr04</span>
                            </div>
                            <div className="follow-link">
                                <a href="#">Follow</a>
                            </div>
                        </div>
                        <div className="suggest-user">
                            <img src={instagram} style={{ height: "33px", widht: "33px" }} />
                            <div className="suggest-text">
                                <span className={"suggest-username"}>muhammed</span>
                                <span className="follow">Followed by miracxozr04</span>
                            </div>
                            <div className="follow-link">
                                <a href="#">Follow</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-item">
                        <div className="title">
                            <div className="content">
                                <div className="user">
                                    <img src={instagram} alt="instagram" style={{ width: "35px", height: "35px" }} />
                                    <span>muhammed</span>
                                </div>
                                <div className={"icon"} >
                                    < HiOutlineDotsHorizontal fontSize={"1.3rem"} />
                                </div>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="img">
                                <img src={instagram} alt="ibody" style={{ width: "470px", heigth: "400px" }} />
                            </div>
                        </div>
                        <div className="post-footer">
                            <div className="post-icons" >
                                <FiHeart fontSize={"1.6rem"} className={"icon"} />
                                <TbMessageCircle2 fontSize={"1.7rem"} className={"icon"} />
                                <TbSend fontSize={"1.6rem"} className={"icon"} />
                            </div>
                            <div>
                                <HiOutlineBookmark fontSize={"1.9rem"} className={"bookmark"} />
                            </div>
                        </div>

                        <div className="post-descripton">
                            <p className={"like"}>23 Likes</p>
                            <p><span>muhammed</span > my test photo</p>
                        </div>

                        <div className="post-comment">
                            <div className="ico">
                                <HiOutlineEmojiHappy fontSize={"2rem"} />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Add a comment..." />
                            </div>
                            <div className="send-comment">
                                <span>Post</span>
                            </div>
                        </div>

                    </div>

                    <div className="post-item">
                        <div className="title">
                            <div className="content">
                                <div className="user">
                                    <img src={instagram} alt="instagram" style={{ width: "35px", height: "35px" }} />
                                    <span>muhammed</span>
                                </div>
                                <div className={"icon"} >
                                    < HiOutlineDotsHorizontal fontSize={"1.3rem"} />
                                </div>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="img">
                                <img src={instagram} alt="ibody" style={{ width: "470px", heigth: "400px" }} />
                            </div>
                        </div>
                        <div className="post-footer">
                            <div className="post-icons" >
                                <FiHeart fontSize={"1.6rem"} className={"icon"} />
                                <TbMessageCircle2 fontSize={"1.7rem"} className={"icon"} />
                                <TbSend fontSize={"1.6rem"} className={"icon"} />
                            </div>
                            <div>
                                <HiOutlineBookmark fontSize={"1.9rem"} className={"bookmark"} />
                            </div>
                        </div>

                        <div className="post-descripton">
                            <p className={"like"}>23 Likes</p>
                            <p><span>muhammed</span > my test photo</p>
                        </div>

                        <div className="post-comment">
                            <div className="ico">
                                <HiOutlineEmojiHappy fontSize={"2rem"} />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Add a comment..." />
                            </div>
                            <div className="send-comment">
                                <span>Post</span>
                            </div>
                        </div>

                    </div>

                    <div className="post-item">
                        <div className="title">
                            <div className="content">
                                <div className="user">
                                    <img src={instagram} alt="instagram" style={{ width: "35px", height: "35px" }} />
                                    <span>muhammed</span>
                                </div>
                                <div className={"icon"} >
                                    < HiOutlineDotsHorizontal fontSize={"1.3rem"} />
                                </div>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="img">
                                <img src={instagram} alt="ibody" style={{ width: "470px", heigth: "400px" }} />
                            </div>
                        </div>
                        <div className="post-footer">
                            <div className="post-icons" >
                                <FiHeart fontSize={"1.6rem"} className={"icon"} />
                                <TbMessageCircle2 fontSize={"1.7rem"} className={"icon"} />
                                <TbSend fontSize={"1.6rem"} className={"icon"} />
                            </div>
                            <div>
                                <HiOutlineBookmark fontSize={"1.9rem"} className={"bookmark"} />
                            </div>
                        </div>

                        <div className="post-descripton">
                            <p className={"like"}>23 Likes</p>
                            <p><span>muhammed</span > my test photo</p>
                        </div>

                        <div className="post-comment">
                            <div className="ico">
                                <HiOutlineEmojiHappy fontSize={"2rem"} />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Add a comment..." />
                            </div>
                            <div className="send-comment">
                                <span>Post</span>
                            </div>
                        </div>

                    </div>




                </div>
            </div>

        </>
    )
}

export default Home;