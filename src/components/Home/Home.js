import React from 'react'

import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag, FaRegComment } from "react-icons/fa";
import { BiBell, BiUser, BiPoll, BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineMail, HiOutlineDotsCircleHorizontal, HiOutlineUpload } from "react-icons/hi";
import { AiOutlineFileGif, AiOutlineHeart } from "react-icons/ai";
import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl"
import { MdOutlineScheduleSend } from "react-icons/md"
import { ImLoop } from "react-icons/im"

import "./Home.css";
import profil from "../../img/profil.png"

const enableButton = () => {
    document.querySelectorAll("button")[0].disabled = false;
}
const disableButton = () => {
    document.querySelectorAll("button")[0].disabled = true;
}

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="icon-menu">
                    <div className="home-icon"><RiHome7Fill fontSize={"1.7rem"} /></div>
                    <FaHashtag fontSize={"1.7rem"} />
                    <BiBell fontSize={"1.7rem"} />
                    <HiOutlineMail fontSize={"1.7rem"} />
                    <BiUser fontSize={"1.7rem"} />
                    <HiOutlineDotsCircleHorizontal fontSize={"1.7rem"} />
                </div>

                <div className="write">
                    <img src={profil} alt="profil" />

                    <div className="wrt">
                        <input type="text" placeholder="What's Happening?" onFocus={() => enableButton()} onBlur={() => disableButton()} />
                    </div>

                    <div className="wrt-icon">
                        <BsImage color='#1D9BF0' fontSize={"1.2rem"} />
                        <AiOutlineFileGif color='#1D9BF0' fontSize={"1.2rem"} />
                        <BiPoll color='#1D9BF0' fontSize={"1.5rem"} />
                        <BsEmojiSmile color='#1D9BF0' fontSize={"1.2rem"} />
                        <MdOutlineScheduleSend color='#1D9BF0' fontSize={"1.4rem"} />
                        <SlLocationPin color='#1D9EF0' fontSize={"1.2rem"} />
                    </div>
                    <button className={"tweet"} disabled>Tweet</button>
                </div>
                <div className="post">
                    <div className="post-item">
                        <div className="title">
                            <img src={profil} alt="profil" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                            <div className="title-text">
                                <div className="user">
                                    Muhammed Sarıhan
                                </div>
                                <div className="user-tag">
                                    @MuhammedSrhn04
                                </div>
                                <div className="point">
                                    <div className="date">
                                        · 16h
                                    </div>
                                    <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" className={"ico"} />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-descp">
                                    it's was good day.
                                </div>
                                <div className="img">
                                    <img src={profil} alt="post" />
                                </div>
                            </div>
                            <div className="post-action">
                                <FaRegComment fontSize={"1.3rem"} />
                                <ImLoop fontSize={"1.3rem"} />
                                <AiOutlineHeart fontSize={"1.3rem"} />
                                <HiOutlineUpload fontSize={"1.3rem"} />
                            </div>
                        </div>

                        <div className="title">
                            <img src={profil} alt="profil" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                            <div className="title-text">
                                <div className="user">
                                    Muhammed Sarıhan
                                </div>
                                <div className="user-tag">
                                    @MuhammedSrhn04
                                </div>
                                <div className="point">
                                    <div className="date">
                                        · 16h
                                    </div>
                                    <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" className={"ico"} />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-descp">
                                    it's was good day.
                                </div>
                                <div className="img">
                                    <img src={profil} alt="post" />
                                </div>
                            </div>
                            <div className="post-action">
                                <FaRegComment fontSize={"1.3rem"} />
                                <ImLoop fontSize={"1.3rem"} />
                                <AiOutlineHeart fontSize={"1.3rem"} />
                                <HiOutlineUpload fontSize={"1.3rem"} />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="trends">
                    <strong>Trends For you</strong>
                    <div className="trend-item">
                        <div className="trend">
                            <div className="tr-content">
                                <span className="tr-title">
                                    Trend in Türkiye
                                </span>
                                <span className={"tr-descp"}>
                                    #WhatsApp
                                </span>
                                <span className="tr-count">
                                    31K Tweets
                                </span>
                            </div>
                            <div className="dotted">
                                <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" />
                            </div>
                        </div>

                        <div className="trend">
                            <div className="tr-content">
                                <span className="tr-title">
                                    Trend in Türkiye
                                </span>
                                <span className={"tr-descp"}>
                                    #WhatsApp
                                </span>
                                <span className="tr-count">
                                    31K Tweets
                                </span>
                            </div>
                            <div className="dotted">
                                <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" />
                            </div>
                        </div>

                        <div className="trend">
                            <div className="tr-content">
                                <span className="tr-title">
                                    Trend in Türkiye
                                </span>
                                <span className={"tr-descp"}>
                                    #WhatsApp
                                </span>
                                <span className="tr-count">
                                    31K Tweets
                                </span>
                            </div>
                            <div className="dotted">
                                <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" />
                            </div>
                        </div>

                        <div className="trend">
                            <div className="tr-content">
                                <span className="tr-title">
                                    Trend in Türkiye
                                </span>
                                <span className={"tr-descp"}>
                                    #WhatsApp
                                </span>
                                <span className="tr-count">
                                    31K Tweets
                                </span>
                            </div>
                            <div className="dotted">
                                <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" />
                            </div>
                        </div>

                        <div className="trend">
                            <div className="tr-content">
                                <span className="tr-title">
                                    Trend in Türkiye
                                </span>
                                <span className={"tr-descp"}>
                                    #WhatsApp
                                </span>
                                <span className="tr-count">
                                    31K Tweets
                                </span>
                            </div>
                            <div className="dotted">
                                <BiDotsHorizontalRounded fontSize={"1.5rem"} color="grey" />
                            </div>
                        </div>
                        <div className="show-more">
                            <a href='#'>Show more</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;