import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import style from '../style/home.module.css';
import Header from '../components/Header';
import DailyInfoCard from '../components/DailyInfoCard';
import RoomInfoCard from '../components/RoomInfoCard';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {IoIosPaperPlane} from 'react-icons/io';
import BottomSheet from '../components/BottomSheet';
import data from '../data/roomCard.json';
import newRoomData from '../data/newRoomData.json';

function Home(){
    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (
        <>
        {loaderVisibility ? (
            <div
            style={{
                position: "fixed",
                top: "35%",
                right: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "10000"
            }}>
                <img src="/img/loader.gif" alt="loader"/>
            </div>
        ) : (
            ""
        )}
            <Header/>
            <div className={style.home_container}>
                 <DailyInfoCard/>
                 <RoomInfoCard/>
            </div>
            <div className={style.action_btn}>
                <button>
                    <BsGrid3X3Gap/>
                </button>
                <button onClick={()=>setSheetVisible(true)}>
                    <AiOutlinePlus className="me-2"/>
                    Start a room
                </button>
                <button>
                    <IoIosPaperPlane/>
                </button>
            </div>
            <BottomSheet
                sheetTitle="start room"
                setSheetVisible={(item)=>setSheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail={data.find((item) => item.id === cardId)}  
                setItemsVisible={(item)=>setItemsVisible(item)}
                setSheetCreateRoom={(item) => {
                    setLoaderVisibility(true);
                    setTimeout(()=>{
                        setSheetCreateRoom(item);
                        setLoaderVisibility(false);
                    }, 1000)
                }}/>
            <BottomSheet
                sheetTitle="new room"
                setSheetVisible={(item)=>setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item)=>setItemsVisible(item)}/>   
        </>
    )
}
export default Home;