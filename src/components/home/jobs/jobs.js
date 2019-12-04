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
        title: 'Full-Stack Software Engineer',
        company: 'Vineti AM',
        link:"https://recruiting.paylocity.com/Recruiting/Jobs/Details/59317"
    },
    {
        title: 'Mid Front-End Developer',
        company: 'Simply Technologies',
        link:"https://www.itjobs.am/job/simply_technologies/mid_front_end_developer/5dc5864a7fa6a30004df258c"
    },
    {
        title: 'ReactJS Engineer',
        company: 'Renderforest',
        link:"https://www.renderforest.com/careers/reactjs-engineer"
    },
    {
        title: 'Front-End Developer',
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
        title: 'Node.js Developer',
        company: 'SuperAnnotate',
        link:"https://www.facebook.com/superannotate/posts/421661518509145"
    },
    {
        title: 'Senior Front-End Developer',
        company: 'Simply Technologies',
        link:"https://www.itjobs.am/job/simply_technologies/senior_front_end_rockstar/5dc924669a743700040c9870"
    },
    {
        title: 'Front-End Engineer',
        company: 'DataArt Armenia',
        link:"https://staff.am/front-end-angularreactjs-engineer-12"
    },
    {
        title: 'Senior Back-End Developer',
        company: 'Simply Technologies',
        link:"https://www.itjobs.am/job/simply_technologies/senior_back_end_ninja/5dc967dd9a743700040c9871"
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'Digitain',
        link: 'https://digitain.com/vacancy/mid-senior-javascript-developer-2/'
    },
    {
        title: 'Angular Developer',
        company: 'SuperAnnotate',
        link:"https://www.facebook.com/superannotate/posts/421663465175617"
    },
    {
        title: 'Mid Back-End Developer',
        company: 'Simply Technologies',
        link:"https://www.itjobs.am/job/simply_technologies/mid_back_end_developer/5dc8ff57fdecf10004da159d"
    },
    {
        title: 'Front-end Developer',
        company: 'Ameriabank',
        link:"https://recruitment.ameriabank.am/job-details/398"
    },
    {
        title: 'Front-end Developer',
        company: 'Ameriabank',
        link:"https://recruitment.ameriabank.am/job-details/398"
    },
    {
        title: 'Head of Front-end Development Division',
        company: 'Ameriabank',
        link:"https://recruitment.ameriabank.am/job-details/261"
    },
    {
        title: 'Front-end Internship',
        company: 'Teamable',
        link:"https://jobs.lever.co/teamable/6c4c3e66-859e-42d8-9198-09168c4c1411"
    },
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
                            <a target={job.title+'-blank'} href={job.link}> <div className={'single_job_title'}>
                                {job.title}
                            </div>
                            <div className="companyName">{job.company}</div>
                            </a>

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default Jobs;
