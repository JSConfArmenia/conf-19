import React from 'react';
import './Section.css';
import {Link} from "react-router-dom";

const Section = ({isleft,imgUrl,text,title,buttonText,color,colorText,linkPath}) => {
    return (
        isleft ?
            <div className={'section_container'}>
                <div className={'imagePart'} style={{backgroundImage:`url('../../'${imgUrl})`}}>
                     <img src={imgUrl} alt="img"/>
                </div>
                <div className={'textPart'}>
                    <h1>{title}<span style={{color:`${color}`}}>{colorText}</span></h1>
                    <p>{text}</p>
                    <a href={linkPath} target="_blank">
                        <button style={{borderColor:`${color}`}}>
                            {buttonText}
                        </button>
                    </a>
                </div>
            </div>
            :
            <div className={'section_container'}>
                <div className={'textPart'}>
                    <h1>{title}<span style={{color:`${color}`}}>{colorText}</span></h1>
                    <p>{text}</p>
                    <a href={linkPath} target="_blank"><button style={{borderColor:`${color}`}}>{buttonText}</button></a>
                </div>
                {/* <div className={'imagePart'} style={{backgroundImage:`url(${imgUrl})`}}> */}
                <div className={'imagePart'} style={{backgroundImage:`url('../../'${imgUrl})`}}>
                     <img src={imgUrl} alt="img"/>
                </div>
                {/* </div> */}
            </div>
    );
};

export default Section;
