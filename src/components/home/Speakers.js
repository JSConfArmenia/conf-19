import React from 'react';
import Section from "./SectionComp/Section/Section";
import jedi from "../../images/Illustrations1/Jedies.png";
import callForJedies from "../../images/call-for-jedies@2x.png";


const Speakers = () => {
    return (
        <Section
            isleft={true}
            colorText={'Jedies'}
            color={'#FF4700'}
            title={'Call For '}
            imgUrl={jedi}
            text={`Share your knowledge and skills in JavaScript with 
            the regional JS community.
            Become a JS Conf 2019 speaker!`}
            textUrl={callForJedies}
            buttonText={'Become a Jedi'}
            linkPath={'https://docs.google.com/forms/u/1/d/e/1FAIpQLScfpcg2SvaEuoqcZEPzAmuwG8-bI1SxRbcoCytxzeOruCOZlA/viewform'}
        />
    );
};

export default Speakers;
