import React from 'react';
import Section from "./SectionComp/Section/Section";
import droid from "../../images/Illustrations1/Droids.png";
import callForDroids from '../../images/call-for-droids@2x.png';


const Droids = () => {
    return (
        <Section
            isDroid={true}
            isleft={true}
            colorText={'Jedies'}
            color={'#19B1FF'}
            title={'Droids '}
            imgUrl={droid}
            text={'Do you want to be another helpful and\n' +
            'important Beebee-Ate or Threepio for the\n' +
            'JSConfAM jedi-team and make unforgettable\n' +
            'memories? Here you go, apply ahead!'}
            textUrl={callForDroids}
            buttonText={'Become a Droid'}
            linkPath={"https://docs.google.com/forms/d/e/1FAIpQLSdcp6Yc6fOp4jvK8lMph9YJ_cxKviwRenEWoTTcwjszzzRKgg/viewform"}
        />
    );
};

export default Droids;
