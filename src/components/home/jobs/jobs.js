import React from 'react';
import './jobs.css';
import jobsTitleImage from '../../../images/galactic-jobs@2x.png';


const galacticJobs = [
    {
        title: 'Node.js Engineer',
        company: 'DataArt Armenia',
        link:"https://staff.am/nodejs-engineer-11"
    },
    {
        title: 'Full Stack Software Engineer',
        company: 'Vineti AM',
        link:"https://recruiting.paylocity.com/Recruiting/Jobs/Details/59317"
    },
    {
        title: 'ReactJS Engineer',
        company: 'Renderforest',
        link:"https://www.renderforest.com/careers/reactjs-engineer"
    },
    {
        title: 'Front-end Developer',
        company: 'Renderforest',
        link:"https://www.renderforest.com/careers/frontend-developer"
    },
    {
        title: 'Mid+/Senior JavaScript Developer',
        company: 'Simply Technologies',
        link:"https://www.itjobs.am/job/simply_technologies/midsenior_full_stack_javascript_rockstar/5d88a30a9f81930004f72988"
    },
    {
        title: 'Software Engineering Manager',
        company: 'Vineti AM',
        link:"https://recruiting.paylocity.com/Recruiting/Jobs/Details/110679"
    },
    {
        title: 'Senior JavaScript Developer',
        company: 'Flux Technologies',
        link:"https://fluxtech.me/careers/?tab=senior-java-script-developer"
    },
    {
        title: 'Front-End Engineer',
        company: 'DataArt Armenia',
        link:"https://staff.am/front-end-angularreactjs-engineer-12"
    },
    
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'Digitain',
        link: 'https://digitain.com/vacancy/mid-senior-javascript-developer-2/'
    }
];

const Jobs = () => {
    return (

        <div className={'toCenter'}>


            <img
                src={jobsTitleImage}
                className={'job_title'}
                alt={'Job postings'} />

            <div className={'job_info'}>

                {galacticJobs.map((job, i) => {
                    return (
                        <div className={'single_job'} key={job.title + i}>

                            {
                                    <>
                                        <a href={job.link}> <div className={'single_job_title'}>
                                            {job.title}
                                        </div>
                                        <div className="companyName">{job.company}</div>
                                        </a>
                                    </>

                            }

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default Jobs;
