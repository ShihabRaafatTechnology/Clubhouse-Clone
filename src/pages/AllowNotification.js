import React from 'react';
import style from '../style/phoneConfirm.module.css';
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';


function AllowNotification(){
    return(
            <div className={style.phoneConfirmContainer}>
                <Link to='/code_confirm' className={style.btnBack}>
                     <IoIosArrowBack/>
                </Link>
                <div className='text-center'>
                    <h1 className='mb-2 fs-5'>Last, important step!</h1>
                    <h1 className='mb-3 fs-6'>Enable notification to know when people are talking</h1>
                    <div className={style.notificationContainer}>
                        <div className='p-3'>
                            <h3>"Clubhouse" would like to send you notifications</h3>
                            <p>notification may include alerts, sounds and icon badges</p>
                        </div>
                        <div className={style.actionBtn}>
                            <Link to='/home'>
                                Don't Allow
                            </Link>
                            <Link to='/home'>
                                Allow
                            </Link>
                            <img src='/img/handIcon.svg' alt='clubhouse hand' className={style.hand_icon}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AllowNotification;
