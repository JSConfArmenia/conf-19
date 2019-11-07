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
import Jslogo from './Jslogo/Jslogo';
import Jedies from "./jedies";
import Companies from "./Companies";

const Home = () => {
    return (
        <div className={'wrapper'}>
            <Jslogo/>
            <JsConf/>
            <Element id='jedies' name={'jedies'}>
                <Jedies />
            </Element>
            {/* <Element name={'speakers'}>
                <Speakers/>
            </Element> */}            
            <Element id='sponsors' name={'Companies'}>
                <Sponsors/>
            </Element>
            {/* <Element name='companies'>
                <Companies/>
            </Element> */}
            <Element id='jobsTitleImage' name={'job'}>
               <Jobs/>
            </Element>       
            {/* <Element name={'droids'}>
                <Droids/>
            </Element> */}
            <Element id='team' name={'team'}>
                <Team/>
            </Element>
            <Element name={'map'}>
                <Location/>
            </Element>
            <Element name={'faq'}>
                <Faq/>
            </Element>

        </div>
    );
};

export default Home;
