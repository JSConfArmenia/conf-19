import React from 'react';
import './Section.css';
import {Link} from "react-router-dom";
import callForJedies from '../../../../images/call-for-jedies@2x.png';

const Section = ({isleft, isDroid, imgUrl,textUrl, text, title,buttonText,color,colorText,linkPath}) => {
    return (
        // isleft ?
        //     <div className={'section_container'}>
        //         <div className={'imagePart'} style={{backgroundImage:`url('../../'${imgUrl})`}}>
        //              <img src={imgUrl} alt="img"/>
        //         </div>
        //         <div className={'textPart'}>
        //             <img className={`callForJedies${isDroid ? ' droid' : ''}`} src={textUrl}  alt="Call For Jedies"/>
        //             <p>{text}</p>
        //             <a href={linkPath} target="_blank">
        //                 <button style={{borderColor:`${color}`}}>
        //                     {buttonText}
        //                 </button>
        //             </a>
        //         </div>
        //     </div>
        //     :
            <div className={'section_container'}>
                <div className={'textPart'}>
                    <img className='callForJedies sponsors' src={textUrl}  alt="Call For Jedies"/>
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
