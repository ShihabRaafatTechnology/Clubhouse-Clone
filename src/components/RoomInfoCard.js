//import React, {useState, useEffect} from 'react';
import style from '../style/roomCard.module.css';
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs';
import data from '../data/roomCard.json';

function RoomInfoCard(){
    return(
        data.map((item)=>{
            const {title, sub_title, members, persons} = item;
            return(
                <div>
                    <div>
                        <div class={style.roomCardContainer}>
                            <h6>{title}</h6>
                            <h2>{sub_title}</h2>
                            <div class={style.roomMembers}>
                                <div>
                                    {
                                        persons.map((person)=>(
                                            <div>
                                                <img src={person.first_img}  alt='person'/>
                                                <img src={person.last_img} alt='person'/>
                                            </div>
                                            )
                                        )
                                    }
                                </div>
                                <div>
                                    {
                                        members.map((person)=>(
                                            <p>
                                                {person.first_name} {person.last_name} <BsChatDots className="ms-1"/>
                                            </p>
                                        ))
                                    }
                                    <p className="d-flex align-items-center">
                                        <span className="me-2">1.8</span><BsFillPersonFill/>
                                        <span className="ms-3 me-2">5</span><BsChatDotsFill/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default RoomInfoCard;