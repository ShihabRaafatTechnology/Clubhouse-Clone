import React from 'react';
import {Link} from 'react-router-dom';
import style from '../style/welcome.module.css';
import {MdArrowRightAlt} from 'react-icons/md';

function Welcome(){
    return(
        <div className={style.welcomeContainer}>
            <h1>🎉Welcome!</h1>
            <div className={style.welcomeInfo}>
                <p>We're working hard to get clubhouseready for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks</p>

                <p>Anyone can join with an invite from an existing user or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!🙏</p>

                <p>🏠Paul, Shihab & the Clubhouse team</p>
            </div>
            <div className={style.actionBtn}>
                <Link to='/invite' className="rounded-fill d-flex align-items-center mb-3">Get your username <MdArrowRightAlt className="ms-2"/></Link>
                <Link to='/invite'>Have an invite text? Sign in <MdArrowRightAlt/></Link>
            </div>
        </div>
    )
}

export default Welcome;