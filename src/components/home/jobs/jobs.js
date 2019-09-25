import React from 'react';
import './jobs.css';
import jobsTitleImage from '../../../images/galactic-jobs@2x.png';


const galacticJobs = [
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        link:"#"
    },
    {
        title: 'React Engineer',
        company: 'Renderforest',
        link:"#"
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        link:"#"
    },
    {
        title: 'React Engineer',
        company: 'Renderforest',
        link:"#"
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        link:"#"
    },
    {
        title: 'React Engineer',
        company: 'Renderforest',
        link:"#"
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        link:"#"
    },
    {
        title: 'React Engineer',
        company: 'Renderforest',
        link:"#"
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        link:"#"
    },
    {
        title: 'React Engineer',
        company: 'Renderforest',
        link:"#"
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        link:"#"
    },
    {
        title: 'React Engineer',
        company: 'Renderforest',
        link:"#"
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
