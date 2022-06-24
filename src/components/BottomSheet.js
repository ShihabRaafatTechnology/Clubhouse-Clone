import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../style/bottomSheet.module.css';
import StartRoom from '../components/bottom_sheet/StartRoom';
import NewRoom from '../components/bottom_sheet/NewRoom';

function BottomSheet(props){
    return(
        <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={()=>{
            props.setSheetVisible(!props.sheetVisible);
            props.setItemsVisible(true);
        }}
        fullScreen={props.sheetTitle === 'room detail' ? true : false}
        style={{width:"100%", maxWidth: "400px", margin:"auto"}}>
            <div className={style.BottomSheetContainer}
            style={{backgroundColor: props.sheetTitle === 'profile' ? 'transparent' : ''}}>
                {props.sheetTitle == 'new room' ? (
                    <NewRoom
                        setSheetCreateRoom={props.setSheetCreateRoom}
                        cardDetail={props.cardDetail}
                        setSheetVisible={(item)=>{
                            props.setSheetVisible(item);
                            props.setItemsVisible(true);
                        }}
                        style={{borderRadius: 0}}
                    ></NewRoom>
               ) : props.sheetTitle == 'start room' ? (
                    <StartRoom
                        setSheetCreateRoom={props.setSheetCreateRoom}
                        setSheetVisible={(item)=>{
                            props.setSheetVisible(item);
                            props.setItemsVisible(true);
                        }}
                    ></StartRoom>
               ) : (
                   ''
               )}
            </div>
        </SwipeableBottomSheet>
    )
}
export default BottomSheet;