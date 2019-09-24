import React from 'react';
import './Logo.css';
import Jsmainlogo from '../../../images/JavaScriptConferenceArmenia.png'

const Jslogo = () => {
    return (
            <div className="logo">
                <img src={Jsmainlogo} alt="logo" />
                <div className="dateAndPlace">
                    <span>Marriott Armenia</span>
                    <span>Nov 3, 2019</span>
                </div>
            </div>
    )};

export default Jslogo;
