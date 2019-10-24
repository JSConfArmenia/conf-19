import React from 'react';
import gevorgImage from '../../../images/member3.png';
import githubIcon from '../../../images/githubwhite.png';
import twitterIcon from '../../../images/twitwhite.png';
import linkedInIcon from '../../../images/instwhite.png';
import './jedies.css';

const jediesList = [
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
    {
        name: 'Gevorg Harutyunyan',
        image: gevorgImage,
        desc: 'Founder of 4th Galaxy of Noodles, A Male Penguin, Co-Owner of female part of population XD',
        socialLinks: {
            github: 'http://github.com',
            linkedIn: 'http://linkedin.com',
            twitter: 'http://twitter.com',
        }
    },
];

const Jedies = () => (
    <div>
        <h1 className='jedies-heading'>
            Galactic Jedies
        </h1>
        <div className='jedies-section-wrapper'>
            {
                jediesList.map(jedi => (
                    <div className='jedi-person'>
                        <div className='jedi-image'>
                            <img src={jedi.image} alt={jedi.name}/>
                        </div>
                        <div className='jedi-section-content'>
                            <div className="header">
                                {jedi.name}
                            </div>
                            <div className="content">
                                {jedi.desc}
                            </div>
                            <div className="social-buttons">
                                {
                                    !!jedi.socialLinks.github && (
                                        <div className='jedi-section-social'>
                                            <a target='_blank' href={jedi.socialLinks.github}>
                                                <img src={githubIcon} alt="github"/>
                                            </a>
                                        </div>
                                    )
                                }
                                {
                                    !!jedi.socialLinks.linkedIn && (
                                        <div className='jedi-section-social'>
                                            <a target='_blank' href={jedi.socialLinks.linkedIn}>
                                                {/*TODO: update this image src to show linkedin icon*/}
                                                <img src={linkedInIcon} alt="linkedIn"/>
                                            </a>
                                        </div>
                                    )
                                }
                                {
                                    !!jedi.socialLinks.twitter && (
                                        <div className='jedi-section-social'>
                                            <a target='_blank' href={jedi.socialLinks.twitter}>
                                                <img src={twitterIcon} alt="twitter"/>
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Jedies;
