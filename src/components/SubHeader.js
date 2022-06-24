import React from "react";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import style from "../style/explore.module.css";

function SubHeader(props) {
    return(
       <div className={style.head}>
         <Link to="/home" className={style.btnBack}>
             <IoIosArrowBack/>
         </Link>
         <h3 className="mx-auto my-3">{props.pageTitle}</h3>
       </div>
    )
}
export default SubHeader;