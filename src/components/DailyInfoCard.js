import React, {useState} from "react";
import style from "../style/dailyInfoCard.module.css";
import Data from "../data/dailyCard.json";

function DailyInfoCard(){
    const [card, setCard] = useState(Data);
    return(
        <div className={style.dailyCard}>
            {
                card.map((item)=>{
                    const {time, title, description} = item;
                    return(
                        <div className={style.event}>
                           <span>{time}</span>
                           <div>
                                <span>{title}</span>
                                <p>{description}</p>
                           </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default DailyInfoCard;