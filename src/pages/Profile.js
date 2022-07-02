import React from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from "react-icons/io";
import {BsAt, BsUpload, BsPlus} from 'react-icons/bs';
import {AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter} from 'react-icons/ai';
import exploreStyle from '../style/explore.module.css';
import style from '../style/profile.module.css';


function Profile(){
    return(
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0 justify-content-between`}>
                        <Link to='/home' className={exploreStyle.btnBack}>
                            <IoIosArrowBack/>
                        </Link>
                        <div className={style.btnAction}>
                            <BsAt/>
                            <BsUpload/>
                            <AiOutlineSetting/>
                        </div>
                    </div>
                </div>
                <div className={style.profile}>
                    <img src='/img/me.jpeg'
                        alt='Shihab Raafat'
                        className={style.profile_img}/>
                    <h4>Shihab Raafat</h4>
                    <p>@Shihab_Raafat</p>
                    <div className={style.follow}>
                        <p>
                            <span>3.5 M</span> followers
                        </p>
                        <p>
                            <span>5 K</span> following
                        </p>
                    </div>
                    <button>Add a bio</button>
                    <div className="mb-4">
                        <button>
                            <AiOutlineTwitter /> Add Twiiter
                        </button>
                        <button>
                            <AiOutlineInstagram /> Add Instagram
                        </button>
                    </div>
                    <div className={style.nominated}>
                        <img src="/img/me.jpeg" alt="Shihab Raafat"/>
                        <div>
                            <p>Joined 19-April-2020</p>
                            <p>
                                Nominated by <span>John Andre</span>
                            </p>
                        </div>
                    </div>
                </div>
                <p>Memeber of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus/>
                </button>
            </div>
        </>
    )
}
export default Profile;