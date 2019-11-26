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
        id: 1,
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
        id: 2,
        name: 'Tejas Kumar',
        image: TejasKumar,
        desc: 'Tejas is an award-winning engineer and speaker about web technologies.',
        socialLinks: {
            github: 'https://github.com/TejasQ',
            twitter: 'https://twitter.com/TejasKumar_',
        }
    },
    {
        id: 3,
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
        id: 4,
        name: 'Hayk Barseghyan',
        image: HaykBarseghyan,
        desc: 'Senior Member Of Technical Staff at VMware',
        socialLinks: {
            linkedIn: 'https://www.linkedin.com/in/hayk-barseghyan/',
        }
    },
    {
        id: 5,
        name: 'Roman Enikeev',
        image: RomanEnikeev,
        desc: 'Development Lead at DataArt with more than 12 years of production experience',
        socialLinks: {
            linkedIn: 'https://www.linkedin.com/in/roman-enikeev/',
        }
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
        name: 'Davit Abgaryan',
        image: DavitAbgaryan,
        desc: 'Senior Software Developer at SuperAnnotate',
        socialLinks: {
            linkedIn: 'https://www.linkedin.com/in/davabgaryan/',
            
        }
    },
    {
        id: 12,
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
        id: 13,
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
        id: 14,
        name: 'Khachatur Virabyan',
        image: KhachaturVirabyan,
        desc: 'Frontend engineer at Teamable Armenia with extreme passion towards functional programming, design.',
        socialLinks: {
            github: 'https://github.com/Khachatour',
            twitter: 'https://twitter.com/kh_mugh',
        }
    },
    {
        id: 15,
        name: 'Lilit Tadevosyan',
        image: LilitTadevosyan,
        desc: 'Senior Software Engineer at Workfront Armenia',
        socialLinks: {
            github: 'https://github.com/lilittad',
            linkedIn: 'https://www.linkedin.com/in/lilittadevosyan/',
        }
    },
    {
        id: 16,
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
        id: 17,
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
        id: 18,
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

export { jediesList as list  };

const Jedies = () => (
    <div>
        <div className='galactic-jedies'>
            <img src={galacticjedies} className='galactic-jedies' alt='Galactic Jedies'></img></div>
        <div className='jedies-section-wrapper'>
            {
                jediesList.map(jedi => (
                    <div className='jedi-person' key={jedi.name}>
                        <div className='jedi-image'>
                            <img src={jedi.image} alt={jedi.name}/>
                        </div>
                        <div className='jedi-section-content'>
                            <div className="header">
                                {jedi.name}
                            </div>
                            <div className="content">
                                {jedi.desc}
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
                    </div>
                ))
            }
        </div>
    </div>
);

export default Jedies;
