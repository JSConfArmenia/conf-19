import React from 'react';
import Section from "./SectionComp/Section/Section";
import sponsor from "../../images/Illustrations1/Council.png";
import callForSponsorsImage from '../../images/call-for-sponsors@2x.png';



const Sponsors = () => {
    return (
        <Section
            isleft={false}
            colorText={'Sponsors'}
            color={'#15C70E'}
            title={'Call For '}
            imgUrl={sponsor}
            text={'Join the board of JS Conf Armenia 2019 supporting IT\n' +
            'companies, be at one of the biggest IT events in\n' +
            'Armenia and get your company seen.\n' +
            'Become a JS Conf 2019 sponsor!'}
            textUrl={callForSponsorsImage}
            buttonText={'Request Info'}
            linkPath={"https://docs.google.com/forms/d/e/1FAIpQLSe4ZGNMILaX7BSXDBwQcFHBS4_NlQ4cSo79mRGNTA12Gia3fA/viewform"}
        />
    );
};

export default Sponsors;
