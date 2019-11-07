import React from 'react';
import NataliaTepluhina from '../../../images/speakers/natalia.jpg';
import HrachMkrtchyan from '../../../images/speakers/hrach.jpg';
import EdgarMarukyan from '../../../images/speakers/edgar.jpg';
import RomanEnikeev from '../../../images/speakers/roman.jpg';
import RubenHarutyunyan from '../../../images/speakers/ruben.png';
import StephanieSiaw from '../../../images/speakers/stephanie.jpeg';
import RoubenMeschian from '../../../images/speakers/rouben.jpg';
import KhachaturVirabyan from '../../../images/speakers/khachatur.jpg';
import HaykBarseghyan from '../../../images/speakers/hayk.jpg';
import IrisSchaffer from '../../../images/speakers/iris.png';
import LilitTadevosyan from '../../../images/speakers/lilit.jpg';
import ArmenVardanyan from '../../../images/speakers/armen.png';
import DavitAbgaryan from '../../../images/speakers/davit.jpeg';
import LeandroOstera from '../../../images/speakers/leandro.jpg';
import FarzadYousefZadeh from '../../../images/speakers/farzad.jpg';
import TejasKumar from '../../../images/speakers/tejas.png';
import NicoloMezzopera from '../../../images/speakers/nicolo.jpg';
import NairiHarutyunyan from '../../../images/speakers/nairi.jpeg';
import githubIcon from '../../../images/github.png';
import twitterIcon from '../../../images/twitter.png';
import galacticjedies from '../../../images/galactic-jedies@2x.png';
import linkedInIcon from '../../../images/linkedin.png';
import './jedies.css';

