import React from 'react';
import './jobs.css';


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


            <h1 className={'job_title'}>
                Galactic <span style={{color: '#15C70E'}}>JOBS</span>
            </h1>

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