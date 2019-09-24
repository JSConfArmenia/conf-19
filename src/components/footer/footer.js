import React from 'react';
import './footer.css';
import logo from "../../images/logo2.png";
import fb from '../../images/footer.png';
import {Link} from "react-router-dom";
// import arm from '../../Files/arm.pdf';
// import en from '../../Files/en.pdf';

const Footer = () => {
    return (
        <>
            <div className={'wrapper'}>
                <div className={'footer'}>

                    <div className={'logo2'}>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>

                    <div className={'social_items'}>
                        <a href="#">
                            <div className="social-icon githubwhite"></div>                        
                        </a>
                        <a href="#">
                            <div className="social-icon fbWhite"></div>
                        </a>  
                        <a href="#">
                            <div className="social-icon twWhite"></div>
                        </a>                                                      
                        <a href="#">
                            <div className="social-icon twWhite"></div>
                        </a>
                        <a href="#">
                            <div className="social-icon instwhite"></div>
                        </a>
                        <a href="#">
                            <div className="social-icon youtubeRed"></div>
                            </a>
                    </div>

                    <div>Press Release <a className="langArm" href="#">AM</a> / <a className="langEnglish" href="#">EN</a></div>
                    <div>
                        Design and branding by
                        <span className="orange">@davidtiger</span>,coded in React.js by
                        <span className="orange">@modularcoder</span>
                    </div>
                </div>
            </div>
            <div className={'footer_image'}>
                <img src={fb} alt="f"/>
            </div>
        </>
    );
};

export default Footer;