import React from 'react';
import './team.css';

import m1 from '../../../images/member1.png';
import m2 from '../../../images/member2.png';
import m3 from '../../../images/member3.png';
import m6 from '../../../images/member6.png';
import m5 from '../../../images/member5.png';


const teamMembers = [
    {
        url: m1,
        name: 'Alexander Adamyan',        
        position: `Co-Founder at Simply Technologies`
    },
    {
        name: 'Varser Zakaryan',
        url: m6,
        position: 'Project Manager at JSConf Armenia'
    },
    {
        name: 'Gevorg Harutyunyan',
        url: m3,
        position: 'Front-End Architect at Screenful, Founder of ModularCode'
    },
    {
        name: 'Rouben Meschian',
        url: m5,
        position: 'Founding Software Engineer at Cambridge Semantics'
    },
    {
        name: 'Edgar Marukyan',
        url: m2,
        position: 'CTO at Renderforest'
    },
];

const Team = () => {
    return (
        <div className={'toCenter'}>

            <h1 className={'team_title'}>
                GALACTIC <span style={{color: '#FF4700'}}>TEAM</span>
            </h1>

            <div className={'galaxic_team'}>
                {teamMembers.map((member, i) => {

                    return (
                        <div className={'member_info'} key={i}>

                            <div className={'mem_img'}>
                                <img src = {member.url } />
                            </div>

                            <h2 className={'name'}>{member.name}</h2>
                            <p className={'position'}>{member.position}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default Team;