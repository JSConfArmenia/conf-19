import React from 'react';
import Faq from "./faq/faq";
import Jobs from "./jobs/jobs";
import Team from "./team/team";
import JsConf from "./jsConf/jsConf";
import {Element} from 'react-scroll';
import Sponsors from "./Sponsors";
import Speakers from "./Speakers";
import Droids from "./droids";
import Location from "./Location/location";
import Logo from './Jslogo/Jslogo'
import Jslogo from './Jslogo/Jslogo'

const Home = () => {
    return (
        <div className={'wrapper'}>
            <Jslogo/>
            <JsConf/>
            <Element name={'speakers'}>
                <Speakers/>
            </Element>

            <Element name={'sponsors'}>
                <Sponsors/>
            </Element>

            <Element name={'droids'}>
                <Droids/>
            </Element>

            <Element id='team' name={'team'}>
                <Team/>
            </Element>
            <Element name={'map'}>
                <Location/>
            </Element>
            {/*<Element name={'job'}>*/}
            {/*    <Jobs/>*/}
            {/*</Element>*/}
            <Element name={'faq'}>
                <Faq/>
            </Element>

        </div>
    );
};

export default Home;
