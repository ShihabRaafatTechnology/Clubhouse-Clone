import React, {useState} from 'react';
import style from  '../../style/bottomSheet.module.css';
import { FcCollaboration, FcConferenceCall, FcPrivacy } from "react-icons/fc";

function StartRoom(props){
    const [room, setRoom] = useState('open')
    return(
        <>
            <div className={style.switchLine}></div>
            <div className='text-end'>
                <button className={style.addTopicBtn}>+ Add Topic</button>
            </div>
            <div className={style.selectRoom}>
                <button className={room === 'open' ? style.active : ''}
                        onClick={()=>setRoom('open')}>
                            <div>
                              <FcCollaboration/>
                            </div>
                            Open
                </button>

                <button className={room === 'social' ? style.active : ''}
                        onClick={()=>setRoom('social')}>
                            <div>
                              <FcConferenceCall/>
                            </div>
                            Social
                </button>

                <button className={room === 'closed' ? style.active : ''}
                onClick={()=>setRoom('closed')}>
                            <div>
                                <FcPrivacy/>
                            </div>
                            Closed
                </button>
            </div>
            <p>Start a room <span>{
                room === "closed" ? "for people i choose" 
                : room === "social" ? "with people i follow" 
                : "open to everyone"
            }</span></p>
            <div className="text-center">
                <button className={style.letGoBtn}
                onClick={()=>{
                    props.setSheetCreateRoom(true);
                    props.setSheetVisible(true);
                }}>🎉Let's Go</button>
            </div>
        </>
    )
}

export default StartRoom;