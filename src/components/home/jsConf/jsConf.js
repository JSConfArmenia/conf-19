import React from 'react';
import './jsConf.css';
import aboutTextImage from '../../../images/about.png';

const JsConf = () => {
    return (
        <div className={'rotated_text'}>
            <img src={aboutTextImage} alt='about conference'/>
        </div>
    );
};

export default JsConf;
