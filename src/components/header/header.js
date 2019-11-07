import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png'
import {scroller} from 'react-scroll';

const Header = () => {


    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true
        })
    };

    return (
        <div>
            <div className={'wrapper'}>
                <div className={'header'}>
                    <div style={{
                        display: 'flex',
                        flexGrow: '1',
                        alignItems: 'center',
                    }}>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>
                    <div className={'header_items'}>
                        <Link to={'#'} onClick={()=>{
                            scrollToElement('rotateted_text')
                        }}>About</Link>
                        {/* <Link to={'#'}>Schedule</Link> */}

                        <Link to={'#'} onClick={()=>{
                            scrollToElement('jedies')
                        }}>Speakers</Link>

                        <Link to={'#'} onClick={()=>{
                            scrollToElement('sponsors')
                        }}>Sponsors</Link>

                        <Link to={'#'} onClick={()=>{
                            scrollToElement('jobsTitleImage')
                        }}>Jobs</Link>

                        <Link to={'#'} onClick={()=>{
                            scrollToElement('team')
                        }}>
                            Team
                        </Link>
                        <Link to={'#'} onClick={()=>{
                            scrollToElement('map')
                        }}>Location</Link>

                        <Link to={'#'} onClick={()=>{
                            scrollToElement('faq')
                        }}>FAQ</Link>
                        <a target='_blank' href={'https://github.com/JSConfArmenia/conf-19/blob/master/CODE_OF_CONDUCT.md'} onClick={()=>{
                       
                        }}>Code of Conduct</a>

                        <a target='_blank' href={'https://docs.google.com/forms/d/e/1FAIpQLScINFE818lItuC2Bdf0XNIx0TLEwyzyxXE9JxIvatuYcw6_Bg/viewform'} className={'header_button'}>Request an Invite</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
