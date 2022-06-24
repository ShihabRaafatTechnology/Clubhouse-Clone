import React, {useState} from 'react';
import style from '../style/phoneConfirm.module.css';
import PhoneNumber from 'react-phone-number-input';
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {CgArrowLongRightC} from 'react-icons/cg';

function PhoneConfirmation(){
    const [value, setValue] = useState();
    return(
        <div className={style.phoneConfirmContainer}>
            <Link to='/' className={style.btnBack}>
                <IoIosArrowBack/>
            </Link>
            <h1>Enter your phone</h1>
            <PhoneNumber international defaultCountry='EG' value={value} onChange={setValue}></PhoneNumber>
            <p className='mt-2'>by entering your number, you're agreeing to our <span>terms of services and privacy policy </span>thanks!</p>
            <Link to='/code_confirm' className="btn btn-primary d-flex align-items-center justify-content-center mt-3 rounded-pill bgBackground">next<CgArrowLongRightC className="m-1"/></Link>
        </div>
    )
}

export default PhoneConfirmation; 