const jediesList = [
    {
        name: 'Natalia Tepluhina',
        image: NataliaTepluhina,
        desc: 'Vue.js Core Team Member, Google Developers Expert, Senior Frontend Engineer at GitLab Inc.',
        socialLinks: {
            github: 'https://github.com/NataliaTepluhina',
            linkedIn: 'https://www.linkedin.com/in/ntepluhina/',
            twitter: 'https://twitter.com/n_tepluhina?',
        }
    },
    {
        name: 'Tejas Kumar',
        image: TejasKumar,
        desc: 'Tejas is an award-winning engineer and speaker about web technologies.',
        socialLinks: {
            github: 'https://github.com/TejasQ',
            twitter: 'https://twitter.com/TejasKumar_',
        }
    },
    {
        name: 'Nicolò Maria Mezzopera',
        image: NicoloMezzopera,
        desc: 'Senior Frontend Engineer at Gitlab Inc., Passionate Vue.js developer',
        socialLinks: {
            github: 'https://github.com/DonNicoJs',
            linkedIn: 'https://www.linkedin.com/in/nicolò-maria-mezzopera-3a50b732/',
            twitter: 'https://twitter.com/DonNicoJs',
        }
    },
    {
        name: 'Hayk Barseghyan',
        image: HaykBarseghyan,
        desc: 'Senior Member Of Technical Staff at VMware',
        socialLinks: {
            linkedIn: 'https://www.linkedin.com/in/hayk-barseghyan/',
        }
    },
    {
        name: 'Roman Enikeev',
        image: RomanEnikeev,
        desc: 'Development Lead at DataArt with more than 12 years of production experience',
        socialLinks: {
            linkedIn: 'https://www.linkedin.com/in/roman-enikeev/',
        }
    },
    {
        name: 'Stephanie Siaw',
        image: StephanieSiaw,
        desc: 'Engineering Manager at Deliveroo',
        socialLinks: {
            github: 'https://github.com/stephanie',
            linkedIn: 'https://www.linkedin.com/in/stephaniesiaw/',
            twitter: 'https://twitter.com/siaw_stephanie',
        }
    },
    {
        name: 'Edgar Marukyan',
        image: EdgarMarukyan,
        desc: 'Co-founder at JS Conf Armenia, CTO at Renderforest',
        socialLinks: {
            github: 'https://github.com/emarukyan',
            linkedIn: 'https://www.linkedin.com/in/edgar-marukyan-a8a9aa39/',
            twitter: 'https://twitter.com/emarukyan',
        }
    },
    {
        name: 'Nairi Harutyunyan',
        image: NairiHarutyunyan,
        desc: 'Back-end Engineer at Screenful',
        socialLinks: {
            github: 'https://github.com/nairihar',
            linkedIn: 'https://www.linkedin.com/in/nairi-harutyunyan-62a865106/',
            twitter: 'https://twitter.com/nairihar',
        }
    },
    {
        name: 'Hrach Mkrtchyan',
        image: HrachMkrtchyan,
        desc: 'React.js Engineer at Renderforest',
        socialLinks: {
            github: 'https://github.com/hrachmkr',
            linkedIn: 'https://www.linkedin.com/in/hrach-mkrtchyan-a23678134/',
            twitter: 'https://twitter.com/HrachMkr',
        }
    },
    {
        name: 'Iris Schaffer',
        image: IrisSchaffer,
        desc: 'Front-end Developer at SRC, with a passion for user experience and design',
        socialLinks: {
            github: 'https://github.com/irisSchaffer',
            linkedIn: 'https://www.linkedin.com/in/iris-schaffer-91b73798',
            twitter: 'https://twitter.com/iris_schaffer',
        }
    },
    {
        name: 'Davit Abgaryan',
        image: DavitAbgaryan,
        desc: 'Senior Software Developer at SuperAnnotate',
        socialLinks: {
            linkedIn: 'https://www.linkedin.com/in/davabgaryan/',
            
        }
    },
    {
        name: 'Farzad Yousef Zadeh',
        image: FarzadYousefZadeh,
        desc: 'Senior Software Engineer, International Conference Speaker',
        socialLinks: {
            github: 'https://github.com/farskid',
            linkedIn: 'https://www.linkedin.com/in/farzadyz/',
            twitter: 'https://twitter.com/farzad_yz',
        }
    },
    {
        name: 'Rouben Meschian',
        image: RoubenMeschian,
        desc: 'Co-founder at JS Conf Armenia, Founding Engineer at Cambridge Semantics',
        socialLinks: {
            github: 'https://github.com/rmeschian',
            linkedIn: 'https://www.linkedin.com/in/roubenmeschian/',
            twitter: 'https://twitter.com/meschian',
        }
    },
    {
        name: 'Khachatur Virabyan',
        image: KhachaturVirabyan,
        desc: 'Frontend engineer at DataArt with extreme passion towards functional programming, design.',
        socialLinks: {
            github: 'https://github.com/Khachatour',
            twitter: 'https://twitter.com/kh_mugh',
        }
    },
    {
        name: 'Lilit Tadevosyan',
        image: LilitTadevosyan,
        desc: 'Senior Software Engineer at Workfront Armenia',
        socialLinks: {
            github: 'https://github.com/lilittad',
            linkedIn: 'https://www.linkedin.com/in/lilittadevosyan/',
        }
    },
    {
        name: 'Ruben Harutyunyan',
        image: RubenHarutyunyan,
        desc: 'Full-stack Web Developer',
        socialLinks: {
            github: 'https://github.com/Vagr9K',
            linkedIn: 'https://www.linkedin.com/in/ruben-harutyunyan/',
            twitter: 'https://twitter.com/Vagr9K',
        }
    },
    {
        name: 'Leandro Ostera',
        image: LeandroOstera,
        desc: 'Research Engineer at SRC',
        socialLinks: {
            github: 'https://github.com/ostera',
            linkedIn: 'https://linkedin.com/in/ostera',
            twitter: 'https://twitter.com/leostera',
        }
    },
    {
        name: 'Armen Vardanyan',
        image: ArmenVardanyan,
        desc: 'Senior Angular Developer at VOLO',
        socialLinks: {
            github: 'https://github.com/Armenvardanyan95',
            linkedIn: 'https://www.linkedin.com/in/armen-vardanyan-am/',
            twitter: 'https://twitter.com/Armandotrue',
        }
    },
];

const Jedies = () => (
    <div>
        <div class='galactic-jedies'>
            <img src={galacticjedies} class='galactic-jedies' alt='Galactic Jedies'></img></div>
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
