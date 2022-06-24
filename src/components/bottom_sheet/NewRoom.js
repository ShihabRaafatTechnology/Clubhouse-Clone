import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from  '../../style/roomDetail.module.css';
import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai';
import {BsMicMuteFill, BsMicFill} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {FaHandPaper} from 'react-icons/fa';

function NewRoom(props){
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true);
    const card = props.cardDetail;

    return(
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className="d-flex align-items-center">
                        <Link 
                            to='/home' 
                            onClick={()=>props.setSheetVisible(false)}
                            className={style.back}>
                             <IoIosArrowDown/>
                             <span>Hallway</span>
                        </Link>
                    </div>
                    <div>
                        <AiOutlineFile/>
                        <img
                            src="/img/me.jpeg"
                            alt="profile img"
                            className={style.profile_img}/>
                    </div>
                </div>
                <div className={style.roomDetailCard}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap"
                         style={{padding:"0.5em 1em"}}>
                        {card.members.map((item)=>(
                           <div className={style.memberContainer}>
                               {micMuteVisible ? (
                                    <div className={style.audio_icon}>
                                        <BsMicMuteFill/>
                                    </div>
                               ):(
                                   ""
                               )}
                               <img src={item.profile_img} alt={item.alt} />
                               <p>
                                   <span>*</span>
                                   {item.first_name}
                               </p>
                           </div>
                        ))}
                    </div>
                </div>
                <div className={style.footer}>
                    <button
                    onClick={()=> props.setSheetVisible(false)}>
                        <img src="/img/hand-peace.png" alt="hand peace"/>
                        Leave Quietly
                    </button>
                    <div>
                        <button>
                            <AiOutlinePlus/>
                        </button>
                        <button>
                            <FaHandPaper/>
                        </button>
                        <button
                            onClick={()=> setMicMuteVisible(!micMuteVisible)}>
                                {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewRoom;