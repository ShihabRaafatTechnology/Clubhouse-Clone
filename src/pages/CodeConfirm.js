import React from 'react';
import style from "../style/phoneConfirm.module.css";
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {CgArrowLongRightC} from 'react-icons/cg';


function CodeConfirm(){
   return(
        <div className={style.phoneConfirmContainer}>
            <Link to='/invite' className={style.btnBack}>
                <IoIosArrowBack/>
            </Link>
            <div className="text-center">
                <h1 style={{width: "100%", maxWidth: "500px", marginBottom:"1em"}}>Enter The Code We Just Texted You</h1>
                <input style={{
                    width:"100%",
                    maxWidth:"200px",
                    border:"none",
                    outline:"none",
                    textAlign:"center"
                }} className='rounded'/>
                <p className="mt-2 mx-auto">didn't receive it? <span>tap to resend.</span></p>
            </div>
            <Link to='/allow_notification' className="btn btn-primary d-flex align-items-center justify-content-center mt-3 rounded-pill bgBackground">Next<CgArrowLongRightC className="m-1"/></Link>
        </div>
   )
}
export default CodeConfirm;