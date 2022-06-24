import React from "react";
import SubHeader from "../components/SubHeader";
import style from "../style/explore.module.css";
import { Input } from "antd";
import { DownOutlined, FireOutlined, SearchOutlined } from '@ant-design/icons';
import data from '../data/explore.json';

function Explore(){
    const {people, conversation} = data;

    return(
       <div className={style.exploreContainer}>
        <div className={style.header}>
            <SubHeader pageTitle="EXPLORE"/>
            <Input className={style.headerSearch}
                   placeholder="Find People and Clubs"
                   prefix={<SearchOutlined style={{fontSize: "17px"}}/>}></Input>
        </div>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer}>
                {people.map((person)=>(
                    <div>
                        <div className="d-flex align-items-center">
                            <img src={person.picture} alt='person'/>
                            <div className='ml-2'>
                                <h5>{person.title}</h5>
                                <p>{person.description}</p>
                            </div>
                        </div>
                        <button className={style.followPerson}>Follow</button>
                    </div>  
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined />
                </button>
            </div>
            <h6 className="mt-5 mb-3">FIND CONVERSATION ABOUT...</h6>
            <div className="row mx-0">
                {conversation.map((item)=>(
                    <div className="col-6 px-2 mb-3">
                        <div className={style.conversationCard}>
                            <h6>
                                <FireOutlined/>
                                {item.title}
                            </h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    )
}
export default Explore;