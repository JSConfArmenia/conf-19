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

    const items = [
        { title: 'About', element: 'rotated_text' },
        { title: 'Speakers', element: 'jedies' },
        { title: 'Sponsors', element: 'companies' },
        { title: 'Jobs', element: 'jobsTitleImage' },
        { title: 'Team', element: 'team' },
        { title: 'Location', element: 'map' },
        { title: 'FAQ', element: 'faq' },
        { title: '', element: '' },
    ];
    return (
        <div>
            <div className={'wrapperHeader'}>
                <div className={'header'}>
                    <div className={'header_logo'}>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>
                    <div className={'header_items'}>
                        {items.map((item) =>
                            <Link to={'#'} onClick={()=>{
                                scrollToElement(item.element)
                            }}>{item.title}</Link>
                        )}
                        <a
                            target='_blank'
                            href={'https://github.com/JSConfArmenia/conf-19/blob/master/CODE_OF_CONDUCT.md'}
                            className={'header_conduct'}>Code of Conduct
                        </a>
                        <a
                            target='_blank'
                            href={'https://docs.google.com/forms/d/e/1FAIpQLScINFE818lItuC2Bdf0XNIx0TLEwyzyxXE9JxIvatuYcw6_Bg/viewform'} className={'header_button'}>Request an Invite</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
