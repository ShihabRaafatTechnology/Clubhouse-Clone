import React from 'react';
import style from '../style/header.module.css';
import { Link } from 'react-router-dom';
import {BiSearch, BiEnvelope, BiCalendar, BiBell} from 'react-icons/bi';

function Header(){
    return(
        <div className={style.header}>
            <Link to='/explore'>
                <BiSearch className='fs-3 mt-2 ml-2'/>
            </Link>
            <div className={style.nav_items}>
                <Link to='/invite_friends'>
                    <BiEnvelope className='fs-3 mt-2 ml-2'/>
                </Link>
                <Link to='/upcoming'>
                    <BiCalendar className='fs-3 mt-2 ml-2'/>
                </Link>
                <Link to='/activity'>
                    <BiBell className='fs-3 mt-2 ml-2'/>
                </Link>
                <Link to='/profile'>
                    <img src='/img/me.jpeg' alt='shihab raafat' className='img-fluid'/>
                </Link>
            </div>
        </div>
    )
}
export default Header;